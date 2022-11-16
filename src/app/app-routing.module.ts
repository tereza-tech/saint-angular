import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgmDashboardComponent } from './views/ngm-dashboard/ngm-dashboard.component';

const routes: Routes = [

  { path: '', component: NgmDashboardComponent },
  /*{ path: '', component: MatDashboardComponent }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
