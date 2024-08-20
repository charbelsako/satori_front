import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditAreaOfLawComponent } from './components/add-edit-area-of-law/add-edit-area-of-law.component';
import { AreaOfLawComponent } from './components/area-of-law/area-of-law.component';

const routes: Routes = [
  {
    path:'',
    component: AreaOfLawComponent
  },
  {
    path:'add-area-of-law',
    component: AddEditAreaOfLawComponent
  },
  {
    path:'edit-area-of-law/:tempId',
    component: AddEditAreaOfLawComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaOfLawRoutingModule { }
