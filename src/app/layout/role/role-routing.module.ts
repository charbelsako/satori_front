import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditRoleComponent } from './components/add-edit-role/add-edit-role.component';
import { RolesComponent } from './components/roles/roles.component';
import { ViewRoleComponent } from './components/view-role/view-role.component';

const routes: Routes = [
  {
    path: '',
    component: RolesComponent
  },
  {
    path: 'add-role',
    component: AddEditRoleComponent,
  },
  {
    path: 'edit-role/:roleId',
    component: AddEditRoleComponent,
  },
  {
    path: 'view-role/:roleId',
    component: ViewRoleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
