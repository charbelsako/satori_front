import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { SortDirection, NgbdSortableHeader, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { BillingMethodService } from '../../service/billing-method.service';
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
  selector: 'app-billing-method',
  templateUrl: './billing-method.component.html',
  styleUrls: ['./billing-method.component.scss'],
  animations: [routerTransition()]
})
export class BillingMethodComponent implements OnInit {
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  billingMethods: any = [];
  sortedColumn!: string;
  sortedDirection!: string;
  isBillingMethods: boolean = true;
  isLoading: boolean = false;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  public _state: State = {
    page: 1,
    limit: 20,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'asc',
  };
  isEditAccess: boolean= false;
  constructor(
    public router: Router,
    public billingMethodService: BillingMethodService,
    private cdr: ChangeDetectorRef,
    public jwtService: JwtService,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
            .pipe(debounceTime(200), distinctUntilChanged())
            .subscribe(value => {
                this._state.searchTerm = value;
                this.getBillingMethods(this._state);
            });
  }

  ngOnInit() {
    this.isLoading = true;
    this.isEditAccess = this.jwtService.checkAccess('data-mangement');
    this.getBillingMethods(this._state);
  }

  getBillingMethods(state: State) {
    this.isLoading = true;
    this.billingMethodService.getBillingMethods(state).subscribe(response => {
        this.billingMethods = response['results'];
        this.setState(response);
        if (this.billingMethods.length == 0) {
            this.isBillingMethods = false;
        }else {
            this.isBillingMethods = true;
        }
        this.isLoading = false;
    },(error)=>{
        this.isLoading = false;
    });
}
reload() {
    window.scrollTo(0, 400);
    this.getBillingMethods(this._state);
  }
editBillingMethod(id: string) {
    this.router.navigate(['/data-mangement/billing-methods/edit-billing-method/' + id]);
}

deleteBillingMethod(id: string) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this billing method ?')
        .then((confirmed) => {
            if (confirmed) {
                this.billingMethodService.deleteBillingMethod(id).subscribe(response => {
                    this.getBillingMethods(this._state);
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
    this.getBillingMethods(this._state);
}

refresh() {
    this.getBillingMethods(this._state);
}

setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
}
}
