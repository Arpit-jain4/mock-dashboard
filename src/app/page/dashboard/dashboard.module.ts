import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from 'src/app/material/material.module';
import * as ApexCharts from 'apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FilterSecComponent } from './component/filter-sec/filter-sec.component';
import { DataSecComponent } from './component/data-sec/data-sec.component';


@NgModule({
  declarations: [
    DashboardComponent,
    FilterSecComponent,
    DataSecComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
