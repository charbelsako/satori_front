import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { SortDirection, NgbdSortableHeader, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { PracticeGroupService } from '../../service/practice-group.service';
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
  selector: 'app-practice-group',
  templateUrl: './practice-group.component.html',
  styleUrls: ['./practice-group.component.scss'],
  animations: [routerTransition()]
})
export class PracticeGroupComponent implements OnInit {
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  practiceGroups: any = [];
  sortedColumn!: string;
  sortedDirection!: string;
  isPracticeGroups: boolean = true;
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
    public practiceGroupService: PracticeGroupService,
    private cdr: ChangeDetectorRef,
    public jwtService: JwtService,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
            .pipe(debounceTime(200), distinctUntilChanged())
            .subscribe(value => {
                this._state.searchTerm = value;
                this.getPracticeGroups(this._state);
            });
  }

  ngOnInit() {
    this.isLoading = true;
    this.isEditAccess = this.jwtService.checkAccess('data-mangement');
    this.getPracticeGroups(this._state);
  }
  reload() {
    window.scrollTo(0, 400);
    this.getPracticeGroups(this._state);
  }

  getPracticeGroups(state: State) {
    this.isLoading = true;
    this.practiceGroupService.getPracticeGroups(state).subscribe(response => {
        this.practiceGroups = response['results'];
        this.setState(response);
        if (this.practiceGroups.length == 0) {
            this.isPracticeGroups = false;
        }else {
            this.isPracticeGroups = true;
        }
        this.isLoading = false;
    },(error)=>{
        this.isLoading = false;
    });
}

editPracticeGroup(id: string) {
    this.router.navigate(['/data-mangement/practice-groups/edit-practice-group/' + id]);
}

deletePracticeGroup(id: string) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this practice group ?')
        .then((confirmed) => {
            if (confirmed) {
                this.practiceGroupService.deletePracticeGroup(id).subscribe(response => {
                    this.getPracticeGroups(this._state);
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
    this.getPracticeGroups(this._state);
}

refresh() {
    this.getPracticeGroups(this._state);
}

setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
}
}
