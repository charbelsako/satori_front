import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { SortDirection, NgbdSortableHeader, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { PayorTypeService } from '../../service/payor-type.service';
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
  selector: 'app-payor-type',
  templateUrl: './payor-type.component.html',
  styleUrls: ['./payor-type.component.scss'],
  animations: [routerTransition()]
})
export class PayorTypeComponent implements OnInit {
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  payorTypes: any = [];
  sortedColumn!: string;
  sortedDirection!: string;
  isPayorTypes: boolean = true;
  isLoading: boolean = false;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  public _state: State = {
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'asc',
  };
  isEditAccess: boolean = false;
  constructor(
    public router: Router,
    public payorTypeService: PayorTypeService,
    private cdr: ChangeDetectorRef,
    public jwtService: JwtService,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
            .pipe(debounceTime(200), distinctUntilChanged())
            .subscribe(value => {
                this._state.searchTerm = value;
                this.getPayorTypes(this._state);
            });
  }

  ngOnInit() {
    this.isLoading = true;
    this.isEditAccess = this.jwtService.checkAccess('data-mangement');
    this.getPayorTypes(this._state);
  }

  getPayorTypes(state: State) {
    this.isLoading = true;
    this.payorTypeService.getPayorTypes(state).subscribe(response => {
        this.payorTypes = response['results'];
        this.setState(response);
        if (this.payorTypes.length == 0) {
            this.isPayorTypes = false;
        }else {
            this.isPayorTypes = true;
        }
        this.isLoading = false;
    },(error)=>{
        this.isLoading = false;
    });
}
reload() {
    window.scrollTo(0, 400);
    this.getPayorTypes(this._state);
  }
editPayorType(id: string) {
    this.router.navigate(['/data-mangement/payor-types/edit-payor-type/' + id]);
}

deletePayorType(id: string) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this payor type ?')
        .then((confirmed) => {
            if (confirmed) {
                this.payorTypeService.deletePayorType(id).subscribe(response => {
                    this.getPayorTypes(this._state);
                })
            }
        }
        );
}


onSort({ column, direction }: SortEvent) {
    alert(column);
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this._state.sortColumn = column;
    this._state.sortDirection = direction;
    this.getPayorTypes(this._state);
}

refresh() {
    this.getPayorTypes(this._state);
}

setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
}
}
