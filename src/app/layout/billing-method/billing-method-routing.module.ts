import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditBillingMethodComponent } from './components/add-edit-billing-method/add-edit-billing-method.component';
import { BillingMethodComponent } from './components/billing-method/billing-method.component';

const routes: Routes = [
  {
    path:'',
    component: BillingMethodComponent
  },
  {
    path:'add-billing-method',
    component: AddEditBillingMethodComponent
  },
  {
    path:'edit-billing-method/:tempId',
    component: AddEditBillingMethodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingMethodRoutingModule { }
