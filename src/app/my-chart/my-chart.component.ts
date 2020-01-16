import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {

  public myChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public myChartLabels = ['a', 'b', 'c'];

  public myChartData = [
    {data: [1, 2, 3], label: 'Series A'},
    {data: [2, 4, 6], label: 'Series B'}
  ];

  public myChartLegend = true;

  public myChartType = 'line';





  constructor() { }

  ngOnInit() {
  }

}
