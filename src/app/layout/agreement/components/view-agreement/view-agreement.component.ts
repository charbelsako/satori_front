import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '@app/layout/role/service/role.service';
import { routerTransition } from '@app/router.animations';
import { AgreementService } from '../../service/agreement.service';
import { AttachmentTypeService } from '../../../attachment-type/service/attachment-type.service';
import { BaseRateService } from '../../../base-rate/service/base-rate.service';
import { BillingFrequencyService } from '../../../billing-frequency/service/billing-frequency.service';
import { BillingMethodService } from '../../../billing-method/service/billing-method.service';
import { BillingcurrencyService } from '../../../billingcurrency/service/billingcurrency.service';
import { HourlyBillingService } from '../../../hourly-billing/service/hourly-billing.service';
import { PayorTypeService } from '../../../payor-type/service/payor-type.service';
import { SICCodeService } from '@app/layout/sic-code/service/sic-code.service';
import { ClientService } from '../../../client/service/client.service';
import { JwtService } from '@app/shared/services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-agreement',
  templateUrl: './view-agreement.component.html',
  styleUrls: ['./view-agreement.component.scss'],
  animations: [routerTransition()]
})

export class ViewAgreementComponent implements OnInit {
  @ViewChild('file', { static: false }) input: ElementRef<HTMLInputElement>;
  public addEditForm: FormGroup;
  userDetails: any;
  userId: any;
  isEditAccess: boolean = false;
  agreementId: any;
  isLoading: boolean = false;
  isLoadingAttachment: boolean = false;
  agreementData: any = {};
  searchType: any;
  clientDetailsEdit: boolean = false;
  isFeeArrangmentHourlyBilled: boolean;
  isFeeArrangmentFixedFee: boolean;
  isFeeArrangmentCappedFee: boolean;
  isFeeArrangmentFullContingency: boolean;
  isFeeArrangmentPartialContingency: boolean;
  isFeeArrangmentFeeCollar: boolean;
  discountTypeOther: boolean;
  isRateAdjustmentDuringTerm: boolean;
  isRateAdjustmentDuringTermReminder: boolean;

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
    public jwtService: JwtService,
    private _location: Location
    // public toastr: ToastrService
  ) {
    this.route.params.subscribe(params => {
      if (params.agreementId !== '' && params.agreementId != null) {
        this.agreementId = params.agreementId;
        this.getAggrement(this.agreementId);
       
      }
    });
    this.route.data.subscribe(data => {
      this.searchType = data?.search;
    })
  }

  ngOnInit() {
    this.isEditAccess = this.jwtService.checkAccess('agreements');
    

   }
  accessFileURL(filePath: any) {
    let data = {
      key: filePath
    }
    this.agreementService.getFileURL(data).subscribe(res => {
      window.open(res.file, '_blank');
    })
  }
  getAggrement(agreementId: string) {
    this.isLoading = true;
    this.agreementService.getAgreementById(agreementId).subscribe(response => {
      this.agreementData = response;
      this.feeArrangementType(this.agreementData.feeArrangementType);
      this.isLoading = false;
      this.cdr.detectChanges();
    }, (error) => {
      this.isLoading = false;
      alert("Record Not Found")
      this.router.navigate(['/dashboard/search']);
    });
  }

  editClientDetails(){
    this.clientDetailsEdit = !this.clientDetailsEdit;
  }
  goBack() {
    this._location.back();
  }
  editAgreement() {
    this.router.navigate(['/agreements/edit-agreement/' + this.agreementId]);
  }

  feeArrangementType(feeArrangementType) {
    if (feeArrangementType == "Hourly Billed") {
      this.isFeeArrangmentHourlyBilled = true;

      this.isFeeArrangmentFixedFee = false;
      this.isFeeArrangmentCappedFee = false;
      this.isFeeArrangmentFullContingency = false;
      this.isFeeArrangmentPartialContingency = false;
      this.isFeeArrangmentFeeCollar = false;
      this.discountTypeOther = false;
    } else if (feeArrangementType == "Fixed Fee") {
      this.isFeeArrangmentFixedFee = true;

      this.isFeeArrangmentHourlyBilled = false;
      this.isFeeArrangmentCappedFee = false;
      this.isFeeArrangmentFullContingency = false;
      this.isFeeArrangmentPartialContingency = false;
      this.isFeeArrangmentFeeCollar = false;

      this.isRateAdjustmentDuringTerm = false;
      this.isRateAdjustmentDuringTermReminder = false;
    } else if (feeArrangementType == "Capped Fee") {
      this.isFeeArrangmentCappedFee = true;

      this.isFeeArrangmentHourlyBilled = false;
      this.isFeeArrangmentFixedFee = false;
      this.isFeeArrangmentFullContingency = false;
      this.isFeeArrangmentPartialContingency = false;
      this.isFeeArrangmentFeeCollar = false;
      this.discountTypeOther = false;
    } else if (feeArrangementType == "Full Contingency") {
      this.isFeeArrangmentFullContingency = true;

      this.isFeeArrangmentHourlyBilled = false;
      this.isFeeArrangmentFixedFee = false;
      this.isFeeArrangmentCappedFee = false;
      this.isFeeArrangmentPartialContingency = false;
      this.isFeeArrangmentFeeCollar = false;

      this.isRateAdjustmentDuringTerm = false;
      this.isRateAdjustmentDuringTermReminder = false;
    } else if (feeArrangementType == "Partial Contingency") {
      this.isFeeArrangmentPartialContingency = true;

      this.isFeeArrangmentHourlyBilled = false;
      this.isFeeArrangmentFixedFee = false;
      this.isFeeArrangmentCappedFee = false;
      this.isFeeArrangmentFullContingency = false;
      this.isFeeArrangmentFeeCollar = false;

      this.isRateAdjustmentDuringTerm = false;
      this.isRateAdjustmentDuringTermReminder = false;
    } else if (feeArrangementType == "Fee Collar") {
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

  viewHistory(){
    this.router.navigate(['/agreements/history/', this.agreementId]);
  }

  getUrl(url){
    return encodeURIComponent(url);
  }
}
