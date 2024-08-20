import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '@app/layout/role/service/role.service';
import { routerTransition } from '@app/router.animations';
import { Observable, of, OperatorFunction, Subject } from 'rxjs';
import { ClientService } from '../../../client/service/client.service';
import { AttachmentTypeService } from '../../../attachment-type/service/attachment-type.service';
import { BaseRateService } from '../../../base-rate/service/base-rate.service';
import { BillingFrequencyService } from '../../../billing-frequency/service/billing-frequency.service';
import { BillingMethodService } from '../../../billing-method/service/billing-method.service';
import { BillingcurrencyService } from '../../../billingcurrency/service/billingcurrency.service';
import { HourlyBillingService } from '../../../hourly-billing/service/hourly-billing.service';
import { PayorTypeService } from '../../../payor-type/service/payor-type.service';
import { SICCodeService } from '@app/layout/sic-code/service/sic-code.service';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

import { catchError, debounceTime, distinctUntilChanged, map, switchMap, tap, merge, filter } from 'rxjs/operators';
import { SortDirection } from '@app/shared/directives';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { StaffService } from '@app/layout/staff/service/staff.service';
import { AgreementService } from '@app/layout/agreement/service/agreement.service';
import { AgreementDataObject } from './agreement-data';
const objAdjustment = {
  adjustmentDate: ['', [Validators.required]],
  adjustmentDetails: ['', [Validators.required]],
  adjustmentReminder: ['', [Validators.required]],
  expirationReminderDate: ['', []],
  adjustmentReminderDate: ['', []],
  adjustmentReminderEmailRecipient: '',
  adjustmentReminderEmailContent: ['', []],
}
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
  selector: 'app-add-edit-agreement',
  templateUrl: './add-edit-agreement.component.html',
  styleUrls: ['./add-edit-agreement.component.scss'],
  animations: [routerTransition()]
})

