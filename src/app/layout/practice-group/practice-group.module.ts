import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { PracticeGroupRoutingModule } from './practice-group-routing.module';
import { PracticeGroupComponent } from './components/practice-group/practice-group.component';
import { AddEditPracticeGroupComponent } from './components/add-edit-practice-group/add-edit-practice-group.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '@app/shared';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PracticeGroupService } from './service/practice-group.service';
import { NgbdSortableHeader } from '../../shared/directives';
import { AreaOfLawService } from '../area-of-law/service/area-of-law.service';


@NgModule({
  declarations: [
    PracticeGroupComponent,
    AddEditPracticeGroupComponent
  ],
  imports: [
    CommonModule,
    PracticeGroupRoutingModule,
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
  providers: [NgbdSortableHeader, PracticeGroupService, AreaOfLawService]
})
export class PracticeGroupModule { }
