import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { PayorTypeRoutingModule } from './payor-type-routing.module';
import { PayorTypeComponent } from './components/payor-type/payor-type.component';
import { AddEditPayorTypeComponent } from './components/add-edit-payor-type/add-edit-payor-type.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '@app/shared';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PayorTypeService } from './service/payor-type.service';
import { NgbdSortableHeader } from '../../shared/directives';
@NgModule({
  declarations: [
    PayorTypeComponent,
    AddEditPayorTypeComponent
  ],
  imports: [
    CommonModule,
    PayorTypeRoutingModule,
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
  providers: [NgbdSortableHeader, PayorTypeService]
})
export class PayorTypeModule { }
