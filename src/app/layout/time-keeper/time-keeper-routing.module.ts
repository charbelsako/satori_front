import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeKeeperComponent } from './components/time-keeper/time-keeper.component';

const routes: Routes = [
  {
    path: '',
    component: TimeKeeperComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeKeeperRoutingModule { }
