import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbdSortableHeader, SortDirection, SortEvent } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { ConfirmationDialogService } from '@app/shared/services/confirmation-dialog/confirmation-dialog.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { AgreementService } from '../../service/agreement.service';



@Component({
  selector: 'app-agreements-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  animations: [routerTransition()]
})
export class FilterComponent implements OnInit {
  @Output() public found = new EventEmitter<any>();

  public filterForm: FormGroup;
  open: boolean = false
  openClass: string = ""
  baseRateAll = false
  loader = false
  initalLoad = false
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
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public router: Router,
    public agreementService: AgreementService,
    private cdr: ChangeDetectorRef,
    public fb: FormBuilder,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.iniitalLoadData()
  }
  iniitalLoadData(callback=false) {
    this.loader = true
    this.initalLoad = true
    this.agreementService.filtersData().subscribe(
      response => {
        this.collectionOptions = response
        this.toggleAllSelection(true, "baseRate")
        this.toggleAllSelection(true, "billingCurrency")
        this.toggleAllSelection(true, "billingMethod")
        this.toggleAllSelection(true, "payorType")
        this.toggleAllSelection(true, "feeArrangementType")
        this.toggleAllSelection(true, "attachmentType")
        this.toggleAllSelectionSic(true, "sicCode")
        this.loader = false
        this.initalLoad = false;
        this.cdr.detectChanges();
        callback && this.callbackLoad();
      })
  }
  ngOnInit() {

    this.filterForm = this.fb.group({
      //Client Details
      billingFrequency: [''],
      baseRate: [[]],
      billingCurrency: [[]],
      billingMethod: [[]],
      payorType: [[]],
      feeArrangementType: [[]],
      attachmentType: [[]],
      sicCode: [[]]
    })
  }
  loadFilterDataFrequency() {
    if (!this.initalLoad) {
      this.loader = true
      const _data = this.filterForm.value
      this.agreementService.filtersDataOption(_data).subscribe(
        response => {
          this.collectionOptions = response;
          this.cdr.detectChanges();
          this.toggleAllSelection(true, "baseRate", false)
          this.toggleAllSelection(true, "billingCurrency", false)
          this.toggleAllSelection(true, "billingMethod", false)
          this.toggleAllSelection(true, "payorType", false)
          this.toggleAllSelection(true, "feeArrangementType", false)
          this.toggleAllSelection(true, "attachmentType", false)
          this.toggleAllSelectionSic(true, "sicCode", false)
          this.loader = false;
        })
    }
  }
  loadFilterData(model) {
    if (!this.initalLoad && this.filterForm.controls[model]?.value.length > 0) {
      this.loader = true
      const _data = this.filterForm.value
      this.agreementService.filtersDataOption(_data).subscribe(
        response => {
          this.collectionOptions = response;
          this.cdr.detectChanges();
          this.toggleAllSelection(true, "baseRate", false)
          this.toggleAllSelection(true, "billingCurrency", false)
          this.toggleAllSelection(true, "billingMethod", false)
          this.toggleAllSelection(true, "payorType", false)
          this.toggleAllSelection(true, "feeArrangementType", false)
          this.toggleAllSelection(true, "attachmentType", false)
          this.toggleAllSelectionSic(true, "sicCode", false)
          this.loader = false;
        })
    }
  }
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
  calllbackFn(model) {
    return this.filterForm.controls[model]?.value.length == this.collectionOptions[model]?.length
  }
  toggleAllSelectionSic(checked, model, inital = true) {
    if (checked) {
      this.filterForm.patchValue({
        [model]: this.collectionOptions[model].map((_baseRate) => _baseRate._id.clientSicId)
      })
    } else {
      this.filterForm.patchValue({
        [model]: []
      })
    }
    inital && this.loadFilterData(model)
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
  callbackLoad(){
    this.filterForm.patchValue({
      "billingFrequency": ""
    })
    console.log(this.filterForm.value)
    this.filter()
  }
  resetEvent() {
    this.iniitalLoadData(true);
  }
}
