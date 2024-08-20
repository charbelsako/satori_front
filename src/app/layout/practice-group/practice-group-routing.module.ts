import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPracticeGroupComponent } from './components/add-edit-practice-group/add-edit-practice-group.component';
import { PracticeGroupComponent } from './components/practice-group/practice-group.component';

const routes: Routes = [
  {
    path:'',
    component: PracticeGroupComponent
  },
  {
    path:'add-practice-group',
    component: AddEditPracticeGroupComponent
  },
  {
    path:'edit-practice-group/:tempId',
    component: AddEditPracticeGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeGroupRoutingModule { }
