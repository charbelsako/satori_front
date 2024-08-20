import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbdSortableHeader, SortDirection, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { downloadFile } from '@app/shared/modules/download-file/download-file';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { SearchService } from '../../service/search.service';
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
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [routerTransition()]
})
export class SearchComponent implements OnInit {
  search: any[] = [];
  sortedColumn!: string;
  sortedDirection!: string;
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  isLoading: boolean = false;
  pageLoading: boolean = false;
  isSearch: boolean = true;
  billingMode: string = ''
  payorType: string = ''
  filterData: object = this.getFilterValue() 
  expire: string = ''
  adjustment: string = ''
  staffId: string = ''
  staffIdOperation: string = ''
  staffIdDuration: string = ''
  actionparam: any = {}
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  public _state: State = {
    page: 1,
    limit: 20,
    totalPages: 1,
    totalResults: 0,
    searchTerm: localStorage.getItem('search_value') || '',
    sortColumn: 'createdAt',
    sortDirection: 'desc',
  };
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public searchService: SearchService,
    private cdr: ChangeDetectorRef,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.route.params.subscribe(params => {
      if (params.billingMode !== '' && params.billingMode != null) {
        // this.billingMode = params.billingMode;
        this.actionparam['billingMode'] = params.billingMode;
      }
      if (params.payorType !== '' && params.payorType != null) {
        this.actionparam['payorType'] = params.payorType;
        // this.payorType = params.payorType;
      }
      if (params.expireType !== '' && params.expireType != null) {
        this.actionparam['expire'] = params.expireType;
        // this.expire = params.expireType;
      }
      if (params.adjustmentType !== '' && params.adjustmentType != null) {
        this.actionparam['adjustment'] = params.adjustmentType;
        // this.adjustment = params.adjustmentType;
      }
      if (params.actionType !== '' && params.actionType != null) {
        this.actionparam['staffId'] =  params.staffId;
        this.actionparam['staffIdOperation'] =  params.actionType;
        this.actionparam['staffIdDuration'] =  params.date;
        // this.staffId = params.staffId;
        // this.staffIdOperation = params.actionType;
        // this.staffIdDuration = params.date;
      }
    });
    this.searchTermUpdate
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(value => {
        this._state.searchTerm = value;
        this.saveSearch(value)
        this.getAllSearch(this._state);
      });
  }
  getFilterValue() {
    if(localStorage.getItem('filter_values')) {
      return JSON.parse(localStorage.getItem('filter_values'))
    } else {
      return {}
    }
  }
  handleResults(event) {
    this.saveFilter(event);
    this.filterData = event;
    this.isLoading = true;
    this.getAllSearch(this._state);
  }
  ngOnInit() {
    this.isLoading = true;
    this.getAllSearch(this._state);
  }
  downloadFileExcel() {
    return this.searchService.getSearchForExcelDownload(this._state, this.actionparam, this.filterData).subscribe(
      response => {
        downloadFile(response, "search")
      }, (error) => {
      }
    );
  }

  viewAgrement(agreementId: string) {
    this.router.navigate(['/dashboard/search/view-agreement/' + agreementId]);
  }

  onSort({ column, direction }: SortEvent) {
    console.log(column, direction);
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this._state.sortColumn = column;
    this._state.sortDirection = direction;
    this.pageLoading = true
    this.search = []
    this.getAllSearch(this._state);
  }
  getHeader() {
    const { billingMode, payorType, expire, adjustment, staffId, staffIdOperation } = this.actionparam
    if (billingMode) {
      return "Billing"
    } else if (payorType) {
      return "Payor Type"
    } else if (expire) {
      return `Search - Expire-${expire === 'expire-weekly' ? 'Weekly' : 'Monthly'}`
    } else if (adjustment) {
      return `Search - Expire-${expire === 'expire-weekly' ? 'Weekly' : 'Monthly'}`
    } else if (staffId) {
      return `Staff - ${staffIdOperation.charAt(0).toUpperCase() + staffIdOperation.slice(1)}`
    } else {
      return "Search"
    }
  }
  getAllSearch(state: State) {
    this.searchService.getRecords(state, this.actionparam, this.filterData).subscribe(
      response => {
        this.search = response.results;
        if (this.search.length == 0) {
          this.isSearch = false;
        } else {
          this.isSearch = true;
        }
        this.setState(response);
        this.isLoading = false;
        this.pageLoading = false;
      }, (error) => {
        this.isLoading = false;
        this.pageLoading = false;
      }
    );
  }
  saveFilter(value) {
    if( value ) {
      localStorage.setItem('filter_values', JSON.stringify(value) );
    } else {
      localStorage.removeItem('filter_values');
    }
  }
  saveSearch(value) {
    localStorage.setItem('search_Value', value || '');
  }
  calcDate(startingDate, endingDate) {
    let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
    if (!endingDate) {
      endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
    }
    let endDate = new Date(endingDate);
    if (startDate > endDate) {
      const swap = startDate;
      startDate = endDate;
      endDate = swap;
    }
    const startYear = startDate.getFullYear();
    const february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
    const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let yearDiff = endDate.getFullYear() - startYear;
    let monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    let dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
    }
    var message = []
    if (yearDiff) {
      message.push(yearDiff + " Y ")
    }
    if (monthDiff) {
      message.push(monthDiff + " M ")
    }
    if (dayDiff) {
      message.push(dayDiff + " D  ")
    }
    return message.join(" ") 
  }


  refreshSearch() {
    this.getAllSearch(this._state);
  }

  setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
  }

  getDurationBetweenDates(startDate: Date, endDate: Date): string {
    // Calculate the difference in milliseconds
    const diffMs = new Date(endDate).getTime() - new Date(startDate).getTime();
    // Calculate the duration in days, hours, minutes, and seconds
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    // Create a human-readable string representing the duration
    const durationString = `${diffDays} days`;
    // Return the duration string
    return durationString;
  }
  decode(string) {
    return decodeURIComponent(string);
  }

}
