import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbdSortableHeader, SortDirection, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { downloadFile } from '@app/shared/modules/download-file/download-file';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { MatterService } from '../../service/matter-name.service';

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
  selector: 'app-matter-name',
  templateUrl: './matter-name.component.html',
  styleUrls: ['./matter-name.component.scss'],
  animations: [routerTransition()]
})
export class MatterComponent implements OnInit {
  matters: any[] = [];
  sortedColumn!: string;
  sortedDirection!: string;
  public searchTerm!: string;
  searchTermUpdate = new Subject<string>();
  isLoading: boolean = false;
  isMatters: boolean = true;
  isPaginationLoading: boolean = false;
  matterName: string;
  matterId: string;
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
    public matterService: MatterService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.route.params.subscribe(params => {
      if (params.matterName !== '' && params.matterName != null) {
        this.matterName = params.matterName;
      }
      if (params.matterId !== '' && params.matterId != null) {
        this.matterId = params.matterId;
      }
    });
    this.searchTermUpdate
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(value => {
        this._state.page = 1;
        this._state.searchTerm = value;
        this.isLoading = true;
        this.getAllMatters(this._state, this.matterName, this.matterId);
      });
  }

  ngOnInit() {
    this.isLoading = true;
    this.getAllMatters(this._state, this.matterName, this.matterId);
  }
  downloadFileExcel() {
    return this.matterService.getMaterForExcelDownload(this._state, this.matterName, this.matterId).subscribe(
      response => {
        downloadFile(response, "matter")
      }, (error) => {
      }
    );
  }
  onSort({ column, direction }: SortEvent) {
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this._state.sortColumn = column;
    this._state.sortDirection = direction;
    this.getAllMatters(this._state, this.matterName, this.matterId);
  }

  getAllMatters(state: State, matterName, matterId) {
    this.matterService.getMatters(state, matterName, matterId).subscribe(
      response => {
        this.isPaginationLoading = false
        this.matters = response.results;
        if (this.matters.length == 0) {
          this.isMatters = false;
        } else {
          this.isMatters = true;
        }
        this.setState(response);
        this.isLoading = false;
      }, (error) => {
        this.isPaginationLoading = false
        this.isLoading = false;
      }
    );
  }
  
  refreshMatters() {
    this.isPaginationLoading = true
    this.getAllMatters(this._state, this.matterName, this.matterId);
  }

  setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
  }

  editMatter(matterId: string) {
    this.router.navigate(['/matters/edit-matter/' + matterId]);
  }

  updateStatus(matterId: string, status: boolean) {
    let data = {
      isActive: !status
    }
    this.matterService.updateMatter(matterId, data).subscribe(response => {
      if (response) {
        // this.toastr.success(response.name + ' Updated!', 'Success');
        this.refreshMatters();
      }
    });
  }

  updateFavorite(matterId: string, status: boolean) {
    let data = {
      isFavorite: !status
    }
    this.matterService.updateMatter(matterId, data).subscribe(response => {
      if (response) {
        // this.toastr.success(response.name + ' Updated!', 'Success');
        this.refreshMatters();
      }
    });
  }

  deleteMatter(matterId: string) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this matter ?')
      .then((confirmed) => {
        if (confirmed) {
          this.matterService.deleteMatter(matterId).subscribe(response => {
            this.getAllMatters(this._state, this.matterName, this.matterId);
          });
        }
      })
  }
}
