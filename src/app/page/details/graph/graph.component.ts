import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  chart: any;
  chartOptions: any;
  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [5, 5, 5, 5, 4, 6, 6, 5, 6]
        }
      ],
      chart: {
        height: 400,
        type: "line",
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

}
