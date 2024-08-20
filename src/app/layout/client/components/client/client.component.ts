import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NgbdSortableHeader, SortDirection, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { downloadFile } from '@app/shared/modules/download-file/download-file';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
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
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  animations: [routerTransition()]
})
export class ClientComponent implements OnInit {
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
  constructor(
    public router: Router,
    public clientService: ClientService,
    private cdr: ChangeDetectorRef,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.searchTermUpdate
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(value => {
        this._state.searchTerm = value;
        this.getAllClients(this._state);
      });
  }

  ngOnInit() {
    this.isLoading = true;
    this.getAllClients(this._state);
  }

  onSort({ column, direction }: SortEvent) {
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this._state.sortColumn = column;
    this._state.sortDirection = direction;
    this.getAllClients(this._state);
  }

  getAllClients(state: State) {
    this.clientService.getClients(state).subscribe(
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
  downloadFileExcel() {
    return this.clientService.getClientForExcelDownload(this._state).subscribe(
      response => {
        downloadFile(response, "client")
      }, (error) => {
      }
    );
  }
  refreshClients() {
    this.getAllClients(this._state);
  }

  setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
  }

  editClient(clientId: string) {
    this.router.navigate(['/clients/edit-client/' + clientId]);
  }

  updateStatus(clientId: string, status: boolean) {
    let data = {
      isActive: !status
    }
    this.clientService.updateClient(clientId, data).subscribe(response => {
      if (response) {
        // this.toastr.success(response.name + ' Updated!', 'Success');
        this.refreshClients();
      }
    });
  }

  updateFavorite(clientId: string, status: boolean) {
    let data = {
      isFavorite: !status
    }
    this.clientService.updateClient(clientId, data).subscribe(response => {
      if (response) {
        // this.toastr.success(response.name + ' Updated!', 'Success');
        this.refreshClients();
      }
    });
  }

  deleteClient(clientId: string) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this client ?')
      .then((confirmed) => {
        if (confirmed) {
          this.clientService.deleteClient(clientId).subscribe(response => {
            this.getAllClients(this._state);
          });
        }
      })
  }
}
