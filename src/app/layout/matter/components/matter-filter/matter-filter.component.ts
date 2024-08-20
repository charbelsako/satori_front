import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '@app/layout/dashboard/service/search.service';
import { NgbdSortableHeader, SortDirection } from '@app/shared/directives';
import { StaffService } from '@app/layout/staff/service/staff.service';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of, OperatorFunction, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap, tap, merge, filter } from 'rxjs/operators';
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
  selector: 'app-matter-filter',
  templateUrl: './matter-filter.component.html',
  styleUrls: ['./matter-filter.component.scss']
})
export class MatterFilterComponent implements OnInit {
  @ViewChild('instanceResAtt') instanceResAtt: NgbTypeahead;
  @ViewChild('instanceBillAtt') instanceBillAtt: NgbTypeahead;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  @Output() public matterRecords = new EventEmitter<any>();
  @Input("actionparam") actionparam = {
    status: "",
    openDate: "",
    closeDate: "",
    lastInvoiceDate: "",
    postDate: "",
    billTkprName: "",
    rspTkprName: ""
  }
  public filterForm: FormGroup;
  open: boolean = false
  openClass: string = ""
  loader = false;

  focusResAtt$ = new Subject<string>();
  clickResAtt$ = new Subject<string>();
  focusBillAtt$ = new Subject<string>();
  clickBillAtt$ = new Subject<string>();

  public _employee: State = {
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '', // Explicitly specify the type as string
    sortColumn: 'createdAt',
    sortDirection: 'asc',
  };
  clientLoading: boolean;


  constructor(
    public router: Router,
    public searchService: SearchService,
    private cdr: ChangeDetectorRef,
    public fb: FormBuilder,
    public matterService: MatterService,
  ) {
  }
  getFilterValue(): any {
    if (localStorage.getItem('filter_matter_values')) {
      return JSON.parse(localStorage.getItem('filter_matter_values'))
    }
    return false
  }
  
  ngOnInit() {
    this.filterForm = this.fb.group({
      status: ["Open"],
      openDate: [null],
      closeDate: [null],
      lastInvoiceDate: [null],
      postDate: [null],
      billTkprName: [null],
      rspTkprName: [null]
    })
  }

  openMenu() {
    this.open = true
    this.openClass = "slide-in"
  }
  closeMenu() {
    this.openClass = "slide-out"
    this.open = false
  }
  emitValues() {
    this.matterRecords.emit(
      this.filterForm.value
    )
  }
 
  resetEvent() {
    this.filterForm.patchValue({
      status: null,
      openDate: null,
      closeDate: null,
      lastInvoiceDate: null,
      postDate: null,
      billTkprName: null,
      rspTkprName: null
    })
    this.emitValues();
  }

  selectedResAtt(item) {
    console.log(item);
    const data = { ...this.filterForm.value, "rspTkprName": item?.item }
    this.matterRecords.emit(
      data
    )
  }

  selectedBillAtt(item) {
    console.log(item);
    const data = { ...this.filterForm.value, "billTkprName": item?.item }
    this.matterRecords.emit(
      data
    )
  }

  searchEmployeeResAtt: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      merge(this.focusResAtt$),
      merge(this.clickResAtt$.pipe(filter(() => !this.instanceResAtt.isPopupOpen()))),
      switchMap((term) => {
        this._employee.searchTerm = term as string;
        return this.matterService.getMatterByColumn(this._employee, "rspTkprName").pipe(
          map(x => {
            return x
          }),
          catchError(() => {
            return of([]);
          }),
        )
      }
      ),
      tap(() => (this.clientLoading = false)),
    );

  searchEmployeeBillAtt: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      merge(this.focusBillAtt$),
      merge(this.clickBillAtt$.pipe(filter(() => !this.instanceBillAtt.isPopupOpen()))),
      switchMap((term) => {
        this._employee.searchTerm = term;
        return this.matterService.getMatterByColumn(this._employee, "billTkprName").pipe(
          map(x => {
            return x
          }),
          catchError(() => {
            return of([]);
          }),
        )
      }
      ),
      tap(() => (this.clientLoading = false)),
    );

    formatEmployee(r) {
      if (typeof r === 'string') {
        return r;
      }
    }
}
