import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPayorTypeComponent } from './components/add-edit-payor-type/add-edit-payor-type.component';
import { PayorTypeComponent } from './components/payor-type/payor-type.component';

const routes: Routes = [
  {
    path:'',
    component: PayorTypeComponent
  },
  {
    path:'add-payor-type',
    component: AddEditPayorTypeComponent
  },
  {
    path:'edit-payor-type/:tempId',
    component: AddEditPayorTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayorTypeRoutingModule { }
