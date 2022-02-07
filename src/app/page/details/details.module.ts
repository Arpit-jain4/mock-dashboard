import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { MaterialModule } from 'src/app/material/material.module';
import { GraphComponent } from './graph/graph.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    DetailsComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MaterialModule,
    NgApexchartsModule

  ]
})
export class DetailsModule { }
