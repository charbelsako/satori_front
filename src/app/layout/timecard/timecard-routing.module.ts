import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeCardComponent } from './components/timecard/timecard.component';
import { TimecardDetailsComponent } from './components/timecard-details/timecard-details.component';

const routes: Routes = [
  {
    path: '',
    component: TimeCardComponent
  },
  {
    path: 'view/:timecardId',
    component: TimecardDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeCardRoutingModule { }
