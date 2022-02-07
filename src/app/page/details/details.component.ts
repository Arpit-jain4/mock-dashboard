import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  title: any;
  chart: any;
  chartOptions: any;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { 
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
    this.activatedRoute.queryParams.subscribe(params => {
      this.title = params['title'];
      console.log(this.title)
    });
  }

  ngOnInit(): void {
  }
  
  goBack() {
    this.router.navigate(['dashboard'])
  }

}
