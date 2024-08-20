import { NgSwitch } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbdSortableHeader, SortDirection } from '@app/shared/directives';
import { routerTransition } from '@app/router.animations';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AgreementService } from '../../service/agreement.service';

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
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
  animations: [routerTransition()]
})
export class LogsComponent implements OnInit {
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  isActivity = true;
  public searchTerm: string = '';
  searchTermUpdate = new Subject<string>();
  sortedColumn!: string;
  sortedDirection!: string;

  public _state: State = {
    page: 1,
    limit: 20,
    totalPages: 1,
    totalResults: 0,
    searchTerm: '',
    sortColumn: 'createdAt',
    sortDirection: 'desc'
};
logs: any = [];
excludedKeys: any = [
  'client',
  'clientGroupId',
  'clientId',
  'clientSicId',
  'principalAttorneyId',
  'responsibleBillingManagerId',
]
isLoading: boolean = false;
  agreementId: any;
  constructor(
    public agreementService:AgreementService,
    public route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    public router: Router,
  ) {
    this.route.params.subscribe(params => {
      if (params.agreementId !== '' && params.agreementId != null) {
        this.agreementId = params.agreementId;
       
      }
    });

    this.searchTermUpdate
    .pipe(debounceTime(200), distinctUntilChanged())
    .subscribe(value => {
        this._state.searchTerm = value;
        this.getLogs(this._state);
    });

    this.route.data.subscribe(data => {
      this.searchTerm = data?.search;
    })
    
   }

  ngOnInit(): void {
    this.isLoading = true;
    this.getLogs(this._state);
  }

  getLogs(state: State) {
    this.agreementService.logs(state, this.agreementId).subscribe(response => {
      this.logs = response.results;
            this.isLoading = false;
            if(this.logs.length == 0){
                this.isActivity = false;
            }else{
                this.isActivity = true;
            }
            this.cdr.detectChanges();
            this.setState(response);
        }
    );
}
excludeValuesFromLogs(){
  
}

refreshLogs() {
    this.getLogs(this._state);
}

  setState(response: any) {
    this._state.page = response.page;
    this._state.limit = response.limit;
    this._state.totalPages = response.totalPages;
    this._state.totalResults = response.totalResults;
    this.cdr.detectChanges();
  }

  back(){
    this.router.navigate(['/dashboard/search/view-agreement/' + this.agreementId]);
  }

  transformTitle(key){
    const title = {
      'clientGroupName': 'Client Group',
      'clientName': 'Client',
      'matterName': 'Matter Name',
      'clientSicName': 'Client SIC Category',
      'principalAttorneyName': 'Responsible Partner',
      'responsibleBillingManagerName': 'Billing Manager',
      'startDate': 'Agreement Start Date (MM/DD/YYYY)',
      'expirationDate': 'Agreement Expiration Date (MM/DD/YYYY)',
      'feeArrangementDetails_reminderTimingDay': 'Reminder Timing',
      'feeArrangementType': 'Fee Arrangement Type',
      'feeArrangementDetails_baseRateType': 'Base Rate Type',
      'feeArrangementDetails_discount': 'Discount',
      'feeArrangementDetails_discountDetail': 'Discount Details',
      'feeArrangementDetails_discountDetailDescription': 'Discount Description',
      'feeArrangementDetails_rateCardDetail': 'Rate Card Detail',
      'feeArrangementDetails_cappedRateDetail': 'Capped Rate Detail',
      'feeArrangementDetails_feeCapAmount': 'Fee Cap Amount($)',
      'feeArrangementDetails_targetFee': 'Target Fee($)',
      'feeArrangementDetails_matterFixedFee': 'Matter Fixed Fee($)',
      'feeArrangementDetails_annualFixedFee': 'Annual Fixed Fee($)',
      'feeArrangementDetails_monthlyFixedFee': 'Monthly Fixed Fee($)',
      'feeArrangementDetails_portfolioFixedFee': 'Portfolio Fixed Fee($)',
      'feeArrangementDetails_milestoneFixedFee': 'Phase/Milestone Fixed Fee($)',
      'feeArrangementDetails_fixedFeeDetail': 'Fixed Fee Detail',
      'feeArrangementDetails_collarPercentage': 'Collar Percentage(%)',
      'feeArrangementDetails_rateAdjustmentDuringTerm': 'Rate Adjustment During Term',
      'feeArrangementDetails_adjustmentDate': 'Adjustment Date (MM/DD/YYYY)',
      'feeArrangementDetails_adjustmentDetails': 'Adjustment Details',
      'feeArrangementDetails_reminder': 'Adjustment Reminder',
      'feeArrangementDetails_reminderDate': 'Adjustment Reminder Date (MM/DD/YYYY)',
      'feeArrangementDetails_reminderEmailRecipients': 'Adjustment Reminder Email Recipients',
      'feeArrangementDetails_reminderEmailContent': 'Adjustment Reminder Email Content',
      'feeArrangementDetails_fullContingencyDetail': 'Full Contingency Detail',
      'feeArrangementDetails_partialContingencyDetail': 'Partial Contingency Detail',
      'billingFrequency': 'Billing Frequency',
      'billingFrequencyDetails': 'Billing Frequency Details',
      'billingCurrency': 'Billing Currency',
      'billingMethod': 'Billing Method',
      'billingMethodDetails': 'Billing Method Details',
      'payorType': 'Payor Type',
      'payorDetail': 'Payor Details',
      'preferredProvider': 'Preferred Provider',
    }

    return title[key];
  }


}
