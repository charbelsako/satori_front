import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { BillingcurrencyRoutingModule } from './billingcurrency-routing.module';
import { BillingcurrencyComponent } from './components/billingcurrency/billingcurrency.component';
import { AddEditBillingcurrencyComponent } from './components/add-edit-billingcurrency/add-edit-billingcurrency.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '@app/shared';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BillingcurrencyService } from './service/billingcurrency.service';
import { NgbdSortableHeader } from '../../shared/directives';
@NgModule({
  declarations: [
    BillingcurrencyComponent,
    AddEditBillingcurrencyComponent
  ],
  imports: [
    CommonModule,
    BillingcurrencyRoutingModule,
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
  providers: [NgbdSortableHeader, BillingcurrencyService]
})
export class BillingcurrencyModule { }
