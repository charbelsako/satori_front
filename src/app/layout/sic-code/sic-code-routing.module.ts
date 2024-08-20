import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditSICCodeComponent } from './components/add-edit-sic-code/add-edit-sic-code.component';
import { SICCodeComponent } from './components/sic-code/sic-code.component';

const routes: Routes = [
  {
    path:'',
    component: SICCodeComponent
  },
  {
    path:'add-sic-code',
    component: AddEditSICCodeComponent
  },
  {
    path:'edit-sic-code/:tempId',
    component: AddEditSICCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SICCodeRoutingModule { }
