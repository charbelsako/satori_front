import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './components/template/template.component';
import { AddEditTemplateComponent } from './components/add-edit-template/add-edit-template.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '@app/shared';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateService } from './service/template.service';
import { NgbdSortableHeader } from '../../shared/directives';
import { ViewTemplateComponent } from './components/view-template/view-template.component';


@NgModule({
  declarations: [
    TemplateComponent,
    AddEditTemplateComponent,
    ViewTemplateComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    ReactiveFormsModule, 
    PageHeaderModule,
    NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbPaginationModule,
		NgIf,
    CKEditorModule
  ],
  providers: [NgbdSortableHeader, TemplateService]
})
export class TemplateModule { }
