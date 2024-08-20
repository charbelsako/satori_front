import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { SortDirection, NgbdSortableHeader, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { AttachmentTypeService } from '../../service/attachment-type.service';
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
  selector: 'app-attachment-type',
  templateUrl: './attachment-type.component.html',
  styleUrls: ['./attachment-type.component.scss'],
  animations: [routerTransition()]
})
export class AttachmentTypeComponent implements OnInit {
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  attachmentTypes: any = [];
  sortedColumn!: string;
  sortedDirection!: string;
  isAttachmentTypes: boolean = true;
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
    public attachmentTypeService: AttachmentTypeService,
    private cdr: ChangeDetectorRef,
    public jwtService: JwtService,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
            .pipe(debounceTime(200), distinctUntilChanged())
            .subscribe(value => {
                this._state.searchTerm = value;
                this.getAttachmentTypes(this._state);
            });
  }

  ngOnInit() {
    this.isLoading = true;
    this.isEditAccess = this.jwtService.checkAccess('data-mangement');
    this.getAttachmentTypes(this._state);
  }

  getAttachmentTypes(state: State) {
    this.isLoading = true;
    this.attachmentTypeService.getAttachmentTypes(state).subscribe(response => {
        this.attachmentTypes = response['results'];
        this.setState(response);
        if (this.attachmentTypes.length == 0) {
            this.isAttachmentTypes = false;
        }else {
            this.isAttachmentTypes = true;
        }
        this.isLoading = false;
    },(error)=>{
        this.isLoading = false;
    });
}
reload() {
    window.scrollTo(0, 400);
    this.getAttachmentTypes(this._state);
  }
editAttachmentType(id: string) {
    this.router.navigate(['/data-mangement/attachment-types/edit-attachment-type/' + id]);
}

deleteAttachmentType(id: string) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this payor type ?')
        .then((confirmed) => {
            if (confirmed) {
                this.attachmentTypeService.deleteAttachmentType(id).subscribe(response => {
                    this.getAttachmentTypes(this._state);
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
    this.getAttachmentTypes(this._state);
}

refresh() {
    this.getAttachmentTypes(this._state);
}

setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
}
}
