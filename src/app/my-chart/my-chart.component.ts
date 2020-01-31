import { Component, OnInit } from '@angular/core';
import {StationService} from '../station.service';
import {IDataAll} from '../Interfaces/IDataAll';
import {IStation} from '../Interfaces/IStation';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {

  selectedStation: IStation;
  selectedMinDate: string;
  selectedMaxDate: string;

  public myChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public myChartLabels = ['1', '2', '3', '4'];

  public givenData: IDataAll[];

  private myTempSet: number[] = [];
  private myPrecSet: number[] = [];

  public myChartData = [
    {data: this.myTempSet, label: 'Temp'},
    {data: this.myPrecSet, label: 'Prec'}
  ];

  public myChartLegend = true;

  public myChartType = 'bar';

  getDataFromServer() {
    this.stationService.getData('?stationidpassed=' +
      this.selectedStation.id +
      '&frompoint=' +
      this.selectedMinDate +
      '&topoint=' +
      this.selectedMaxDate).subscribe(data => this.givenData = data);
    console.log('?stationidpassed=' +
      this.selectedStation.id +
      '&frompoint=' +
      this.selectedMinDate +
      '&topoint=' +
      this.selectedMaxDate);
  }

  buttonHandler() {
    while (this.myTempSet.length > 0) {
      this.myTempSet.pop();
    }
    while (this.myPrecSet.length > 0) {
      this.myPrecSet.pop();
    }
    for (let i = 0; i < this.givenData.length; i++) {
      this.myTempSet.push(this.givenData[i].temperature);
      this.myPrecSet.push(this.givenData[i].precipitation); }
  }



  constructor(private stationService: StationService) { }

  ngOnInit() {
    //this.stationService.getFakeData('FakeData.json').subscribe(data => this.givenData = data);

    this.stationService.currentSelStation.subscribe(data => this.selectedStation = data);
    this.stationService.currentSelMinDate.subscribe(data => this.selectedMinDate = data);
    this.stationService.currentSelMaxDate.subscribe(data => this.selectedMaxDate = data);
  }

}
