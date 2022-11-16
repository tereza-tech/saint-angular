import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgmDashboardRoutingModule } from './ngm-dashboard-routing.module';
import { NgmDashboardComponent } from './ngm-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    NgmDashboardRoutingModule
  ],
  declarations: [NgmDashboardComponent]
})
export class NgmDashboardModule { }
