import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { SortDirection, NgbdSortableHeader, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { SICCodeService } from '../../service/sic-code.service';
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
  selector: 'app-sic-code',
  templateUrl: './sic-code.component.html',
  styleUrls: ['./sic-code.component.scss'],
  animations: [routerTransition()]
})
export class SICCodeComponent implements OnInit {
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  sicCodes: any = [];
  sortedColumn!: string;
  sortedDirection!: string;
  isSICCodes: boolean = true;
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
    public sicCodeService: SICCodeService,
    private cdr: ChangeDetectorRef,
    public jwtService: JwtService,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
            .pipe(debounceTime(200), distinctUntilChanged())
            .subscribe(value => {
                this._state.searchTerm = value;
                this.getSICCodes(this._state);
            });
  }

  ngOnInit() {
    this.isLoading = true;
    this.isEditAccess = this.jwtService.checkAccess('data-mangement');
    this.getSICCodes(this._state);
  }

  getSICCodes(state: State) {
    this.isLoading = true;
    this.sicCodeService.getSICCodes(state).subscribe(response => {
        this.sicCodes = response['results'];
        this.setState(response);
        if (this.sicCodes.length == 0) {
            this.isSICCodes = false;
        }else {
            this.isSICCodes = true;
        }
        this.isLoading = false;
    },(error)=>{
        this.isLoading = false;
    });
}
reload() {
    window.scrollTo(0, 400);
    this.getSICCodes(this._state);
  }
editSICCode(id: string) {
    this.router.navigate(['/data-management/sic-codes/edit-sic-code/' + id]);
}

deleteSICCode(id: string) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this SIC Code ?')
        .then((confirmed) => {
            if (confirmed) {
                this.sicCodeService.deleteSICCode(id).subscribe(response => {
                    this.getSICCodes(this._state);
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
    this.getSICCodes(this._state);
}

refresh() {
    this.getSICCodes(this._state);
}

setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
}
}
