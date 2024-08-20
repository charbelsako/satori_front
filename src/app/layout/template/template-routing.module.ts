import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditTemplateComponent } from './components/add-edit-template/add-edit-template.component';
import { TemplateComponent } from './components/template/template.component';
import { ViewTemplateComponent } from './components/view-template/view-template.component';

const routes: Routes = [
  {
    path:'',
    component: TemplateComponent
  },
  {
    path:'add-notification',
    component: AddEditTemplateComponent
  },
  {
    path:'edit-notification/:tempId',
    component: AddEditTemplateComponent
  },
  {
    path:'view-notification/:tempId',
    component: ViewTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
