import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditBaseRateComponent } from './components/add-edit-base-rate/add-edit-base-rate.component';
import { BaseRateComponent } from './components/base-rate/base-rate.component';

const routes: Routes = [
  {
    path:'',
    component: BaseRateComponent
  },
  {
    path:'add-base-rate',
    component: AddEditBaseRateComponent
  },
  {
    path:'edit-base-rate/:tempId',
    component: AddEditBaseRateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRateRoutingModule { }
