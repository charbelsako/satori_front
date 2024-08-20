import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { BillingMethodRoutingModule } from './billing-method-routing.module';
import { BillingMethodComponent } from './components/billing-method/billing-method.component';
import { AddEditBillingMethodComponent } from './components/add-edit-billing-method/add-edit-billing-method.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '@app/shared';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BillingMethodService } from './service/billing-method.service';
import { NgbdSortableHeader } from '../../shared/directives';


@NgModule({
  declarations: [
    BillingMethodComponent,
    AddEditBillingMethodComponent
  ],
  imports: [
    CommonModule,
    BillingMethodRoutingModule,
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
  providers: [NgbdSortableHeader, BillingMethodService]
})
export class BillingMethodModule { }
