import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditAttachmentTypeComponent } from './components/add-edit-attachment-type/add-edit-attachment-type.component';
import { AttachmentTypeComponent } from './components/attachment-type/attachment-type.component';

const routes: Routes = [
  {
    path:'',
    component: AttachmentTypeComponent
  },
  {
    path:'add-attachment-type',
    component: AddEditAttachmentTypeComponent
  },
  {
    path:'edit-attachment-type/:tempId',
    component: AddEditAttachmentTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttachmentTypeRoutingModule { }
