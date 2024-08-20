import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbdSortableHeader, SortDirection, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { Subject } from 'rxjs';
import { ClientService } from '../../service/client.service';
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
  selector: 'app-client-roster',
  templateUrl: './client-roster.component.html',
  styleUrls: ['./client-roster.component.scss'],
  animations: [routerTransition()]
})
export class ClientRosterComponent implements OnInit {
  clients: any[] = [];
  sortedColumn!: string;
  sortedDirection!: string;
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  isLoading: boolean = false;
  isClients: boolean = true;

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
    public clientService: ClientService,
    private cdr: ChangeDetectorRef,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.keyword !== '' && params.keyword != null) {
        this.keyword = params.keyword;
        this.getAllClients(this._state);
      }
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this._state.sortColumn = column;
    this._state.sortDirection = direction;
    this.getAllClients(this._state);
  }

  getAllClients(state: State) {
    this.clientService.getClientRoster(state, this.keyword).subscribe(
      response => {
        this.clients = response.results;
        if (this.clients.length == 0) {
          this.isClients = false;
        } else {
          this.isClients = true;
        }
        this.setState(response);
        this.isLoading = false;
      }, (error) => {
        this.isLoading = false;
      }
    );
  }

  setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
  }

}
