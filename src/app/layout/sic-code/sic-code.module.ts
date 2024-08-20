import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { SICCodeRoutingModule } from './sic-code-routing.module';
import { SICCodeComponent } from './components/sic-code/sic-code.component';
import { AddEditSICCodeComponent } from './components/add-edit-sic-code/add-edit-sic-code.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '@app/shared';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SICCodeService } from './service/sic-code.service';
import { NgbdSortableHeader } from '../../shared/directives';


@NgModule({
  declarations: [
    SICCodeComponent,
    AddEditSICCodeComponent
  ],
  imports: [
    CommonModule,
    SICCodeRoutingModule,
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
  providers: [NgbdSortableHeader, SICCodeService]
})
export class SICCodeModule { }
