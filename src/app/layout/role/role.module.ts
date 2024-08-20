import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { AddEditRoleComponent } from './components/add-edit-role/add-edit-role.component';
import { RolesComponent } from './components/roles/roles.component';
import { RoleService } from './service/role.service';
import { NgbdSortableHeader } from '../../shared/directives/sortable.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '@app/shared';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewRoleComponent } from './components/view-role/view-role.component';


@NgModule({
  declarations: [
    AddEditRoleComponent,
    RolesComponent,
    ViewRoleComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    ReactiveFormsModule, 
    PageHeaderModule,
    NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbPaginationModule,
		NgIf,
  ],
  providers: [NgbdSortableHeader, RoleService]
})
export class RoleModule { }
