import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './components/client/client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '@app/shared';
import { ClientService } from './service/client.service';

import { AttachmentTypeService } from '../attachment-type/service/attachment-type.service';
import { BaseRateService } from '../base-rate/service/base-rate.service';
import { BillingFrequencyService } from '../billing-frequency/service/billing-frequency.service';
import { BillingMethodService } from '../billing-method/service/billing-method.service';
import { BillingcurrencyService } from '../billingcurrency/service/billingcurrency.service';
import { HourlyBillingService } from '../hourly-billing/service/hourly-billing.service';
import { PayorTypeService } from '../payor-type/service/payor-type.service';

import { NgxMaskModule } from 'ngx-mask';
import { StaffService } from '../staff/service/staff.service';
import { ClientRosterComponent } from './components/client-roster/client-roster.component';
import { NgbdSortableHeader } from './directives';


@NgModule({
  declarations: [
    ClientComponent,
    ClientRosterComponent,
    NgbdSortableHeader
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
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
  providers: [
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
export class ClientModule { }
