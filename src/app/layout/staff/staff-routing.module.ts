import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffMembersComponent } from './components';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { ViewMemberComponent } from './components/view-member/view-member.component';

const routes: Routes = [
  {
    path: '',
    component: StaffMembersComponent
  },
  {
    path:'add-employee',
    component: AddMemberComponent
  },
  {
    path: 'edit-employee/:userId',
    component: AddMemberComponent
  },
  {
    path: 'view-employee/:userId',
    component: ViewMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
