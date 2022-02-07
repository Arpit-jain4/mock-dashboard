import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartComponent } from 'ng-apexcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart') chart: any;
  public chartOptions: any;
  constructor(private router: Router,) { 
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [5, 5, 5, 5, 4, 6, 6, 5, 6]
        }
      ],
      chart: {
        height: 150,
        type: "area",
        zoom: {
          enabled: false
        }
      },
      stroke: {
        curve: "smooth"
      },
    };

    this.chart = new ApexCharts(document.querySelector('#chart'), this.chartOptions)
  
  }

  ngOnInit(): void {
  }

  openDetails(title: any, data: any) {
    console.log(title, data)
    this.router.navigateByUrl(`/details?title=${title}`)
  }

}
