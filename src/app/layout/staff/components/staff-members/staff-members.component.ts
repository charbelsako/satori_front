import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { StaffService } from '../../service/staff.service';
import { JwtService } from '@app/shared/services/jwt/jwt.service';
import { NgbdSortableHeader, SortDirection, SortEvent } from '../../directives/sortable.directive';
interface State {
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}
@Component({
  selector: 'app-staff-members',
  templateUrl: './staff-members.component.html',
  styleUrls: ['./staff-members.component.scss'],
  animations: [routerTransition()]
})
export class StaffMembersComponent implements OnInit {
  sortedColumn!: string;
  sortedDirection!: string;
  users: any[] = [];
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  isLoading: boolean = false;
  isUsers: boolean = true;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  public _state: State = {
    page: 1,
    limit: 20,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'desc',
  };
  isEditAccess: boolean = false;
  constructor(
    public router: Router,
    public staffsService: StaffService,
    public jwtService: JwtService,
    private cdr: ChangeDetectorRef,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(value => {
        this._state.searchTerm = value;
        this.getStaffMembers(this._state);
      });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.isEditAccess = this.jwtService.checkAccess('employees');
    this.getStaffMembers(this._state);
  }


  getStaffMembers(state: State) {
    // this.isLoading = true;
    this.staffsService.getStaffs(state).subscribe(response => {
      if (response && response.results) {
        this.users = response['results'];
        if (this.users.length == 0) {
          this.isUsers = false;
        } else {
          this.isUsers = true;
        }
        this.setState(response);
        this.isLoading = false;
      };
      this.cdr.detectChanges();
    }, (error) => {
      this.isLoading = false;
    });
  }

  refreshStaff() {
    this.getStaffMembers(this._state);
  }

  setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
  }

  editUser(id: string) {
    this.router.navigate(['/employees/edit-employee/' + id]);
  }

  updateStatus(userId: string, status: boolean){
    let data ={
        isActive: !status
    }
    this.staffsService.updateMember(userId, data).subscribe(response => {
        if (response) {
            // this.toastr.success(response.name + ' Updated!', 'Success');
            this.refreshStaff();
        }
    });
}

  deleteUser(id: string) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this user ?')
      .then((confirmed) => {
        if (confirmed) {

          this.staffsService.deleteUser(id).subscribe(response => {
            this.getStaffMembers(this._state);
          })
        }
      }
      );
  }

  onSort({ column, direction }: SortEvent) {
    console.log(column, direction);
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this._state.sortColumn = column;
    this._state.sortDirection = direction;
    this.getStaffMembers(this._state);
  }
}
