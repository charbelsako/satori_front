import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NgbdSortableHeader, SortDirection, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { UserService } from '../../service/user.service';
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
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [routerTransition()]
})
export class UserComponent implements OnInit {
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  users: any[] = [];
  sortedColumn!: string;
  sortedDirection!: string;
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  isLoading: boolean = false;
  isUsers: boolean = true;

  public _state: State = {
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'desc',
  };
  constructor(
    public router: Router,
    public userService: UserService,
    private cdr: ChangeDetectorRef,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(value => {
        this._state.searchTerm = value;
        this.getAllUsers(this._state);
      });
  }

  ngOnInit() {
    this.isLoading = true;
    this.getAllUsers(this._state);
  }

  onSort({ column, direction }: SortEvent) {
    console.log(column,"--------", direction);
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this._state.sortColumn = column;
    this._state.sortDirection = direction;
    this.getAllUsers(this._state);
  }

  getAllUsers(state: State) {
    this.userService.getUsers(state).subscribe(
      response => {
        this.users = response.results;
        if (this.users.length == 0) {
          this.isUsers = false;
        } else {
          this.isUsers = true;
        }
        this.setState(response);
        this.isLoading = false;
      }
    );
  }


  refreshUsers() {
    this.getAllUsers(this._state);
  }

  setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
  }

  editUser(userId: string) {
    this.router.navigate(['/users/edit-user/' + userId]);
  }

  updateStatus(userId: string, status: boolean) {
    let data = {
      isActive: !status
    }
    this.userService.updateUser(userId, data).subscribe(response => {
      if (response) {
        // this.toastr.success(response.name + ' Updated!', 'Success');
        this.refreshUsers();
      }
    });
  }

  updateFavorite(userId: string, status: boolean) {
    let data = {
      isFavorite: !status
    }
    this.userService.updateUser(userId, data).subscribe(response => {
      if (response) {
        // this.toastr.success(response.name + ' Updated!', 'Success');
        this.refreshUsers();
      }
    });
  }

  deleteUser(userId: string) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this user ?')
      .then((confirmed) => {
        if (confirmed) {
          this.userService.deleteUser(userId).subscribe(response => {
            this.getAllUsers(this._state);
          });
        }
      })
  }
}
