import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { AreaOfLawRoutingModule } from './area-of-law-routing.module';
import { AreaOfLawComponent } from './components/area-of-law/area-of-law.component';
import { AddEditAreaOfLawComponent } from './components/add-edit-area-of-law/add-edit-area-of-law.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '@app/shared';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AreaOfLawService } from './service/area-of-law.service';
import { NgbdSortableHeader } from '../../shared/directives';

@NgModule({
  declarations: [
    AreaOfLawComponent,
    AddEditAreaOfLawComponent
  ],
  imports: [
    CommonModule,
    AreaOfLawRoutingModule,
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
  providers: [NgbdSortableHeader, AreaOfLawService]
})
export class AreaOfLawModule { }
