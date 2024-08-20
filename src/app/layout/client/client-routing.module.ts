import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { ClientRosterComponent } from './components/client-roster/client-roster.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent
  },
  {
    path: 'roster/:keyword',
    component: ClientRosterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