export class AddEditAgreementComponent implements OnInit {
  @ViewChild('file', { static: false }) input: ElementRef<HTMLInputElement>;
  public addEditForm: FormGroup;
  roles: any = [];
  agreementId: any;
  editForm = false;
  isLoading: boolean = false;
  isLoadingbtn: boolean = false;
  isLoadingAttachment: boolean = false;
  editData: any = [];
  submitted = false;
  isBillingFreOther = false;
  isFeeArrangmentHourlyBilled: boolean = false;
  isFeeArrangmentFixedFee: boolean = false;
  isFeeArrangmentCappedFee: boolean = false;
  isFeeArrangmentFullContingency: boolean = false;
  isFeeArrangmentPartialContingency: boolean = false;
  isFeeArrangmentFeeCollar: boolean = false;
  discountTypeOther: boolean;
  isRateAdjustmentDuringTerm: boolean = false;
  isRateAdjustmentDuringTermReminder: boolean = false;
  isBillingMethodOther: boolean = false;
  isPayorTypeOther: boolean = false;
  clients: any = []
  clientLoading: boolean = false
  clientSearchFailed: boolean = false
  _hourlyBilling: any = [];
  _baseRate: any = [];
  _billingMethods: any = [];
  _billingCurrency: any = [];
  _billingFrequencies: any = [];
  _attachmentType: any = [];
  _payorType: any = [];
  @ViewChild('instance') instance: NgbTypeahead;
  @ViewChild('instance') instance1: NgbTypeahead;
  @ViewChild('instance') instance2: NgbTypeahead;
  @ViewChild('instance') instanceResAtt: NgbTypeahead;
  @ViewChild('instance') instanceBillAtt: NgbTypeahead;
  @ViewChild('instance') instanceMatter: NgbTypeahead;
  @ViewChild('instance') instancePracticeGroup: NgbTypeahead;
  @ViewChild('instance') instanceAreaOfLaw: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  focus1$ = new Subject<string>();
  click1$ = new Subject<string>();
  focus2$ = new Subject<string>();
  click2$ = new Subject<string>();
  focusResAtt$ = new Subject<string>();
  clickResAtt$ = new Subject<string>();
  focusBillAtt$ = new Subject<string>();
  focusAreaOfLaw$ = new Subject<string>();
  clickBillAtt$ = new Subject<string>();
  focusMatter$ = new Subject<string>();
  focusPracticeGroup$ = new Subject<string>();
  clickMatter$ = new Subject<string>();
  clickPracticeGroup$ = new Subject<string>();
  clickAreaOfLaw$ = new Subject<string>();
  adjustmentArray = []
  public _state: State = {
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'desc',
  };
  public _dropdown: State = {
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'asc',
  };
  public _sic: State = {
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'asc',
  };
  public _matter: State = {
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'asc',
  };
  public _employee: State = {
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'asc',
  };
  public _areaOfLaw: State = {
    page: 1,
    limit: 20,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'asc',
  };
  public _practiceGroup: State = {
    page: 1,
    limit: 20,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'asc',
  };
  matterRecord: any = [];
  isMatterRecord: boolean = false;
  attachmentArray: any = [];
  attachmentLocalUrl: string | ArrayBuffer;
  modalReference: any;
  aggreementDataObject: AgreementDataObject;
  agreementData: any;
  viewAgreementLink: string;
  constructor(
    public route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    public router: Router,
    public fb: FormBuilder,
    public rolesServie: RoleService,
    public agreementService: AgreementService,
    public attachmentTypeService: AttachmentTypeService,
    public baseRateService: BaseRateService,
    public billingFrequencyService: BillingFrequencyService,
    public billingMethodService: BillingMethodService,
    public billingcurrencyService: BillingcurrencyService,
    public hourlyBillingService: HourlyBillingService,
    public payorTypeService: PayorTypeService,
    public sicCodeService: SICCodeService,
    public staffsService: StaffService,
    private modalService: NgbModal
    // public toastr: ToastrService
  ) {
    this.addEditForm = this.fb.group({
      //Client Details
      clientGroup: ['', [Validators.required]],
      client: ['', [Validators.required]],
      matter: ['', [Validators.required]],
      matterId: ['', []],
      matterName: ['', []],
      clientSic: ['', [Validators.required]],
      responsibleAttorney: ['', [Validators.required]],
      billingAttorney: ['', [Validators.required]],
      areaOfLaw: ['', [Validators.required]],
      practiceGroup: ['', [Validators.required]],
      agreementStartDate: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      reminderTimingDay: [''],
      //Fee Details Fields
      feeArrangementType: ['', [Validators.required]],
      fixedFeeType: ['', []],
      fixedFeeValue: ['', []],
      fixedFeeDetails: ['', []],
      baseRateType: ['', []],
      discount: ['', []],
      discountType: ['', []],
      otherDiscount: ['', []],
      feeArrangementDetail: ['', []],
      rateCardDetails: ['', []],
      cappedRateDetail: ['', []],
      targetFee: ['', []],
      collarPercentage: ['', []],
      feeCapAmount: ['', []],
      rateAdjustmentDuringTerm: [null, [Validators.required]],
      fullContingencyDetail: ['', []],
      partialContingencyDetail: [''],
      cappedFeeDetails: ['', []],
      feeCollarDetail: ['', []],
      //Billing Details Fields
      billingFrequency: ['', [Validators.required]],

      billingFrequencyOther: ['', []],
      billingCurrency: ['', [Validators.required]],
      billingMethod: ['', [Validators.required]],
      payorType: ['', [Validators.required]],
      payorDetail: ['', []],
      preferredProvider: ['', [Validators.required]],
      attachmentType: ['Engagement Letter'],
      attachmentTypeOther: [''],
      adjustmentArray: this.fb.array([])
    });
    const feeArrangmentHourlyBilled = ["baseRateType", "discount", "discountType"/*, "rateCardDetails", "cappedRateDetail"*/]
    const feeArrangmentFixedFee = ["fixedFeeType", "fixedFeeValue",/*, "fixedFeeDetails"*/]
    const feeArrangmentCappedFee = ["baseRateType", "feeCapAmount", "discount", "discountType"]
    const feeArrangmentFullContingency = ["fullContingencyDetail"]
    const feeArrangmentPartialContingency = ["partialContingencyDetail"]
    const feeArrangmentFeeCollar = [/*'targetFee', 'collarPercentage', 'feeCollarDetail'*/]
    const otherDiscount = ["otherDiscount"]
    this.addEditForm.get('feeArrangementType').valueChanges.subscribe(val => {
      let currentArray = []
      switch (val) {
        case "Hourly Billed":
          this.addValidation(feeArrangmentHourlyBilled);
          currentArray = feeArrangmentHourlyBilled;
          break;
        case "Fixed Fee":
          this.addValidation(feeArrangmentFixedFee);
          currentArray = feeArrangmentFixedFee;
          break;
        case "Capped Fee":
          this.addValidation(feeArrangmentCappedFee);
          currentArray = feeArrangmentCappedFee;
          break;
        case "Full Contingency":
          this.addValidation(feeArrangmentFullContingency);
          currentArray = feeArrangmentFullContingency;
          break;
        case "Partial Contingency":
          this.addValidation(feeArrangmentPartialContingency);
          currentArray = feeArrangmentPartialContingency;
          break;
        case "Fee Collar":
          this.addValidation(feeArrangmentFeeCollar);
          currentArray = feeArrangmentFeeCollar;
          break;
      }
      let combineArray = [
        ...feeArrangmentFeeCollar,
        ...feeArrangmentHourlyBilled,
        ...feeArrangmentFixedFee,
        ...feeArrangmentCappedFee,
        ...feeArrangmentFullContingency,
        ...feeArrangmentPartialContingency,
      ]
      ///combineArray = [...new Set(combineArray)]
      const removeValidatio = combineArray.filter((_v) => {
        return !currentArray.includes(_v)
      })
      this.removeValidation(removeValidatio);
      this.updateValues(combineArray)
    });

    this.addEditForm.get('rateAdjustmentDuringTerm').valueChanges.subscribe(val => {
      if (val === 'Yes') {
        this.addAdjustmentRow()
      } else {
        this.getAdjustmentArray().controls.forEach((valu, index) => {
          this.removeAdjustmentRow(index)
        })
      }
    });
    this.route.params.subscribe(params => {
      if (params.agreementId !== '' && params.agreementId != null) {
        this.agreementId = params.agreementId;
        this.editForm = true;
        this.getAgreement(this.agreementId);
      }
    });
    this.viewAgreementLink = `view-agreement/${this.agreementId}`;
  }
  addValidation(_validations) {
    _validations.forEach(validation => {
      this.addEditForm.get(validation).setValidators(Validators.required);
      this.addEditForm.get(validation).markAsUntouched();
    });
  }
  removeValidation(_validations) {
    _validations.forEach(validation => {
      this.addEditForm.get(validation).clearValidators();
    });
  }
  updateValues(_validations) {
    _validations.forEach(validation => {
      this.addEditForm.get(validation).updateValueAndValidity();
    });
  }
  getAdjustmentArray(): FormArray {
    const control = this.addEditForm.get("adjustmentArray") as FormArray
    return control
  }
  getValidity(i, name) {
    const adjustArray = (<FormArray>this.addEditForm.get('adjustmentArray')).controls[i];
    const control = adjustArray && (<FormGroup>adjustArray).controls[name];
    //console.log((<FormGroup>adjustArray).controls[name])
    return control
  }
  newAdjustmentArray() {
    const obj = this.fb.group(objAdjustment);
    const reminderField = [
      'adjustmentReminderDate',
      'expirationReminderDate',
      'adjustmentReminderEmailContent'
    ]
    obj.get('adjustmentReminder').valueChanges.subscribe(val => {
      if (val === 'Yes') {
        reminderField.forEach((validation) => {
          obj.get(validation).setValidators(Validators.required);
          obj.get(validation).markAsUntouched();
        })
      } else {
        reminderField.forEach((validation) => {
          obj.get(validation).clearValidators();
        })
      }
      reminderField.forEach((validation) => {
        obj.get(validation).updateValueAndValidity();
      })
    });
    return obj;
  }
  addAdjustmentRow() {
    const index = this.getAdjustmentArray().controls.length
    this.getAdjustmentArray().push(this.newAdjustmentArray());
  }
  removeAdjustmentRow(index) {
    this.getAdjustmentArray().removeAt(index);
  }
  initAttachment() {
    return this.fb.group({
      attachmentType: this.fb.control(['Engagement Letter', [Validators.required]]),
      otherAttachmentType: this.fb.control(['']),
      attachmentFile: this.fb.control(['', [Validators.required]]),
      trackingId: this.generateUniqueId()
    });
  }

  addGroup() {
    // add to the list
    const control = <FormArray>this.addEditForm.controls['attachment'];
    control.push(this.initAttachment());
  }

  removeGroup(i: number) {
    // remove from the list
    const control = <FormArray>this.addEditForm.controls['attachment'];
    control.removeAt(i);
  }

  ngOnInit(): void {
    this.getAllDropDown()
  }
  getAllDropDown() {
    this.attachmentTypeService.getAttachmentTypes(this._dropdown).subscribe(response => {
      response?.results.map(element => {
        this._attachmentType.push({ value: element.name, label: element.name })
      })
      // console.log(this._attachmentType);
    }, (error) => {
    });
    this.baseRateService.getBaseRates(this._dropdown).subscribe(response => {
      this._baseRate = response['results'];
    }, (error) => {
    });
    this.billingFrequencyService.getBillingFrequencies(this._dropdown).subscribe(response => {
      this._billingFrequencies = response['results'];
    }, (error) => {
    });
    this.billingMethodService.getBillingMethods(this._dropdown).subscribe(response => {
      this._billingMethods = response['results'];
    }, (error) => {
    });
    this.billingcurrencyService.getBillingcurrencys(this._dropdown).subscribe(response => {
      this._billingCurrency = response['results'];
    }, (error) => {
    });
    this.hourlyBillingService.getHourlyBillings(this._dropdown).subscribe(response => {
      this._hourlyBilling = response['results'];
    }, (error) => {
    });
    this.payorTypeService.getPayorTypes(this._dropdown).subscribe(response => {
      this._payorType = response['results'];
    }, (error) => {
    });
  }
  submitForm() {
    console.log(this.addEditForm.valid);
    // if (!this.addEditForm.valid) {
    //   this.submitted = true;
    //   return;
    // }
    this.processAgreementsObj();
    this.isLoadingbtn = true;
    this.agreementService.addNewAgreement(this.aggreementDataObject).subscribe(response => {
      if (response) {
        this.addEditForm.reset();
        this.attachmentArray = [];
        this.modalReference.close();
        Swal.fire({
          icon: 'success',
          title: 'Record Created',
          showConfirmButton: false,
          timer: 1500
        })
      }
      this.isLoadingbtn = false;
      this.router.navigate(['/dashboard/search']);
    }, (error) => {
      this.isLoadingbtn = false;
      Swal.fire({
        icon: 'error',
        title: error.message,
        showConfirmButton: false,
        timer: 1500
      })
    });
  }

  processAgreementsObj() {
    this.aggreementDataObject = {
      "clientGroupId": this.addEditForm.value.clientGroup.groupId,
      "clientGroupName": this.addEditForm.value.clientGroup.name,
      "client": this.addEditForm.value.client.id,
      "clientId": this.addEditForm.value.client.clientId,
      "clientName": this.addEditForm.value.client.name,
      'matterId': this.addEditForm.value.matterId || this.addEditForm.value.matter.matterId,
      "matterName": this.addEditForm.value.matterName || this.addEditForm.value.matter.name,
      "clientSicId": this.addEditForm.value.clientSic.id,
      "clientSicName": this.addEditForm.value.clientSic.description,
      "principalAttorneyId": this.addEditForm.value.responsibleAttorney.id,
      "principalAttorneyName": this.addEditForm.value.responsibleAttorney.name,
      "responsibleBillingManagerId": this.addEditForm.value.billingAttorney.id,
      "responsibleBillingManagerName": this.addEditForm.value.billingAttorney.name,
      "areaOfLawId": this.addEditForm.value.areaOfLaw.id,
      "areaOfLawName": this.addEditForm.value.areaOfLaw.name,
      "practiceGroupId": this.addEditForm.value.practiceGroup.id,
      "practiceGroupName": this.addEditForm.value.practiceGroup.name,
      'startDate': this.addEditForm.value.agreementStartDate,
      'expirationDate': this.addEditForm.value.expirationDate,
      'feeArrangementDetails_reminderTimingDay': this.addEditForm.value.reminderTimingDay,
      'feeArrangementType': this.addEditForm.value.feeArrangementType,
      'feeArrangementDetails_fixedFeeType': this.addEditForm.value.fixedFeeType,
      'feeArrangementDetails_fixedFeeValue': this.addEditForm.value.fixedFeeValue,
      'feeArrangementDetails_fixedFeeDetail': this.addEditForm.value.fixedFeeDetails || '',
      'feeArrangementDetails_baseRateType': this.addEditForm.value.baseRateType || '',
      'feeArrangementDetails_discount': this.addEditForm.value.discount || '',
      'feeArrangementDetails_discountDetail': this.addEditForm.value.discountType || '',
      'feeArrangementDetails_discountDetailDescription': this.addEditForm.value.otherDiscount || '',
      'feeArrangementDetails_rateCardDetail': this.addEditForm.value.rateCardDetails || '',
      'feeArrangementDetails_cappedRateDetail': this.addEditForm.value.cappedRateDetail || '',
      'feeArrangementDetails_feeCapAmount': this.addEditForm.value.feeCapAmount || '',
      'feeArrangementDetails_targetFee': this.addEditForm.value.targetFee || '',
      'feeArrangementDetails_cappedFeeDetail': this.addEditForm.value.cappedFeeDetails || '',
      'feeArrangementDetails_feeCollarDetail': this.addEditForm.value.feeCollarDetail || '',
      'feeArrangementDetails_collarPercentage': this.addEditForm.value.collarPercentage || '',
      'feeArrangementDetails_rateAdjustmentDuringTerm': this.addEditForm.value.rateAdjustmentDuringTerm == 'Yes' ? true : false,
      'feeArrangementDetails_adjustment': this.addEditForm.value.adjustmentArray.map((_adj) => {
        let reminderObj = {}
        if (_adj.adjustmentReminder === 'Yes') {
          reminderObj = {
            reminderDate: _adj.adjustmentReminderDate,
            expirationDate: _adj.expirationReminderDate,
            reminderEmailRecipient: _adj.adjustmentReminderEmailRecipient,
            reminderEmailContent: _adj.adjustmentReminderEmailContent
          }
        }
        return {
          adjustmentDate: _adj.adjustmentDate,
          adjustmentDetails: _adj.adjustmentDetails,
          reminder: (_adj.adjustmentReminder === 'Yes'),
          ...reminderObj
        }
      }),
      'feeArrangementDetails_fullContingencyDetail': this.addEditForm.value.fullContingencyDetail || '',
      'feeArrangementDetails_partialContingencyDetail': this.addEditForm.value.partialContingencyDetail || '',
      'billingFrequency': this.addEditForm.value.billingFrequency,
      'billingFrequencyDetails': this.addEditForm.value.billingFrequencyOther,
      'billingCurrency': this.addEditForm.value.billingCurrency,
      'billingMethod': this.addEditForm.value.billingMethod,
      'billingMethodDetails': this.addEditForm.value.billingMethodOther || '',
      'payorType': this.addEditForm.value.payorType,
      'payorDetail': this.addEditForm.value.payorDetail,
      'preferredProvider': this.addEditForm.value.preferredProvider == 'Yes' ? true : false,
      'attachments': this.attachmentArray,
      'updateDetails': []
    }
    if (!this.editForm) {
      for (var key in this.aggreementDataObject) {
        if (this.aggreementDataObject.hasOwnProperty(key)) {
          var value = this.aggreementDataObject[key];
          if (value === null || value === undefined || value === '') {
            delete this.aggreementDataObject[key];
            delete this.addEditForm.value[key];
          }
        }
      }
      delete this.aggreementDataObject.updateDetails;
    } else {
      const oldObj = this.agreementData;
      const newObj = this.aggreementDataObject;
      let modifiedProps = this.findModifiedProperties(oldObj, newObj);
      this.aggreementDataObject.updateDetails = modifiedProps
      console.log(modifiedProps, "----------");
    }
  }

  submitUpdateForm() {
    this.processAgreementsObj();
    this.isLoadingbtn = true;
    this.agreementService.updateAgreement(this.agreementId, this.aggreementDataObject).subscribe(response => {
      if (response) {
        this.modalReference.close();
        Swal.fire({
          icon: 'success',
          title: 'Record Updated!',
          showConfirmButton: false,
          timer: 1500
        })
      }
      this.addEditForm.reset();
      this.attachmentArray = [];
      this.isLoadingbtn = false;
      this.router.navigate(['/dashboard/search']);
    }, (error) => {
      this.isLoadingbtn = false;
      Swal.fire({
        icon: 'error',
        title: error.message,
        showConfirmButton: false,
        timer: 1500
      })
    });
  }

  getAgreement(agreementId: string) {
    this.isLoading = true;
    this.agreementService.getAgreementById(agreementId).subscribe(response => {
      this.agreementData = response;
      this.agreementData.feeArrangementDetails_adjustment = this.agreementData.feeArrangementDetails_adjustment?.map((adjustmentDetail) => {
        return {
          adjustmentDate: this.getDateFormat(adjustmentDetail.adjustmentDate),
          adjustmentDetails: adjustmentDetail.adjustmentDetails,
          adjustmentReminder: adjustmentDetail.reminder ? 'Yes' : 'No',
          expirationReminderDate: adjustmentDetail.expirationDate,
          adjustmentReminderDate: this.getDateFormat(adjustmentDetail.reminderDate),
          adjustmentReminderEmailRecipient: adjustmentDetail.reminderEmailRecipients,
          adjustmentReminderEmailContent: adjustmentDetail.reminderEmailContent,
        }
      })
      const patchedValues = {
        clientGroup: `${this.agreementData.clientGroupId} - ${this.agreementData.clientGroupName}`,
        client: `${this.agreementData.clientId} - ${this.agreementData.clientName}`,
        matter: `${this.agreementData.matterId} - ${this.agreementData.matterName}`,
        matterId: this.agreementData.matterId,
        matterName: this.agreementData.matterName,
        clientSic: this.agreementData.clientSicName,
        responsibleAttorney: this.agreementData.principalAttorneyName,
        billingAttorney: this.agreementData.responsibleBillingManagerName,
        areaOfLaw: this.agreementData.areaOfLawName,
        practiceGroup: this.agreementData.practiceGroupName,
        agreementStartDate: this.getDateFormat(this.agreementData.startDate),
        expirationDate: this.getDateFormat(this.agreementData.expirationDate),
        reminderTimingDay: this.agreementData.feeArrangementDetails_reminderTimingDay,
        feeArrangementType: this.agreementData.feeArrangementType,
        fixedFeeType: this.agreementData.feeArrangementDetails_fixedFeeType,
        fixedFeeValue: this.agreementData.feeArrangementDetails_fixedFeeValue,
        fixedFeeDetails: this.agreementData.feeArrangementDetails_fixedFeeDetail,
        baseRateType: this.agreementData.feeArrangementDetails_baseRateType,
        discount: this.agreementData.feeArrangementDetails_discount,
        discountType: this.agreementData.feeArrangementDetails_discountDetail,
        otherDiscount: this.agreementData.feeArrangementDetails_discountDetailDescription,
        rateCardDetails: this.agreementData.feeArrangementDetails_rateCardDetail,
        cappedRateDetail: this.agreementData.feeArrangementDetails_cappedRateDetail,
        targetFee: this.agreementData.feeArrangementDetails_targetFee,
        collarPercentage: this.agreementData.feeArrangementDetails_collarPercentage,
        feeCapAmount: this.agreementData.feeArrangementDetails_feeCapAmount,
        rateAdjustmentDuringTerm: this.agreementData.feeArrangementDetails_rateAdjustmentDuringTerm ? 'Yes' : 'No',
        adjustmentArray: this.agreementData.feeArrangementDetails_adjustment,
        fullContingencyDetail: this.agreementData.feeArrangementDetails_fullContingencyDetail,
        partialContingencyDetail: this.agreementData.feeArrangementDetails_partialContingencyDetail,
        cappedFeeDetails: this.agreementData.feeArrangementDetails_cappedFeeDetail,
        feeCollarDetail: this.agreementData.feeArrangementDetails_feeCollarDetail,
        billingFrequency: this.agreementData.billingFrequency,
        billingFrequencyOther: this.agreementData.billingFrequencyDetails,
        billingCurrency: this.agreementData.billingCurrency,
        billingMethod: this.agreementData.billingMethod,
        payorType: this.agreementData.payorType,
        payorDetail: this.agreementData.payorDetail,
        preferredProvider: this.agreementData.preferredProvider ? 'Yes' : 'No',
        attachments: this.agreementData.attachments
      }
      this.agreementData.startDate = this.getDateFormat(this.agreementData.startDate)
      this.agreementData.expirationDate = this.getDateFormat(this.agreementData.expirationDate)
      this.agreementData.feeArrangementDetails_adjustmentDate = this.getDateFormat(this.agreementData.feeArrangementDetails_adjustmentDate)
      this.agreementData.feeArrangementDetails_reminderDate = this.getDateFormat(this.agreementData.feeArrangementDetails_reminderDate)
      this.attachmentArray = this.agreementData.attachments;
      this.feeArrangementType(event, patchedValues.feeArrangementType);
      this.rateAdjustmentDuringTerm(event, patchedValues.rateAdjustmentDuringTerm)
      // this.rateAdjustmentDuringTermReminder(event, patchedValues.adjustmentReminder)
      this.addEditForm.patchValue(patchedValues);
      this.discountType(event, patchedValues.discountType);
      this.billingFrequency(event, patchedValues.billingFrequency);
      this.billingMethod(event, patchedValues.billingMethod);
      this.isLoading = false;
      this.cdr.detectChanges();
    }, (error) => {
      this.isLoading = false;
      this.router.navigate(['/dashboard/search']);
    });
  }

  billingFrequency(event, billingFrequency) {

    if (event.target.value == "Other" || billingFrequency == "Other") {
      this.isBillingFreOther = true;
    } else {
      this.isBillingFreOther = false;
      this.addEditForm.patchValue({ billingFrequencyOther: '' });
    }
  }

