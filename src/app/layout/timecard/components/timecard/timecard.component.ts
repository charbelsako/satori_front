import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NgbdSortableHeader, SortDirection, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { downloadFile } from '@app/shared/modules/download-file/download-file';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { TimeCardService } from '../../service/timecard.service';

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
  selector: 'app-timecard',
  templateUrl: './timecard.component.html',
  styleUrls: ['./timecard.component.scss'],
  animations: [routerTransition()]
})
export class TimeCardComponent implements OnInit {
  timeCards: any[] = [];
  timeKeeperData: any = {};
  sortedColumn!: string;
  sortedDirection!: string;
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  isLoading: boolean = false;
  isTimeCards: boolean = true;
  downloading: boolean = false;
  isPaginationLoading: boolean = false;

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
    public timeCardService: TimeCardService,
    private cdr: ChangeDetectorRef,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(value => {
        this._state.searchTerm = value;
        this.getAllTimeCards(this._state);
      });
  }

  ngOnInit() {
    this.isLoading = true;
    this.getAllTimeCards(this._state);
  }

  onSort({ column, direction }: SortEvent) {
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this._state.sortColumn = column;
    this._state.sortDirection = direction;
    this.getAllTimeCards(this._state);
  }
  downloadFileExcel() {
    this.downloading = true;
    return this.timeCardService.getTimeCardForExcelDownload(this._state).subscribe(
      response => {
        this.downloading = false;
        downloadFile(response, "timecard")
      }, (error) => {
        this.downloading = false;
      }
    );
  }
  getAllTimeCards(state: State) {
    this.isPaginationLoading = true;
    this.timeCardService.getTimeCards(state).subscribe(
      response => {
        this.timeCards = response?.result?.results || [];
        this.timeKeeperData = response?.timeKeeperData || [];
        if (this.timeCards.length == 0) {
          this.isTimeCards = false;
        } else {
          this.isTimeCards = true;
        }
        this.isPaginationLoading = false;
        this.setState(response?.result);
        this.isLoading = false;
      }, (error) => {
        this.isLoading = false;
        this.isPaginationLoading = false;
      }
    );
  }
  
  refreshTimeCards() {
    this.getAllTimeCards(this._state);
  }

  setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
  }

  editTimeCard(timeCardId: string) {
    this.router.navigate(['/timeCards/edit-timeCard/' + timeCardId]);
  }

  updateStatus(timeCardId: string, status: boolean) {
    let data = {
      isActive: !status
    }
    this.timeCardService.updateTimeCard(timeCardId, data).subscribe(response => {
      if (response) {
        // this.toastr.success(response.name + ' Updated!', 'Success');
        this.refreshTimeCards();
      }
    });
  }

  updateFavorite(timeCardId: string, status: boolean) {
    let data = {
      isFavorite: !status
    }
    this.timeCardService.updateTimeCard(timeCardId, data).subscribe(response => {
      if (response) {
        // this.toastr.success(response.name + ' Updated!', 'Success');
        this.refreshTimeCards();
      }
    });
  }

  deleteTimeCard(timeCardId: string) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this timeCard ?')
      .then((confirmed) => {
        if (confirmed) {
          this.timeCardService.deleteTimeCard(timeCardId).subscribe(response => {
            this.getAllTimeCards(this._state);
          });
        }
      })
  }
}
