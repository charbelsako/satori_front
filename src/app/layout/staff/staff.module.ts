import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { StaffMembersComponent } from './components/staff-members/staff-members.component';
import { PageHeaderModule } from '@app/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { StaffService } from './service/staff.service';
import { ViewMemberComponent } from './components/view-member/view-member.component';
import { NgbdSortableHeader } from './directives';


@NgModule({
  declarations: [
    AddMemberComponent,
    StaffMembersComponent,
    ViewMemberComponent,
    NgbdSortableHeader
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
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
  providers: [StaffService]
})
export class StaffModule { }
