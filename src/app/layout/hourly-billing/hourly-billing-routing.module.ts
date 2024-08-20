import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditHourlyBillingComponent } from './components/add-edit-hourly-billing/add-edit-hourly-billing.component';
import { HourlyBillingComponent } from './components/hourly-billing/hourly-billing.component';

const routes: Routes = [
  {
    path:'',
    component: HourlyBillingComponent
  },
  {
    path:'add-hourly-billing',
    component: AddEditHourlyBillingComponent
  },
  {
    path:'edit-hourly-billing/:tempId',
    component: AddEditHourlyBillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HourlyBillingRoutingModule { }
