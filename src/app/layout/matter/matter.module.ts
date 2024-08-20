import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { MatterRoutingModule } from './matter-routing.module';
import { MatterComponent } from './components/matter/matter.component';
import { ViewMatterComponent } from './components/view-matter/view-matter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule, NgbPaginationModule,NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '@app/shared';
import { MatterService } from './service/matter.service';
import { NgxMaskModule } from 'ngx-mask';
import { MatterRosterComponent } from './components/matter-roster/matter-roster.component';
import { MatterFilterComponent } from './components/matter-filter/matter-filter.component';
import { StaffService } from '../staff/service/staff.service';
import { NgbdSortableHeader } from './directives';

@NgModule({
  declarations: [
    MatterComponent,
    MatterRosterComponent,
    ViewMatterComponent,
    MatterFilterComponent,
    NgbdSortableHeader
  ],
  imports: [
    CommonModule,
    MatterRoutingModule,
    ReactiveFormsModule, 
    PageHeaderModule,
    NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbPaginationModule,
    NgbDropdownModule,
		NgIf,
    NgxMaskModule.forRoot()
  ],
  providers: [MatterService, StaffService, NgbdSortableHeader]
})
export class MatterModule { }