  formatter = (r: any) => {
    return this.format(r)
  }
  formatterMatter = (r: any) => {
    return this.formatMatter(r)
  }
  formatClientGrp = (r: any) => {
    if (r) {
      return this.formatClientGroup(r)
    }
  }
  formatterEmployee = (r: any) => {
    return this.formatEmployee(r)
  }

  formatterBillingAttorney = (r: any) => {
    return this.formatBillingAttorney(r)
  }

  formatterAreaOfLaw = (r: any) => {
    return this.formatAreaOfLaw(r)
  }

  formatterPracticeGroup = (r: any) => {
    return this.formatPracticeGroup(r)
  }

  formatterSIC = (r: any) => {
    return this.formatSIC(r)
  }

  getResponsibleAttorney(responsibleAttorneyId: any) {
    this.agreementService.getTimeKeepers(responsibleAttorneyId).subscribe(res => {
      console.log(res)
      this.addEditForm.patchValue({ responsibleAttorney: res[0].displayName });
      this.cdr.detectChanges();
    });
  }
  getBillingAttorney(billingAttorneyId: any) {
    this.agreementService.getTimeKeepers(billingAttorneyId).subscribe(res => {
      console.log(res)
      this.addEditForm.patchValue({ billingAttorney: res[0].displayName });
      this.cdr.detectChanges();
    });
  }

  getMatterRecord(clientId: any) {
    this.addEditForm.patchValue({ matter: '' });
    this.addEditForm.patchValue({ billingAttorneyId: '' });
    this.addEditForm.patchValue({ responsibleAttorney: '' });
    this.agreementService.getMatters(this._matter, clientId).subscribe(res => {

    })
  }

  displayMatter(value) {
    if (value) {
      this.addEditForm.patchValue({ matter: '' });
    } else {
      this.addEditForm.patchValue({ matterName: '' });
      this.addEditForm.patchValue({ matterId: '' });
    }
    this.isMatterRecord = value;
  }

