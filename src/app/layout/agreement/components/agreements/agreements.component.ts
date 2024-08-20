import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NgbdSortableHeader, SortDirection, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { downloadFile } from '@app/shared/modules/download-file/download-file';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { AgreementService } from '../../service/agreement.service';

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
  selector: 'app-agreements',
  templateUrl: './agreements.component.html',
  styleUrls: ['./agreements.component.scss'],
  animations: [routerTransition()]
})
export class AgreementsComponent implements OnInit {
  agreements: any[] = [];
  sortedColumn!: string;
  sortedDirection!: string;
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  isLoading: boolean = false;
  isAgreements: boolean = true;
  open: boolean = false;
  filterData: object = {}
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
    public agreementService: AgreementService,
    private cdr: ChangeDetectorRef,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(value => {
        this._state.searchTerm = value;
        this.getAllAgreements(this._state);
      });
  }
  
  downloadFileExcel() {
    return this.agreementService.getAgreementsForExcel(this._state, this.filterData).subscribe(
      response => {
        downloadFile(response, "aggrements")
      }, (error) => {
      }
    );
  }

  ngOnInit() {
    this.isLoading = true;
    this.getAllAgreements(this._state);
  }

  onSort({ column, direction }: SortEvent) {
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this._state.sortColumn = column;
    this._state.sortDirection = direction;
    this.getAllAgreements(this._state);
  }
  handleResults(event) {
    this.filterData = event;
    this.isLoading = true;
    this.getAllAgreements(this._state);
  }
  getAllAgreements(state: State) {
    this.agreementService.getAgreements(state, this.filterData).subscribe(
      response => {
        this.agreements = response.results;
        console.log(this.agreements);
        if (this.agreements.length == 0) {
          this.isAgreements = false;
        } else {
          this.isAgreements = true;
        }
        this.setState(response);
        this.isLoading = false;
      }, (error) => {
        this.isLoading = false;
      }
    );
  }

  refreshAgreements() {
    this.getAllAgreements(this._state);
  }

  setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
  }

  editAgreement(agreementId: string) {
    this.router.navigate(['/agreements/edit-agreement/' + agreementId]);
  }
  viewAgrement(agreementId: string) {
    this.router.navigate(['/agreements/view-agreement/' + agreementId]);
  }

  openMenu() {
    this.open = true
  }
  closeMenu() {
    this.open = false
  }

  // updateStatus(agreementId: string, status: boolean) {
  //   let data = {
  //     isActive: !status
  //   }
  //   this.agreementService.updateAgreement(agreementId, data).subscribe(response => {
  //     if (response) {
  //       // this.toastr.success(response.name + ' Updated!', 'Success');
  //       this.refreshAgreements();
  //     }
  //   });
  // }

  //   updateFavorite(agreementId: string, status: boolean) {
  //     let data = {
  //       isFavorite: !status
  //     }
  //     this.agreementService.updateAgreement(agreementId, data).subscribe(response => {
  //       if (response) {
  //         // this.toastr.success(response.name + ' Updated!', 'Success');
  //         this.refreshAgreements();
  //       }
  //     });
  //   }

  //   deleteAgreement(agreementId: string) {
  //     this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this agreement ?')
  //       .then((confirmed) => {
  //         if (confirmed) {
  //           this.agreementService.deleteAgreement(agreementId).subscribe(response => {
  //             this.getAllAgreements(this._state);
  //           });
  //         }
  //       })
  //   }
  // }

}
