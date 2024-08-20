import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { SortDirection, NgbdSortableHeader, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { AreaOfLawService } from '../../service/area-of-law.service';
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
  selector: 'app-area-of-law',
  templateUrl: './area-of-law.component.html',
  styleUrls: ['./area-of-law.component.scss'],
  animations: [routerTransition()]
})
export class AreaOfLawComponent implements OnInit {
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  areaOfLaws: any = [];
  sortedColumn!: string;
  sortedDirection!: string;
  isAreaOfLaws: boolean = true;
  isLoading: boolean = false;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  @ViewChild('content') content: ElementRef;
  public _state: State = {
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'asc',
  };
  isEditAccess: boolean= false;
  constructor(
    public router: Router,
    public areaOfLawService: AreaOfLawService,
    private cdr: ChangeDetectorRef,
    public jwtService: JwtService,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
            .pipe(debounceTime(200), distinctUntilChanged())
            .subscribe(value => {
                this._state.searchTerm = value;
                this.getAreaOfLaws(this._state);
            });
  }

  ngOnInit() {
    this.isLoading = true;
    this.isEditAccess = this.jwtService.checkAccess('data-mangement');
    this.getAreaOfLaws(this._state);
  }
  reload() {
    window.scrollTo(0, 400);
    this.getAreaOfLaws(this._state);
  }

  getAreaOfLaws(state: State) {
    this.isLoading = true;
    this.areaOfLawService.getAreaOfLaws(state).subscribe(response => {
        this.areaOfLaws = response['results'];
        this.setState(response);
        if (this.areaOfLaws.length == 0) {
            this.isAreaOfLaws = false;
        }else {
            this.isAreaOfLaws = true;
        }
        this.isLoading = false;
    },(error)=>{
        this.isLoading = false;
    });
}

editAreaOfLaw(id: string) {
    this.router.navigate(['/data-mangement/area-of-laws/edit-area-of-law/' + id]);
}

deleteAreaOfLaw(id: string) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this area of law ?')
        .then((confirmed) => {
            if (confirmed) {
                this.areaOfLawService.deleteAreaOfLaw(id).subscribe(response => {
                    this.getAreaOfLaws(this._state);
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
    this.getAreaOfLaws(this._state);
}

refresh() {
    this.getAreaOfLaws(this._state);
}

setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
}
}