  searchEmployeeResAtt: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      merge(this.focusResAtt$),
      merge(this.clickResAtt$.pipe(filter(() => !this.instanceResAtt.isPopupOpen()))),
      switchMap((term) => {
        this._employee.searchTerm = term;
        return this.staffsService.getStaffs(this._employee).pipe(
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

  searchEmployeeBillAtt: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      merge(this.focusBillAtt$),
      merge(this.clickBillAtt$.pipe(filter(() => !this.instanceBillAtt.isPopupOpen()))),
      switchMap((term) => {
        this._employee.searchTerm = term;
        return this.staffsService.getStaffs(this._employee).pipe(
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

  searchAreaOfLaw: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      merge(this.focusAreaOfLaw$),
      merge(this.clickAreaOfLaw$.pipe(filter(() => !this.instanceAreaOfLaw.isPopupOpen()))),
      switchMap((term) => {
        this._areaOfLaw.searchTerm = term;
        return this.agreementService.getPracticeGroupById(this._areaOfLaw, this.addEditForm.value.practiceGroup.id).pipe(
          map(x => {
            return x.areaOfLawId
          }),
          catchError(() => {
            return of([]);
          }),
        )
      }
      ),
      tap(() => (this.clientLoading = false)),
    );

  searchPracticeGroup: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      merge(this.focusPracticeGroup$),
      merge(this.clickPracticeGroup$.pipe(filter(() => !this.instancePracticeGroup.isPopupOpen()))),
      switchMap((term) => {
        this._practiceGroup.searchTerm = term;
        return this.agreementService.getPracticeGroup(this._practiceGroup).pipe(
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

  searchSIC: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      merge(this.focus1$),
      merge(this.click1$.pipe(filter(() => !this.instance1.isPopupOpen()))),
      switchMap((term) => {
        this._sic.searchTerm = term;
        return this.sicCodeService.getSICCodes(this._sic).pipe(
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

  searchMatterRecords: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      merge(this.focusMatter$),
      merge(this.clickMatter$.pipe(filter(() => !this.instanceMatter.isPopupOpen()))),
      switchMap((term) => {
        this._matter.searchTerm = term;
        const clientId = this.addEditForm.value.client.clientId || ""
        return this.agreementService.getMatters(this._matter, clientId).pipe(
          map(x => {
            console.log(x.results);
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

  searchResponsibleAttorney: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => {
        this._matter.searchTerm = term;
        console.log(this.addEditForm.controls['matter'].value?.responsibleAttorney)
        const responsibleAttorney = this.addEditForm.controls['matter'].value?.responsibleAttorney || ""
        return this.agreementService.getTimeKeepers(responsibleAttorney).pipe(
          map(x => {
            return x;
          }),
          catchError(() => {
            return of([]);
          }),
        )
      }
      ),
      tap(() => (this.clientLoading = false)),
    );

  searchBillingAttorney: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => {
        this._matter.searchTerm = term;
        console.log(this.addEditForm.controls['matter'].value?.billingAttorney)
        const billingAttorney = this.addEditForm.controls['matter'].value?.billingAttorney || ""
        return this.agreementService.getTimeKeepers(billingAttorney).pipe(
          map(x => {
            return x;
          }),
          catchError(() => {
            return of([]);
          }),
        )
      }
      ),
      tap(() => (this.clientLoading = false)),
    );

  format(r) {
    if (typeof r === 'string') {
      return r;
    } else if (typeof r === 'object') {
      return r ? `${r.clientId} - ${r.name}` : ""
    }
  }
  formatClientGroup(r) {
    if (typeof r === 'string') {
      return r;
    } else if (typeof r === 'object') {
      return r ? `${r.groupId} - ${r.name}` : ""
    }
  }
  formatMatter(r) {
    if (typeof r === 'string') {
      return r;
    } else if (typeof r === 'object') {
      return r ? `${r.matterId} - ${r.name}` : ""
    }
  }
  formatEmployee(r) {
    if (typeof r === 'string') {
      return r;
    } else if (typeof r === 'object') {
      return r ? `${r.name} - ${r.email}` : ""
    }

  }
  formatBillingAttorney(r) {
    console.log(r);
    if (typeof r === 'string') {
      return r;
    } else if (typeof r === 'object') {
      return r ? `${r.name} - ${r.email}` : ""
    }
  }

  formatAreaOfLaw(r) {
    console.log(r);
    if (typeof r === 'string') {
      return r;
    } else if (typeof r === 'object') {
      return r ? `${r.aol_code} - ${r.name}` : ""
    }
  }

  formatPracticeGroup(r) {
    console.log(r);
    if (typeof r === 'string') {
      return r;
    } else if (typeof r === 'object') {
      return r ? `${r.name}` : ""
    }
  }
  formatSIC(r) {
    if (typeof r === 'string') {
      return r;
    } else if (typeof r === 'object') {
      return r ? `${r.code} - ${r.description}` : ""
    }

  }
  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      merge(this.focus$),
      merge(this.click$.pipe(filter(() => !this.instance.isPopupOpen()))),
      tap(() => (this.clientLoading = true)),
      switchMap((term) => {
        this._state.searchTerm = term;
        const groupId = this.addEditForm?.value?.clientGroup?.groupId
        return this.agreementService.getClientByGroup(this._state, groupId).pipe(
          tap(() => (this.clientSearchFailed = false)),
          map(x => {
            console.log(x);
            return x
          }),
          catchError(() => {
            this.clientSearchFailed = true;
            return of([]);
          }),
        )
      }
      ),
      tap(() => (this.clientLoading = false)),
    );
  searchClientGroup: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      merge(this.focus2$),
      merge(this.click2$.pipe(filter(() => !this.instance2.isPopupOpen()))),
      tap(() => (this.clientLoading = true)),
      switchMap((term) => {
        this._state.searchTerm = term;
        return this.agreementService.getClientGroup(this._state).pipe(
          tap(() => (this.clientSearchFailed = false)),
          map(x => {
            return x.results
          }),
          catchError(() => {
            this.clientSearchFailed = true;
            return of([]);
          }),
        )
      }
      ),
      tap(() => (this.clientLoading = false)),
    );
  feeArrangementType(event, feeArrangementType) {
    this.resetFeeDetailsForm();
    if (event.target.value == "Hourly Billed" || feeArrangementType == "Hourly Billed") {
      this.isFeeArrangmentHourlyBilled = true;

      this.isFeeArrangmentFixedFee = false;
      this.isFeeArrangmentCappedFee = false;
      this.isFeeArrangmentFullContingency = false;
      this.isFeeArrangmentPartialContingency = false;
      this.isFeeArrangmentFeeCollar = false;
      this.discountTypeOther = false;
    } else if (event.target.value == "Fixed Fee" || feeArrangementType == "Fixed Fee") {
      this.isFeeArrangmentFixedFee = true;

      this.isFeeArrangmentHourlyBilled = false;
      this.isFeeArrangmentCappedFee = false;
      this.isFeeArrangmentFullContingency = false;
      this.isFeeArrangmentPartialContingency = false;
      this.isFeeArrangmentFeeCollar = false;

      this.isRateAdjustmentDuringTerm = false;
      this.isRateAdjustmentDuringTermReminder = false;
    } else if (event.target.value == "Capped Fee" || feeArrangementType == "Capped Fee") {
      this.isFeeArrangmentCappedFee = true;

      this.isFeeArrangmentHourlyBilled = false;
      this.isFeeArrangmentFixedFee = false;
      this.isFeeArrangmentFullContingency = false;
      this.isFeeArrangmentPartialContingency = false;
      this.isFeeArrangmentFeeCollar = false;
      this.discountTypeOther = false;
    } else if (event.target.value == "Full Contingency" || feeArrangementType == "Full Contingency") {
      this.isFeeArrangmentFullContingency = true;

      this.isFeeArrangmentHourlyBilled = false;
      this.isFeeArrangmentFixedFee = false;
      this.isFeeArrangmentCappedFee = false;
      this.isFeeArrangmentPartialContingency = false;
      this.isFeeArrangmentFeeCollar = false;

      this.isRateAdjustmentDuringTerm = false;
      this.isRateAdjustmentDuringTermReminder = false;
    } else if (event.target.value == "Partial Contingency" || feeArrangementType == "Partial Contingency") {
      this.isFeeArrangmentPartialContingency = true;

      this.isFeeArrangmentHourlyBilled = false;
      this.isFeeArrangmentFixedFee = false;
      this.isFeeArrangmentCappedFee = false;
      this.isFeeArrangmentFullContingency = false;
      this.isFeeArrangmentFeeCollar = false;

      this.isRateAdjustmentDuringTerm = false;
      this.isRateAdjustmentDuringTermReminder = false;
    } else if (event.target.value == "Fee Collar" || feeArrangementType == "Fee Collar") {
      this.isFeeArrangmentFeeCollar = true;

      this.isFeeArrangmentHourlyBilled = false;
      this.isFeeArrangmentFixedFee = false;
      this.isFeeArrangmentCappedFee = false;
      this.isFeeArrangmentFullContingency = false;
      this.isFeeArrangmentPartialContingency = false;
      this.discountTypeOther = false;
    }
    return true
  }

  discountType(event, discountType) {
    if (event.target.value == "Other" || discountType == "Other") {
      this.discountTypeOther = true;
    } else {
      this.discountTypeOther = false;
      this.addEditForm.patchValue({
        otherDiscount: ''
      })
    }
  }

  rateAdjustmentDuringTerm(event, rateAdjustmentDuringTerm) {
    if (event.target.value == "Yes" || rateAdjustmentDuringTerm == "Yes") {
      this.isRateAdjustmentDuringTerm = true;
    } else {
      this.isRateAdjustmentDuringTerm = false;
      this.isRateAdjustmentDuringTermReminder = false;
    }
    this.addEditForm.patchValue({
      adjustmentReminder: '',
      adjustmentDate: '',
      adjustmentDetails: '',
      adjustmentReminderDate: '',
      expirationReminderDate: '',
      adjustmentReminderEmailRecipients: '',
      adjustmentReminderEmailContent: ''
    })
  }

  rateAdjustmentDuringTermReminder(event, rateAdjustmentDuringTermReminder) {
    this.addEditForm.patchValue({
      adjustmentReminderDate: '',
      expirationReminderDate: '',
      adjustmentReminderEmailRecipients: '',
      adjustmentReminderEmailContent: ''
    })
    if (event.target.value == "Yes" || rateAdjustmentDuringTermReminder == "Yes") {
      this.isRateAdjustmentDuringTermReminder = true;
    } else {
      this.isRateAdjustmentDuringTermReminder = false;
    }
  }

  billingMethod(event, billingMethod) {
    if (event.target.value == "Other" || billingMethod == "Other") {
      this.isBillingMethodOther = true;
    } else {
      this.isBillingMethodOther = false;
    }
  }
  payorType(event) {
    this.addEditForm.patchValue({ payorDetail: '' });
    if (event.target.value == "Other") {
      this.isPayorTypeOther = true;
    } else {
      this.isPayorTypeOther = false;
    }
  }

  resetFeeDetailsForm() {
    this.addEditForm.patchValue({
      discount: '',
      discountType: '',
      otherDiscount: '',
      baseRateType: '',
      rateCardDetails: '',
      cappedRateDetail: '',
      targetFee: '',
      collarPercentage: '',
      rateAdjustmentDuringTerm: '',
      adjustmentArray: [],
      fullContingencyDetail: '',
      fixedFeeDetails: '',
    })
    this.isRateAdjustmentDuringTerm = false;
    this.isRateAdjustmentDuringTermReminder = false;
  }

  generateUniqueId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  trackByFn(index: number, item: any) {
    return item.trackingId;
  }

  open(content) {
    console.log(this.addEditForm.valid, this.addEditForm, "test=========================")
    if (this.addEditForm.valid) {
      this.modalReference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
    } else {
      this.addEditForm.markAllAsTouched();
    }
  }

  getAttachment(event) {
    this.isLoadingAttachment = true;
    let docType = this.addEditForm.value.attachmentType != 'Other' ? this.addEditForm.value.attachmentType : this.addEditForm.value.attachmentTypeOther;
    var formdata = new FormData();
    formdata.append("file", event.target.files[0]);
    // formdata.append("type", event.target.files[0].name);

    this.agreementService.saveAttachment(formdata).subscribe(res => {
      this.attachmentArray.push({
        type: docType,
        name: res?.key,
        file: res?.location
      })
      console.log(this.attachmentArray);
      this.resetAttachmentForm();
      this.isLoadingAttachment = false;
    }, (error) => {
      this.isLoadingAttachment = false;
    })
    this.input.nativeElement.value = "";
  }

  removeAttachment(index) {
    if (this.attachmentArray.length > 0)
      this.attachmentArray.splice(index, 1);
  }

  resetAttachmentForm() {
    this.addEditForm.patchValue({
      attachmentType: '',
      attachmentTypeOther: ''
    })

  }

  accessFileURL(filePath: any) {
    let data = {
      key: filePath
    }
    this.agreementService.getFileURL(data).subscribe(res => {
      window.open(res.file, '_blank');
    })
  }

  getDateFormat(dateString) {
    if (dateString) {
      const date = new Date(dateString);
      const formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');
      return formattedDate;
    } else {
      return null;
    }
  }

  findModifiedProperties(oldObj, newObj) {
    let modifiedProps = [];

    // loop through all the properties in the new object
    for (let prop in newObj) {
      // if the property exists in both objects and has a different value
      if (oldObj.hasOwnProperty(prop) && oldObj[prop] !== newObj[prop] && newObj[prop] !== undefined) {
        // add the property and its old and new values to the modifiedProps object
        modifiedProps.push({
          key: prop,
          before: oldObj[prop],
          after: newObj[prop]
        })
      }
    }
    // return the modifiedProps object
    return modifiedProps;
  }

  back() {
    this.router.navigate(['/dashboard/search/view-agreement/' + this.agreementId]);
  }

}
