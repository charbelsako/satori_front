import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatterComponent } from './components/matter-name/matter-name.component';

const routes: Routes = [
  {
    path: '',
    component: MatterComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatterRoutingModule { }
