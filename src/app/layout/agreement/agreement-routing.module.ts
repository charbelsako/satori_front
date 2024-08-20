import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementsComponent } from './components/agreements/agreements.component';
import { ViewAgreementComponent } from './components/view-agreement/view-agreement.component';
import { AddEditAgreementComponent } from './components/add-edit-agreement/add-edit-agreement.component';
import { ActivityComponent } from '../dashboard/components/activity/activity.component';
import { LogsComponent } from './components/logs/logs.component';
const routes: Routes = [
  {
    path:'',
    component: AgreementsComponent
  },
  {
    path:'add-agreement',
    component: AddEditAgreementComponent
  },
  {
    path: "view-agreement/:agreementId",
    component: ViewAgreementComponent
  },
  {
    path:'edit-agreement/:agreementId',
    component:AddEditAgreementComponent
  },
  {
    path:'history/:agreementId',
    component:LogsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementRoutingModule { }
