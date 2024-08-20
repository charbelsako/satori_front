import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { SortDirection, NgbdSortableHeader, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { HourlyBillingService } from '../../service/hourly-billing.service';
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
  selector: 'app-hourly-billing',
  templateUrl: './hourly-billing.component.html',
  styleUrls: ['./hourly-billing.component.scss'],
  animations: [routerTransition()]
})
export class HourlyBillingComponent implements OnInit {
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  hourlyBillings: any = [];
  sortedColumn!: string;
  sortedDirection!: string;
  isHourlyBillings: boolean = true;
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
    public hourlyBillingService: HourlyBillingService,
    private cdr: ChangeDetectorRef,
    public jwtService: JwtService,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
            .pipe(debounceTime(200), distinctUntilChanged())
            .subscribe(value => {
                this._state.searchTerm = value;
                this.getHourlyBillings(this._state);
            });
  }

  ngOnInit() {
    this.isLoading = true;
    this.isEditAccess = this.jwtService.checkAccess('data-mangement');
    this.getHourlyBillings(this._state);
  }
  reload() {
    window.scrollTo(0, 400);
    this.getHourlyBillings(this._state);
  }

  getHourlyBillings(state: State) {
    this.isLoading = true;
    this.hourlyBillingService.getHourlyBillings(state).subscribe(response => {
        this.hourlyBillings = response['results'];
        this.setState(response);
        if (this.hourlyBillings.length == 0) {
            this.isHourlyBillings = false;
        }else {
            this.isHourlyBillings = true;
        }
        this.isLoading = false;
    },(error)=>{
        this.isLoading = false;
    });
}

editHourlyBilling(id: string) {
    this.router.navigate(['/data-mangement/hourly-billings/edit-hourly-billing/' + id]);
}

deleteHourlyBilling(id: string) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this hourly billing ?')
        .then((confirmed) => {
            if (confirmed) {
                this.hourlyBillingService.deleteHourlyBilling(id).subscribe(response => {
                    this.getHourlyBillings(this._state);
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
    this.getHourlyBillings(this._state);
}

refresh() {
    this.getHourlyBillings(this._state);
}

setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
}
}
