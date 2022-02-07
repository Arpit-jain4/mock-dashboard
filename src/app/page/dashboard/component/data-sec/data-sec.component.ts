import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-data-sec',
  templateUrl: './data-sec.component.html',
  styleUrls: ['./data-sec.component.scss']
})
export class DataSecComponent implements OnInit, OnChanges {
  @Input('title') title: string;
  @Input('count') count: number;
  @Input('isChart') isChart: boolean;
  @Input('chartOptions') chartOptions: any;
  constructor() { 
    this.title = '';
    this.count = 0;
    this.isChart = false;
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes['title'] && changes['title']['currentValue']) {
      this.title = changes['title']['currentValue'];
    }
    if(changes && changes['count'] && changes['count']['currentValue']) {
      this.title = changes['count']['currentValue'];
    }
    if(changes && changes['isChart'] ) {
      this.title = changes['isChart']['currentValue'];
    }
    if(this.isChart && changes &&  changes['chartOptions']['currentValue']) {
      this.title = changes['chartOptions']['currentValue'];
    }
  }

  ngOnInit(): void {
  }

}
