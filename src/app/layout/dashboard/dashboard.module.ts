import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent, NotificationComponent, TimelineComponent } from './components';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatSliderModule } from '@angular/material/slider';

import { MatCardModule } from '@angular/material/card';
import { ActivityComponent } from './components/activity/activity.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StaffService } from '../staff/service/staff.service';
import { PageHeaderModule } from '@app/shared/modules/page-header/page-header.module';
import { StatModule } from '@app/shared/modules/stat/stat.module';
import { NgChartsModule  as Ng2Charts } from 'ng2-charts';
import { SearchComponent } from './components/search/search.component';
import { AgreementModule } from '../agreement/agreement.module';
import { FilterComponent } from './components/filter/filter.component';
import { NgbdSortableHeader } from '@app/shared/directives';

@NgModule({
    imports: [CommonModule, 
        NgbCarouselModule, 
        NgbAlertModule, 
        DashboardRoutingModule, 
        StatModule, 
        MatSliderModule, 
        MatCardModule, 
        ReactiveFormsModule,
        PageHeaderModule,
        NgFor,
        DecimalPipe,
        FormsModule,
        AsyncPipe,
        NgbTypeaheadModule,
        NgbPaginationModule,
        NgIf,
        Ng2Charts,
        AgreementModule
    ],
    exports: [
        ActivityComponent,
        FilterComponent
      ],
    providers:[StaffService],
    declarations: [ NgbdSortableHeader,DashboardComponent, TimelineComponent, NotificationComponent, ChatComponent, ActivityComponent, SearchComponent, FilterComponent]
})
export class DashboardModule { }
