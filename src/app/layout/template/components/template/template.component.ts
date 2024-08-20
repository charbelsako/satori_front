import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { SortDirection, NgbdSortableHeader, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { TemplateService } from '../../service/template.service';
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
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  animations: [routerTransition()]
})
export class TemplateComponent implements OnInit {
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  templates: any = [];
  sortedColumn!: string;
  sortedDirection!: string;
  isTemplates: boolean = true;
  isLoading: boolean = false;

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
    isEditAccess: boolean = false;
  constructor(
    public router: Router,
    public templateService: TemplateService,
    private cdr: ChangeDetectorRef,
    private confirmationDialogService: ConfirmationDialogService,
    public jwtService: JwtService,
  ) {
    this.searchTermUpdate
            .pipe(debounceTime(200), distinctUntilChanged())
            .subscribe(value => {
                this._state.searchTerm = value;
                this.getTemplates(this._state);
            });
  }

  ngOnInit() {
    this.isLoading = true;
    this.isEditAccess = this.jwtService.checkAccess('templates');
    this.getTemplates(this._state);
  }

  getTemplates(state: State) {
    this.isLoading = true;
    this.templateService.getTemplates(state).subscribe(response => {
        this.templates = response['results'];
        this.setState(response);
        if (this.templates.length == 0) {
            this.isTemplates = false;
        }else {
            this.isTemplates = true;
        }
        this.isLoading = false;
    },(error)=>{
        this.isLoading = false;
    });
}

editTemplate(id: string) {
    this.router.navigate(['/notifications/edit-notification/' + id]);
}

deleteTemplate(id: string) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this template ?')
        .then((confirmed) => {
            if (confirmed) {
                this.templateService.deleteTemplate(id).subscribe(response => {
                    this.getTemplates(this._state);
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
    this.getTemplates(this._state);
}

refresh() {
    this.getTemplates(this._state);
}

setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
}
}
