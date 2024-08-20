import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditBillingFrequencyComponent } from './components/add-edit-billing-frequency/add-edit-billing-frequency.component';
import { BillingFrequencyComponent } from './components/billing-frequency/billing-frequency.component';

const routes: Routes = [
  {
    path:'',
    component: BillingFrequencyComponent
  },
  {
    path:'add-billing-frequency',
    component: AddEditBillingFrequencyComponent
  },
  {
    path:'edit-billing-frequency/:tempId',
    component: AddEditBillingFrequencyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingFrequencyRoutingModule { }
