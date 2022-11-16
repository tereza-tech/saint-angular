import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgmDashboardComponent } from './ngm-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: NgmDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgmDashboardRoutingModule { }
