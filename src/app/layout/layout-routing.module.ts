import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./dashboard/components/redirect/redirect.module').then((m) => m.RedirectModule) },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)},
            { path: 'employees', loadChildren: () => import('./staff/staff.module').then((m) => m.StaffModule)},
            { path: 'roles', loadChildren: () => import('./role/role.module').then((m) => m.RoleModule)},
            { path: 'matters', loadChildren: () => import('./matter/matter.module').then((m) => m.MatterModule)},
            { path: 'matter-name/:matterName', loadChildren: () => import('./matter-name/matter-name.module').then((m) => m.MatterNameModule)},
            { path: 'matter-id/:matterId', loadChildren: () => import('./matter-name/matter-name.module').then((m) => m.MatterNameModule)},
            { path: 'clients', loadChildren: () => import('./client/client.module').then((m) => m.ClientModule)},
            { path: 'agreements', loadChildren: () => import('./agreement/agreement.module').then((m) => m.AgreementModule)},
            { path: 'notifications', loadChildren: () => import('./template/template.module').then((m) => m.TemplateModule)},
            { path: 'data-mangement/billingcurrencies', loadChildren: () => import('./billingcurrency/billingcurrency.module').then((m) => m.BillingcurrencyModule)},
            { path: 'data-mangement/billing-frequencies', loadChildren: () => import('./billing-frequency/billing-frequency.module').then((m) => m.BillingFrequencyModule)},
            { path: 'data-mangement/billing-methods', loadChildren: () => import('./billing-method/billing-method.module').then((m) => m.BillingMethodModule)},
            { path: 'data-mangement/hourly-billings', loadChildren: () => import('./hourly-billing/hourly-billing.module').then((m) => m.HourlyBillingModule)},
            { path: 'data-mangement/base-rates', loadChildren: () => import('./base-rate/base-rate.module').then((m) => m.BaseRateModule)},
            { path: 'data-mangement/payor-types', loadChildren: () => import('./payor-type/payor-type.module').then((m) => m.PayorTypeModule)},
            { path: 'data-mangement/sic-codes', loadChildren: () => import('./sic-code/sic-code.module').then((m) => m.SICCodeModule)},
            { path: 'data-mangement/attachment-types', loadChildren: () => import('./attachment-type/attachment-type.module').then((m) => m.AttachmentTypeModule)},
            { path: 'data-mangement/area-of-laws', loadChildren: () => import('./area-of-law/area-of-law.module').then((m) => m.AreaOfLawModule)},
            { path: 'data-mangement/practice-groups', loadChildren: () => import('./practice-group/practice-group.module').then((m) => m.PracticeGroupModule)},
            { path: 'data-management', loadChildren: () => import('./data-management/data-management.module').then((m) => m.HourlyBillingModule)},
            { path: 'time-keepers', loadChildren: () => import('./time-keeper/time-keeper.module').then((m) => m.TimeKeeperModule)},
            { path: 'timecards', loadChildren: () => import('./timecard/timecard.module').then((m) => m.TimeCardModule)},
            { path: 'rates', loadChildren: () => import('./rates/rates.module').then((m) => m.RatesModule)},
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then((m) => m.ChartsModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then((m) => m.FormModule) },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then((m) => m.GridModule) },
            { path: 'components', loadChildren: () => import('./bs-component/bs-component.module').then((m) => m.BsComponentModule)},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
