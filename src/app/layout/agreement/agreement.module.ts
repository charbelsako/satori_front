import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { AgreementRoutingModule } from './agreement-routing.module';
import { AgreementsComponent } from './components/agreements/agreements.component';
import { FilterComponent } from './components/filter/filter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '@app/shared';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { ViewAgreementComponent } from './components/view-agreement/view-agreement.component';
import { AddEditAgreementComponent } from './components/add-edit-agreement/add-edit-agreement.component';
import { AttachmentTypeService } from '../attachment-type/service/attachment-type.service';
import { BaseRateService } from '../base-rate/service/base-rate.service';
import { BillingFrequencyService } from '../billing-frequency/service/billing-frequency.service';
import { BillingMethodService } from '../billing-method/service/billing-method.service';
import { BillingcurrencyService } from '../billingcurrency/service/billingcurrency.service';
import { ClientService } from '../client/service/client.service';
import { HourlyBillingService } from '../hourly-billing/service/hourly-billing.service';
import { PayorTypeService } from '../payor-type/service/payor-type.service';
import { NgbdSortableHeader } from '../../shared/directives';
import { StaffService } from '../staff/service/staff.service';
import { LogsComponent } from './components/logs/logs.component';

@NgModule({
  declarations: [
    AgreementsComponent,
    FilterComponent,
    ViewAgreementComponent,
    AddEditAgreementComponent,
    LogsComponent
  ],
  imports: [
    CommonModule,
    AgreementRoutingModule,
    ReactiveFormsModule, 
    PageHeaderModule,
    NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbPaginationModule,
		NgIf,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    ViewAgreementComponent,
    FilterComponent
  ],
  providers: [
    NgbdSortableHeader, 
    ClientService,
    AttachmentTypeService,
    BaseRateService,
    BillingFrequencyService,
    BillingMethodService,
    BillingcurrencyService,
    HourlyBillingService,
    PayorTypeService,
    StaffService
  ]
})
export class AgreementModule { }
