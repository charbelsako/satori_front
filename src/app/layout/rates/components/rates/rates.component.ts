import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NgbdSortableHeader, SortDirection, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { downloadFile } from '@app/shared/modules/download-file/download-file';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { RateService } from '../../service/rates.service';

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
  selector: 'app-rate',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss'],
  animations: [routerTransition()]
})
export class RatesComponent implements OnInit {
  rates: any[] = [];
  sortedColumn!: string;
  sortedDirection!: string;
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  isLoading: boolean = false;
  isRates: boolean = true;

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
  constructor(
    public router: Router,
    public rateService: RateService,
    private cdr: ChangeDetectorRef,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(value => {
        this._state.searchTerm = value;
        this.getAllRates(this._state);
      });
  }

  ngOnInit() {
    this.isLoading = true;
    this.getAllRates(this._state);
  }

  onSort({ column, direction }: SortEvent) {
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this._state.sortColumn = column;
    this._state.sortDirection = direction;
    this.getAllRates(this._state);
  }
  downloadFileExcel() {
    return this.rateService.getRateForExcelDownload(this._state).subscribe(
      response => {
        downloadFile(response, "rate")
      }, (error) => {
      }
    );
  }
  getAllRates(state: State) {
    this.rateService.getRates(state).subscribe(
      response => {
        this.rates = response.results;
        console.log(this.rates,"---------------------");
        if (this.rates.length == 0) {
          this.isRates = false;
        } else {
          this.isRates = true;
        }
        this.setState(response);
        this.isLoading = false;
      }, (error) => {
        this.isLoading = false;
      }
    );
  }
  
  refreshRates() {
    this.getAllRates(this._state);
  }

  setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
  }

  editRate(rateId: string) {
    this.router.navigate(['/rates/edit-rate/' + rateId]);
  }

  updateStatus(rateId: string, status: boolean) {
    let data = {
      isActive: !status
    }
    this.rateService.updateRate(rateId, data).subscribe(response => {
      if (response) {
        // this.toastr.success(response.name + ' Updated!', 'Success');
        this.refreshRates();
      }
    });
  }

  updateFavorite(rateId: string, status: boolean) {
    let data = {
      isFavorite: !status
    }
    this.rateService.updateRate(rateId, data).subscribe(response => {
      if (response) {
        // this.toastr.success(response.name + ' Updated!', 'Success');
        this.refreshRates();
      }
    });
  }

  deleteRate(rateId: string) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this rate ?')
      .then((confirmed) => {
        if (confirmed) {
          this.rateService.deleteRate(rateId).subscribe(response => {
            this.getAllRates(this._state);
          });
        }
      })
  }
}
