import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbdSortableHeader, SortDirection, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, of, Observable, OperatorFunction, Subject } from 'rxjs';
import { SearchService } from '../../service/search.service';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { catchError, map, switchMap, tap, merge, filter } from 'rxjs/operators';
import { StaffService } from '@app/layout/staff/service/staff.service';


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
  selector: 'app-agreements-filter-search',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  animations: [routerTransition()]
})
export class FilterComponent implements OnInit {
  @Output() public found = new EventEmitter<any>();
  // @Input("billingMode") billingMode = "";
  // @Input("payorType") payorType = "";
  // @Input("expire") expire = "";
  // @Input("adjustment") adjustment = ""
  @Input("actionparam") actionparam = {
    billingMode: "",
    payorType: "",
    expire: "",
    adjustment: "",
    staffId: "",
    staffIdOperation: "",
    staffIdDuration: ""
  }
  public filterForm: FormGroup;
  open: boolean = false
  openClass: string = ""
  baseRateAll = false
  loader = false
  initalLoad = false
  focus3$ = new Subject<string>();
  click3$ = new Subject<string>();
  clientLoading: boolean = false
  collectionOptions: any = {
    billingFrequency: [
    ],
    baseRate: [
    ],
    billingCurrency: [
    ],
    billingMethod: [
    ],
    payorType: [
    ],
    feeArrangementType: [
    ]
  }
  public _employee: State = {
    page: 1,
    limit: 20,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'asc',
  };
  countRecords: Number = 2
  expanded: Boolean = false
  expandedPracticeGroup: Boolean = false
  expandedAreaOfLow: Boolean = false
  @ViewChild('instance') instance3: NgbTypeahead;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public router: Router,
    public searchService: SearchService,
    private cdr: ChangeDetectorRef,
    public fb: FormBuilder,
    public staffsService: StaffService,
    private confirmationDialogService: ConfirmationDialogService
  ) {
  }
  getFilterValue(): any {
    if (localStorage.getItem('filter_values')) {
      return JSON.parse(localStorage.getItem('filter_values'))
    }
    return false
  }
  iniitalLoadData(callback = false) {
    this.loader = true
    this.initalLoad = true
    this.searchService.filtersSearchData(this.actionparam).subscribe(
      response => {
        const initData = this.getFilterValue();
        this.collectionOptions = response
        if (!initData) {
          this.toggleAllSelection(true, "baseRate", true)
          this.toggleAllSelection(true, "billingMethod", true)
          this.toggleAllSelection(true, "payorType", true)
          this.toggleAllSelection(true, "billingFrequency", true)
          this.toggleAllSelectionName(true, "matterId", true, 'matterName')
          this.toggleAllSelectionName(true, "sicCode", true, 'clientSicId')
          this.toggleAllSelection(true, "feeArrangementType", true)
          this.toggleAllSelectionName(true, "areaOfLaw", true, 'areaOfLawId')
          this.toggleAllSelectionName(true, "practiceGroup", true, 'practiceGroupId')
        } else {
          this.filterForm.patchValue(initData)
        }
        this.loader = false
        this.initalLoad = false;
        this.cdr.detectChanges();
        callback && this.callbackLoad();
      })
  }
  ngOnChanges(changes) {
    this.actionparam = changes.actionparam.currentValue
    this.iniitalLoadData()
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values

  }
  ngOnInit() {

    this.filterForm = this.fb.group({
      //Client Details
      durationFrom: [""],
      durationTo: [""],
      responsibleAttorney: [""],
      billingFrequency: [[]],
      baseRate: [[]],
      matterId: [[]],
      billingMethod: [[]],
      payorType: [[]],
      sicCode: [[]],
      feeArrangementType: [[]],
      areaOfLaw: [[]],
      practiceGroup: [[]],
      adjustmentStartDate: [""],
      adjustmentEndDate: [""],
      expirationStartDate: [""],
      expirationEndDate: [""]
    })
  }
  expandClick(bool) {
    this.expanded = bool;
    //this.cdr.detectChanges();
  }
  expandPracticeGroupClick(bool) {
    this.expandedPracticeGroup = bool;
    //this.cdr.detectChanges();
  }

  expandAreaOfLowClick(bool) {
    this.expandedAreaOfLow = bool;
    //this.cdr.detectChanges();
  }
  clearDuration() {
    this.filterForm.patchValue({
      'durationFrom': "",
      'durationTo': ""
    })
  }
  loadFilterDataFrequency() {
    if (!this.initalLoad) {
      this.loader = true
      const _data = this.filterForm.value
      this.searchService.filtersSearchDataOption(_data, this.actionparam).subscribe(
        response => {
          this.collectionOptions = response;
          this.cdr.detectChanges();
          this.toggleAllSelection(true, "baseRate", false)
          this.toggleAllSelection(true, "billingMethod", false)
          this.toggleAllSelection(true, "payorType", false)
          this.toggleAllSelection(true, "billingFrequency", false)
          this.toggleAllSelectionName(true, "sicCode", false, 'clientSicId')
          this.toggleAllSelectionName(true, "matterId", false, 'matterName')
          this.toggleAllSelection(true, "feeArrangementType", false)
          this.toggleAllSelectionName(true, "areaOfLaw", false, 'areaOfLawId')
          this.toggleAllSelectionName(true, "practiceGroup", false, 'practiceGroupId')
          this.loader = false;
        })
    }
  }
  searchData(_data) {
    this.searchService.filtersSearchDataOption(_data, this.actionparam).subscribe(
      response => {
        this.collectionOptions = response;
        this.cdr.detectChanges();
        this.toggleAllSelection(true, "baseRate", false)
        this.toggleAllSelection(true, "billingMethod", false)
        this.toggleAllSelection(true, "payorType", false)
        this.toggleAllSelection(true, "billingFrequency", false)
        this.toggleAllSelectionName(true, "sicCode", false, 'clientSicId')
        this.toggleAllSelectionName(true, "matterId", false, 'matterName')
        this.toggleAllSelection(true, "feeArrangementType", false)
        this.toggleAllSelectionName(true, "areaOfLaw", false, 'areaOfLawId')
        this.toggleAllSelectionName(true, "practiceGroup", false, 'practiceGroupId')
        this.loader = false;
      })
  }
  loadFilterData(model) {
    if (!this.initalLoad && this.filterForm.controls[model]?.value.length > 0) {
      const baseRate = this.filterForm.value['baseRate']
      const billingMethod = this.filterForm.value['billingMethod']
      const payorType = this.filterForm.value['payorType']
      const billingFrequency = this.filterForm.value['billingFrequency']
      const sicCode = this.filterForm.value['sicCode']
      const matterId = this.filterForm.value['matterId']
      const feeArrangementType = this.filterForm.value['feeArrangementType']
      const areaOfLawId = this.filterForm.value['areaOfLaw']
      const practiceGroupId = this.filterForm.value['practiceGroup']
      if (baseRate.length === 0) {
        this.toggleAllSelection(true, "baseRate", false)
      }
      if (payorType.length === 0) {
        this.toggleAllSelection(true, "payorType", false)
      }
      if (billingMethod.length === 0) {
        this.toggleAllSelection(true, "billingMethod", false)
      }
      if (billingFrequency.length === 0) {
        this.toggleAllSelection(true, "billingFrequency", false)
      }
      if (sicCode.length === 0) {
        this.toggleAllSelectionName(true, "sicCode", false, 'clientSicId')
      }
      if (feeArrangementType.length === 0) {
        this.toggleAllSelection(true, "feeArrangementType", false)
      }
      if (areaOfLawId.length === 0) {
        this.toggleAllSelectionName(true, "areaOfLaw", false, 'areaOfLawId')
      }
      if (practiceGroupId.length === 0) {
        this.toggleAllSelectionName(true, "practiceGroup", false, 'practiceGroupId')
      }
      if (matterId.length === 0) {
        this.toggleAllSelectionName(true, "matterId", false, 'matterName')
      }
      this.found.emit(
        this.filterForm.value
      )
      //const _data = this.filterForm.value
      //this.searchData(_data)
    }
  }
  formatterEmployee = (r: any) => {
    return this.formatEmployee(r);
  }
  formatEmployee(r) {
    return r ? `${r.name} - ${r.email}` : "";
  }

  toggleAllSelectionResponsibleAttorney = () => {
    //this.loader = true
    // const _data = this.filterForm.value
    // this.searchData(_data)
    this.filter();
  }
  toggleDurationMin = (event) => {
    if (this.filterForm.value.durationTo && this.filterForm.value.durationTo < event.target.value) {
      this.filterForm.patchValue({
        "durationFrom": this.filterForm.value.durationTo
      })
    }
    this.filter();
  }
  toggleDurationMax = (event) => {
    if (this.filterForm.value.durationFrom && this.filterForm.value.durationFrom > event.target.value) {
      this.filterForm.patchValue({
        "durationTo": this.filterForm.value.durationFrom
      })
    }
    this.filter();
  }
  searchEmployee: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      merge(this.focus3$),
      merge(this.click3$.pipe(filter(() => !this.instance3?.isPopupOpen()))),
      switchMap((term) => {
        this._employee.searchTerm = term;
        const _responsibleBillingManagerId = this.collectionOptions["responsibleBillingManagerId"].filter((_item) => _item._id !== null).map((_item) => _item._id)
        return this.staffsService.getSearchStaffs(this._employee, _responsibleBillingManagerId).pipe(
          map(x => {
            return x.results
          }),
          catchError(() => {
            return of([]);
          }),
        )
      }
      ),
      tap(() => (this.clientLoading = false)),
    );
  onCheckboxChange(e: any, model) {
    let checkArray = this.filterForm.controls[model].value;
    if (e.target.checked) {
      checkArray.push(e.target.value);
    } else {
      let i: number = 0;
      checkArray.forEach((item: any) => {
        if (item == e.target.value) {
          checkArray = [
            ...checkArray.slice(0, i),
            ...checkArray.slice(i + 1, checkArray.length)
          ]
          return;
        }
        i++;
      });
    }
    this.filterForm.patchValue({
      [model]: checkArray
    });
    this.loadFilterData(model)
  }
  resetResponsibleAttorney() {
    this.filterForm.patchValue({
      "responsibleAttorney": ""
    });
    this.found.emit(
      this.filterForm.value
    )
  }
  calllbackFn(model) {
    return this.filterForm.controls[model]?.value.length == this.collectionOptions[model]?.length
  }

  toggleAllSelectionName(checked, model, inital = true, fieldName = 'matterName') {
    if (checked) {
      this.filterForm.patchValue({
        [model]: this.collectionOptions[model].map((_baseRate) => _baseRate._id[fieldName])
      })
    } else {
      this.filterForm.patchValue({
        [model]: []
      })
    }
    inital && this.loadFilterData(model)
  }
  selectedItem(item) {
    console.log(item);
    const data = { ...this.filterForm.value, "responsibleAttorney": item?.item }
    this.found.emit(
      data
    )
  }
  toggleAllSelection(checked, model, inital = true) {
    if (checked) {
      this.filterForm.patchValue({
        [model]: this.collectionOptions[model].map((_baseRate) => _baseRate._id || -1)
      })
    } else {
      this.filterForm.patchValue({
        [model]: []
      })
    }
    inital && this.loadFilterData(model)
  }

  openMenu() {
    this.open = true
    this.openClass = "slide-in"
  }
  closeMenu() {
    this.openClass = "slide-out"
    this.open = false
  }
  filter() {
    this.found.emit(
      this.filterForm.value
    )
  }
  callbackLoad() {
    // this.filterForm.patchValue({
    //   "billingFrequency": ""
    // })
    console.log(this.filterForm.value)
    this.filter()
  }
  resetEvent() {
    this.filterForm.patchValue({
      "adjustmentStartDate": "",
      "adjustmentEndDate": "",
      "expirationStartDate": "",
      "expirationEndDate": ""
    })
    this.iniitalLoadData(true);
  }
}
