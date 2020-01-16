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

  public myChartLabels = ['Day'];

  public myChartData = [
    {data: [24], label: 'Temperature'},
    {data: [2], label: 'Precipitation'},
    {data: [0.5], label: 'Snow'},
    {data: [28.5], label: 'Wind'}
  ];

  public myChartLegend = true;

  public myChartType = 'bar';





  constructor() { }

  ngOnInit() {
  }

};
