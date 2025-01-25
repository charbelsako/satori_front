import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { SortDirection, NgbdSortableHeader, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { BaseRateService } from '../../service/base-rate.service';
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
  selector: 'app-base-rate',
  templateUrl: './base-rate.component.html',
  styleUrls: ['./base-rate.component.scss'],
  animations: [routerTransition()]
})
export class BaseRateComponent implements OnInit {
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  baseRates: any = [];
  sortedColumn!: string;
  sortedDirection!: string;
  isBaseRates: boolean = true;
  isLoading: boolean = false;
  isEditAccess: boolean= false;

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
  constructor(
    public router: Router,
    public baseRateService: BaseRateService,
    private cdr: ChangeDetectorRef,
    public jwtService: JwtService,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
            .pipe(debounceTime(200), distinctUntilChanged())
            .subscribe(value => {
                this._state.searchTerm = value;
                this.getBaseRates(this._state);
            });
  }

  ngOnInit() {
    this.isLoading = true;
    this.isEditAccess = this.jwtService.checkAccess('data-mangement');
    this.getBaseRates(this._state);
  }
  reload() {
    window.scrollTo(0, 400);
    this.getBaseRates(this._state);
  }

  getBaseRates(state: State) {
    this.isLoading = true;
    this.baseRateService.getBaseRates(state).subscribe(response => {
        this.baseRates = response['results'];
        this.setState(response);
        if (this.baseRates.length == 0) {
            this.isBaseRates = false;
        }else {
            this.isBaseRates = true;
        }
        this.isLoading = false;
    },(error)=>{
        this.isLoading = false;
    });
}

editBaseRate(id: string) {
    this.router.navigate(['/data-management/base-rates/edit-base-rate/' + id]);
}

deleteBaseRate(id: string) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this base rate type ?')
        .then((confirmed) => {
            if (confirmed) {
                this.baseRateService.deleteBaseRate(id).subscribe(response => {
                    this.getBaseRates(this._state);
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
    this.getBaseRates(this._state);
}

refresh() {
    this.getBaseRates(this._state);
}

setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
}
}
