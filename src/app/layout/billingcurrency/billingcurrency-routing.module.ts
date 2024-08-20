import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditBillingcurrencyComponent } from './components/add-edit-billingcurrency/add-edit-billingcurrency.component';
import { BillingcurrencyComponent } from './components/billingcurrency/billingcurrency.component';

const routes: Routes = [
  {
    path:'',
    component: BillingcurrencyComponent
  },
  {
    path:'add-billingcurrency',
    component: AddEditBillingcurrencyComponent
  },
  {
    path:'edit-billingcurrency/:tempId',
    component: AddEditBillingcurrencyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingcurrencyRoutingModule { }
