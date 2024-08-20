import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { SortDirection, NgbdSortableHeader, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
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
  selector: 'app-data-management',
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.scss'],
  animations: [routerTransition()]
})
export class DataManagementComponent implements OnInit {
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  hourlyBillings: any = [];
  sortedColumn!: string;
  sortedDirection!: string;
  isHourlyBillings: boolean = true;
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
  constructor(
    public router: Router,
    private cdr: ChangeDetectorRef,
    private confirmationDialogService: ConfirmationDialogService
  ) {
   
  }

  ngOnInit() {
 
  }
  
 
}
