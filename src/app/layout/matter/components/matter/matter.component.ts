import { ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { downloadFile } from '@app/shared/modules/download-file/download-file';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { MatterService } from '../../service/matter.service';
import { NgbdSortableHeader, SortDirection, SortEvent } from '@app/shared/directives';
import { TimeCardService } from '@app/layout/timecard/service/timecard.service';

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
  selector: 'app-matter',
  templateUrl: './matter.component.html',
  styleUrls: ['./matter.component.scss'],
  animations: [routerTransition()]
})
export class MatterComponent implements OnInit {
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  @Input() data: any;
  matters: any[] = [];
  sortedColumn!: string;
  sortedDirection!: string;
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  isLoading: boolean = false;
  isMatters: boolean = true;
  isPaginationLoading: boolean = false;

  public _state: State = {
    page: 1,
    limit: 20,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'desc',
  };
  matterName: string;
  matterId: string;
  clientName: string;
  clientId: string;
  modalReference: any;
  matterIds: any = [];
  openWindowRef:any = [];
  clientExceptionData: any = [];
  matterExceptionData: any = [];
  matterLevelExceptionData: any = [];
  isClientContentLoading: boolean = false;
  isMatterContentLoading: boolean = false;
  filterData: any;
  clientLevelExceptionData: any;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public matterService: MatterService,
    public timecardService: TimeCardService,
    private cdr: ChangeDetectorRef,
    private confirmationDialogService: ConfirmationDialogService,
    private modalService: NgbModal
  ) {

    this.route.params.subscribe(params => {
      if (params.matterName !== '' && params.matterName != null) {
        this.matterName = params.matterName;
      }
      if (params.matterId !== '' && params.matterId != null) {
        this.matterId = params.matterId;
      }
      if (params.clientName !== '' && params.clientName != null) {
        this.clientName = params.clientName;
      }
      if (params.clientId !== '' && params.clientId != null) {
        this.clientId = params.clientId;
      }
    });
    this.searchTermUpdate
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(value => {
        this._state.page = 1;
        this._state.searchTerm = value;
        this.isLoading = true;
        this.getAllMatters(this._state);
      });
  }
  ngOnDestroy() {
    this.openWindowRef.forEach(win => {
      win.close()
    });
  }

  openWindowMatter(href) {
    const win = window.open(href,'_blank',
    `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=550px,height=350px`);
    this.openWindowRef.push(win)
    return false;
  }
  ngOnInit() {
    this.isLoading = true;
    this.getAllMatters(this._state);
  }
  downloadFileExcel() {
    return this.matterService.getMaterForExcelDownload(this._state, {
      matterName: this.matterName,
      matterId: this.matterId,
      clientName: this.clientName,
      clientId: this.clientId
    }).subscribe(
      response => {
        downloadFile(response, "matter")
      }, (error) => {
      }
    );
  }

  onSort({ column, direction }: SortEvent) {
    console.log(column, direction);
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this._state.sortColumn = column;
    this._state.sortDirection = direction;
    this.getAllMatters(this._state);
  }

  getAllMatters(state: State) {
    this.isPaginationLoading = true;
    this.matterService.getMatters(state, {
      matterName: this.matterName,
      matterId: this.matterId,
      clientName: this.clientName,
      clientId: this.clientId
    }).subscribe(
      response => {
        this.matters = response.results;
        if (this.matters.length == 0) {
          this.isMatters = false;
        } else {
          this.isMatters = true;
        }
        this.isPaginationLoading = false
        this.isLoading = false;
        this.setState(response);
      }, (error) => {
        this.isPaginationLoading = false
        this.isLoading = false;
      }
    );
  }

  getMatterFilterData(){
    this.matterService.getMatterFilteredData(this._state, this.filterData).subscribe((response)=>{
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
      });
  }


  refreshMatters() {
    this.isPaginationLoading = true
    this.getAllMatters(this._state);
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
            this.getAllMatters(this._state);
          });
        }
      })
  }

  openClientData(clientcontent: any, matter:any) {
    this.clientExceptionData['matter'] = matter
    this.timecardService.getTimeCardsByMatter(matter.matterId).subscribe(res=>{
      this.isClientContentLoading = true;
      this.clientExceptionData['timecards'] = res.result.results;
      const modalRef = this.modalService.open(clientcontent, { size: 'xl' });
      console.log(this.clientExceptionData);
      this.isClientContentLoading = false;
    },(error)=>{
      this.isClientContentLoading = false;
    })
  }

  openMatterData(mattercontent: any, matter:any) {
    this.matterExceptionData['matter'] = matter
    this.timecardService.getTimeCardsByMatter(matter.matterId).subscribe(res=>{
      this.isMatterContentLoading = true;
      this.matterExceptionData['timecards'] = res.result.results;
      const modalRef = this.modalService.open(mattercontent, { size: 'xl' });
      this.isMatterContentLoading = false;
    },(error)=>{
      this.isMatterContentLoading = false;
    })
  }

  openMatterLevelClientData(mattercontent: any, cliendId:any) {
    this.timecardService.getTimecardClientLevelRate(cliendId).subscribe(res=>{
      this.clientLevelExceptionData = res.timecards.results;
      const modalRef = this.modalService.open(mattercontent, { size: 'xl' });
    })
  }

  openMatterLevelMatterData(mattercontent: any, matterNumber:any) {
    this.timecardService.getTimecardMatterLevelRate(matterNumber).subscribe(res=>{
      this.matterLevelExceptionData = res.timecards.results;
      const modalRef = this.modalService.open(mattercontent, { size: 'xl' });
    })
  }

  saveFilter(value) {
    if( value ) {
      localStorage.setItem('filter_matter_values', JSON.stringify(value) );
    } else {
      localStorage.removeItem('filter_matter_values');
    }
  }

  handleResults(event) {
    this.saveFilter(event);
    this.filterData = event;
    this.isLoading = true;
    this.getMatterFilterData();
  }
}
