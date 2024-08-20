import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { SortDirection, NgbdSortableHeader, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { BillingcurrencyService } from '../../service/billingcurrency.service';
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
  selector: 'app-billingcurrency',
  templateUrl: './billingcurrency.component.html',
  styleUrls: ['./billingcurrency.component.scss'],
  animations: [routerTransition()]
})
export class BillingcurrencyComponent implements OnInit {
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  billingcurrencys: any = [];
  sortedColumn!: string;
  sortedDirection!: string;
  isBillingcurrencys: boolean = true;
  isLoading: boolean = false;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  @ViewChild('content') content: ElementRef;
  public _state: State = {
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'asc',
  };
  isEditAccess: boolean= false;
  constructor(
    public router: Router,
    public billingcurrencyService: BillingcurrencyService,
    private cdr: ChangeDetectorRef,
    public jwtService: JwtService,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
            .pipe(debounceTime(200), distinctUntilChanged())
            .subscribe(value => {
                this._state.searchTerm = value;
                this.getBillingcurrencys(this._state);
            });
  }

  ngOnInit() {
    this.isLoading = true;
    this.isEditAccess = this.jwtService.checkAccess('data-mangement');
    this.getBillingcurrencys(this._state);
  }
  reload() {
    window.scrollTo(0, 400);
    this.getBillingcurrencys(this._state);
  }

  getBillingcurrencys(state: State) {
    this.isLoading = true;
    this.billingcurrencyService.getBillingcurrencys(state).subscribe(response => {
        this.billingcurrencys = response['results'];
        this.setState(response);
        if (this.billingcurrencys.length == 0) {
            this.isBillingcurrencys = false;
        }else {
            this.isBillingcurrencys = true;
        }
        this.isLoading = false;
    },(error)=>{
        this.isLoading = false;
    });
}

editBillingcurrency(id: string) {
    this.router.navigate(['/data-mangement/billingcurrencies/edit-billingcurrency/' + id]);
}

deleteBillingcurrency(id: string) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this billing currency ?')
        .then((confirmed) => {
            if (confirmed) {
                this.billingcurrencyService.deleteBillingcurrency(id).subscribe(response => {
                    this.getBillingcurrencys(this._state);
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
    this.getBillingcurrencys(this._state);
}

refresh() {
    this.getBillingcurrencys(this._state);
}

setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
}
}
