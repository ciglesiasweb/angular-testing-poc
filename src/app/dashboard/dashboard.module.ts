import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardCardComponent, DashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [ DashboardComponent ]

})
export class DashboardModule { }
