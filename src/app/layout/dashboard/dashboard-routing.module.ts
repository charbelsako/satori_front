import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './components/activity/activity.component';
import { DashboardComponent } from './dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { ViewAgreementComponent } from '../agreement/components/view-agreement/view-agreement.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'billing/:billingMode',
        component: SearchComponent
    },
    {
        path: 'payor/:payorType',
        component: SearchComponent
    },
    {
        path: 'search/expire/:expireType',
        component: SearchComponent
    },
    {
        path: 'search/adjustment/:adjustmentType',
        component: SearchComponent
    },
    {
        path: 'staff/:actionType/:staffId/:date',
        component: SearchComponent
    },
    {
        path: 'activity',
        component: ActivityComponent
    },
    {
        path: "search/view-agreement/:agreementId",
        component: ViewAgreementComponent,
        data :{ search: true }
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
