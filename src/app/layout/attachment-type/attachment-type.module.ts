import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { AttachmentTypeRoutingModule } from './attachment-type-routing.module';
import { AttachmentTypeComponent } from './components/attachment-type/attachment-type.component';
import { AddEditAttachmentTypeComponent } from './components/add-edit-attachment-type/add-edit-attachment-type.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '@app/shared';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AttachmentTypeService } from './service/attachment-type.service';
import { NgbdSortableHeader } from '../../shared/directives';


@NgModule({
  declarations: [
    AttachmentTypeComponent,
    AddEditAttachmentTypeComponent
  ],
  imports: [
    CommonModule,
    AttachmentTypeRoutingModule,
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
  providers: [NgbdSortableHeader, AttachmentTypeService]
})
export class AttachmentTypeModule { }
