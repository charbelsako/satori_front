import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NgbdSortableHeader, SortDirection, SortEvent } from '@app/shared/directives';
import { StaffService } from '@app/layout/staff/service/staff.service';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { RoleService } from '../../service/role.service';
import { JwtService } from '@app/shared/services';
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
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  animations: [routerTransition()]
})
export class RolesComponent implements OnInit {
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  sortedColumn!: string;
  sortedDirection!: string;
  isLoading: boolean = false;
  isRoles: boolean = true;
  roles: any = [];

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
    public rolesService: RoleService,
    private cdr: ChangeDetectorRef,
    public jwtService: JwtService,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(value => {
        this._state.searchTerm = value;
        this.getAllRoles(this._state);
      });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.isEditAccess = this.jwtService.checkAccess('roles');
    this.getAllRoles(this._state);
  }

  onSort({ column, direction }: SortEvent) {
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this._state.sortColumn = column;
    this._state.sortDirection = direction;
    this.getAllRoles(this._state);
  }

  getAllRoles(state: State) {
    this.isLoading = true;
    this.rolesService.getRoles(state).subscribe(
      response => {
        this.roles = response.results;
        if (this.roles.length == 0) {
          this.isRoles = false;
        } else {
          this.isRoles = true;
        }
        this.setState(response);
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  refreshRoles() {
    this.getAllRoles(this._state);
  }

  setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
  }

  editRole(roleId: string) {
    this.router.navigate(['/roles/edit-role/' + roleId]);
  }

  updateStatus(roleId: string, status: boolean){
    let data ={
        isActive: !status
    }
    this.rolesService.updateRole(roleId, data).subscribe(response => {
        if (response) {
            // this.toastr.success(response.name + ' Updated!', 'Success');
            this.refreshRoles();
        }
    });
}

  deleteRole(roleId: string) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this user ?')
      .then((confirmed) => {
        if (confirmed) {
          this.rolesService.deleteRole(roleId).subscribe(response => {
            this.getAllRoles(this._state);
          });
        }
      })
  }
}
