import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { BillingFrequencyRoutingModule } from './billing-frequency-routing.module';
import { BillingFrequencyComponent } from './components/billing-frequency/billing-frequency.component';
import { AddEditBillingFrequencyComponent } from './components/add-edit-billing-frequency/add-edit-billing-frequency.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '@app/shared';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BillingFrequencyService } from './service/billing-frequency.service';
import { NgbdSortableHeader } from '../../shared/directives';


@NgModule({
  declarations: [
    BillingFrequencyComponent,
    AddEditBillingFrequencyComponent
  ],
  imports: [
    CommonModule,
    BillingFrequencyRoutingModule,
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
  providers: [NgbdSortableHeader, BillingFrequencyService]
})
export class BillingFrequencyModule { }
