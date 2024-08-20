import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { BaseRateRoutingModule } from './base-rate-routing.module';
import { BaseRateComponent } from './components/base-rate/base-rate.component';
import { AddEditBaseRateComponent } from './components/add-edit-base-rate/add-edit-base-rate.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '@app/shared';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseRateService } from './service/base-rate.service';
import { NgbdSortableHeader } from '../../shared/directives';


@NgModule({
  declarations: [
    BaseRateComponent,
    AddEditBaseRateComponent
  ],
  imports: [
    CommonModule,
    BaseRateRoutingModule,
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
  providers: [NgbdSortableHeader, BaseRateService]
})
export class BaseRateModule { }
