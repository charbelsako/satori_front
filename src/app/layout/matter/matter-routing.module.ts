import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatterComponent } from './components/matter/matter.component';
import { MatterRosterComponent } from './components/matter-roster/matter-roster.component';

const routes: Routes = [
  {
    path: '',
    component: MatterComponent
  },
  {
    path: 'roster/:keyword',
    component: MatterRosterComponent
  },
  {
    path: 'matter-name/:matterName',
    component: MatterComponent,
  },
  {
    path: 'matter-id/:matterId',
    component: MatterComponent,
  },
  {
    path: 'client-name/:clientName',
    component: MatterComponent,
  },
  {
    path: 'client-id/:clientId',
    component: MatterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatterRoutingModule { }
