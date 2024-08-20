import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NgbdSortableHeader, SortDirection, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { downloadFile } from '@app/shared/modules/download-file/download-file';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { TimeKeeperService } from '../../service/time-keeper.service';

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
  selector: 'app-time-keeper',
  templateUrl: './time-keeper.component.html',
  styleUrls: ['./time-keeper.component.scss'],
  animations: [routerTransition()]
})
export class TimeKeeperComponent implements OnInit {
  timeKeepers: any[] = [];
  sortedColumn!: string;
  sortedDirection!: string;
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  isLoading: boolean = false;
  isTimeKeepers: boolean = true;

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
    public timeKeeperService: TimeKeeperService,
    private cdr: ChangeDetectorRef,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(value => {
        this._state.searchTerm = value;
        this.getAllTimeKeepers(this._state);
      });
  }

  ngOnInit() {
    this.isLoading = true;
    this.getAllTimeKeepers(this._state);
  }

  onSort({ column, direction }: SortEvent) {
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this._state.sortColumn = column;
    this._state.sortDirection = direction;
    this.getAllTimeKeepers(this._state);
  }
  downloadFileExcel() {
    return this.timeKeeperService.getTimeKeeperForExcelDownload(this._state).subscribe(
      response => {
        downloadFile(response, "time-keeper")
      }, (error) => {
      }
    );
  }
  getAllTimeKeepers(state: State) {
    this.timeKeeperService.getTimeKeepers(state).subscribe(
      response => {
        this.timeKeepers = response.results;
        if (this.timeKeepers.length == 0) {
          this.isTimeKeepers = false;
        } else {
          this.isTimeKeepers = true;
        }
        this.setState(response);
        this.isLoading = false;
      }, (error) => {
        this.isLoading = false;
      }
    );
  }
  
  refreshTimeKeepers() {
    this.getAllTimeKeepers(this._state);
  }

  setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
  }

  editTimeKeeper(timeKeeperId: string) {
    this.router.navigate(['/timeKeepers/edit-timeKeeper/' + timeKeeperId]);
  }

  updateStatus(timeKeeperId: string, status: boolean) {
    let data = {
      isActive: !status
    }
    this.timeKeeperService.updateTimeKeeper(timeKeeperId, data).subscribe(response => {
      if (response) {
        // this.toastr.success(response.name + ' Updated!', 'Success');
        this.refreshTimeKeepers();
      }
    });
  }

  updateFavorite(timeKeeperId: string, status: boolean) {
    let data = {
      isFavorite: !status
    }
    this.timeKeeperService.updateTimeKeeper(timeKeeperId, data).subscribe(response => {
      if (response) {
        // this.toastr.success(response.name + ' Updated!', 'Success');
        this.refreshTimeKeepers();
      }
    });
  }

  deleteTimeKeeper(timeKeeperId: string) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this timeKeeper ?')
      .then((confirmed) => {
        if (confirmed) {
          this.timeKeeperService.deleteTimeKeeper(timeKeeperId).subscribe(response => {
            this.getAllTimeKeepers(this._state);
          });
        }
      })
  }
}
