import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbdSortableHeader, SortDirection, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { Subject } from 'rxjs';
import { MatterService } from '../../service/matter.service';

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
  selector: 'app-matter-roster',
  templateUrl: './matter-roster.component.html',
  styleUrls: ['./matter-roster.component.scss'],
  animations: [routerTransition()]
})
export class MatterRosterComponent implements OnInit {
  matters: any[] = [];
  sortedColumn!: string;
  sortedDirection!: string;
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  isLoading: boolean = false;
  isMatters: boolean = true;
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
  keyword: any;
  constructor(
    public router: Router,
    public matterService: MatterService,
    private cdr: ChangeDetectorRef,
    public route: ActivatedRoute
  ) { 
    this.route.params.subscribe(params => {
      if (params.keyword !== '' && params.keyword != null) {
        this.keyword = params.keyword;
        this.getAllMatters(this._state);
      }
    });
  }

  ngOnInit(): void {
  }

  onSort({ column, direction }: SortEvent) {
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this._state.sortColumn = column;
    this._state.sortDirection = direction;
    this.getAllMatters(this._state);
  }

  getAllMatters(state: State) {
    this.isLoading = true
    this.matterService.getMatterRoster(state, this.keyword).subscribe(
      response => {
        this.matters = response.results;
        console.log(response);
        if (this.matters.length == 0) {
          this.isMatters = false;
        } else {
          this.isMatters = true;
        }
        this.setState(response);
        this.isLoading = false;
      }, (error) => {
        this.isLoading = false;
      }
    );
  }
  
  refreshMatters() {
    this.isLoading = true
    this.getAllMatters(this._state);
  }

  setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
  }

}
