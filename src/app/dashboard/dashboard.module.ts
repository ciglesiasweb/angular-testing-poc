import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardTitleComponent } from './dashboard-title/dashboard-title.component';

@NgModule({
  declarations: [DashboardCardComponent, DashboardComponent, DashboardTitleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [ DashboardComponent ]

})
export class DashboardModule { }
