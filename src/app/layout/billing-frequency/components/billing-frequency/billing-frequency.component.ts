import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { SortDirection, NgbdSortableHeader, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { BillingFrequencyService } from '../../service/billing-frequency.service';
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
  selector: 'app-billing-frequency',
  templateUrl: './billing-frequency.component.html',
  styleUrls: ['./billing-frequency.component.scss'],
  animations: [routerTransition()]
})
export class BillingFrequencyComponent implements OnInit {
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  billingFrequencies: any = [];
  sortedColumn!: string;
  sortedDirection!: string;
  isBillingFrequencies: boolean = true;
  isLoading: boolean = false;
  isEditAccess: boolean= false;

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
  constructor(
    public router: Router,
    public billingFrequencyService: BillingFrequencyService,
    private cdr: ChangeDetectorRef,
    public jwtService: JwtService,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
            .pipe(debounceTime(200), distinctUntilChanged())
            .subscribe(value => {
                this._state.searchTerm = value;
                this.getBillingFrequencies(this._state);
            });
  }

  ngOnInit() {
    this.isLoading = true;
    this.isEditAccess = this.jwtService.checkAccess('data-mangement');
    this.getBillingFrequencies(this._state);
  }

  getBillingFrequencies(state: State) {
    this.isLoading = true;
    this.billingFrequencyService.getBillingFrequencies(state).subscribe(response => {
        this.billingFrequencies = response['results'];
        this.setState(response);
        if (this.billingFrequencies.length == 0) {
            this.isBillingFrequencies = false;
        }else {
            this.isBillingFrequencies = true;
        }
        this.isLoading = false;
    },(error)=>{
        this.isLoading = false;
    });
}
reload() {
    window.scrollTo(0, 400);
    this.getBillingFrequencies(this._state);
  }
editBillingFrequency(id: string) {
    this.router.navigate(['/data-management/billing-frequencies/edit-billing-frequency/' + id]);
}

deleteBillingFrequency(id: string) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this billing frequency ?')
        .then((confirmed) => {
            if (confirmed) {
                this.billingFrequencyService.deleteBillingFrequency(id).subscribe(response => {
                    this.getBillingFrequencies(this._state);
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
    this.getBillingFrequencies(this._state);
}

refresh() {
    this.getBillingFrequencies(this._state);
}

setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
}
}
