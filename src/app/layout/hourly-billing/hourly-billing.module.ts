import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { HourlyBillingRoutingModule } from './hourly-billing-routing.module';
import { HourlyBillingComponent } from './components/hourly-billing/hourly-billing.component';
import { AddEditHourlyBillingComponent } from './components/add-edit-hourly-billing/add-edit-hourly-billing.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '@app/shared';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HourlyBillingService } from './service/hourly-billing.service';
import { NgbdSortableHeader } from '../../shared/directives';


@NgModule({
  declarations: [
    HourlyBillingComponent,
    AddEditHourlyBillingComponent
  ],
  imports: [
    CommonModule,
    HourlyBillingRoutingModule,
    ReactiveFormsModule, 
    PageHeaderModule,
    NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbPaginationModule,
		NgIf
  ],
  providers: [NgbdSortableHeader, HourlyBillingService]
})
export class HourlyBillingModule { }
