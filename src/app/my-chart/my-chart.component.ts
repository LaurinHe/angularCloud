import { Component, OnInit } from '@angular/core';
import {StationService} from '../station.service';
import {IDataAll} from '../Interfaces/IDataAll';
import {IStation} from '../Interfaces/IStation';
import {FormControl} from '@angular/forms';

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

  public myChartLabels = [];

  public givenData: IDataAll[] = [];

  private myTempSet: number[] = [];
  private myPrecSet: number[] = [];
  private myWindSet: number[] = [];
  private myMinTemp: number[] = [];
  private myMaxTemp: number[] = [];
  private myStatPres: number[] = [];

  myChartDataSets = [
    {data: this.myTempSet, label: 'Temperature'},
    {data: this.myPrecSet, label: 'Precipitation'},
    {data: this.myWindSet, label: 'Wind speed'},
    {data: this.myMinTemp, label: 'Min temperature'},
    {data: this.myMaxTemp, label: 'Max temperature'},
    {data: this.myStatPres, label: 'Station pressure'}
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
    this.buttonHandler();
  }

  buttonHandler() {

    while (this.myChartLabels.length > 0) {
      this.myChartLabels.pop();
    }

    while (this.myTempSet.length > 0) {
      this.myTempSet.pop();
    }
    while (this.myPrecSet.length > 0) {
      this.myPrecSet.pop();
    }
    while (this.myWindSet.length > 0) {
      this.myWindSet.pop();
    }
    while (this.myMinTemp.length > 0) {
      this.myMinTemp.pop();
    }
    while (this.myMaxTemp.length > 0) {
      this.myMaxTemp.pop();
    }
    while (this.myStatPres.length > 0) {
      this.myStatPres.pop();
    }
    for (let i = 0; i < this.givenData.length; i++) {
      this.myChartLabels.push(this.givenData[i].date);

      this.myTempSet.push((this.givenData[i].temperature - 32) * (5 / 9));

      if (this.givenData[i].precipitation !== 99.99){
        this.myPrecSet.push(this.givenData[i].precipitation);
      }
      this.myWindSet.push(this.givenData[i].windSpeed);
      this.myMinTemp.push(this.givenData[i].minTemperature);
      this.myMaxTemp.push(this.givenData[i].maxTemperature);
      this.myStatPres.push(this.givenData[i].stationPressure / 100);
    }

  }



  constructor(private stationService: StationService) { }

  ngOnInit() {
    // this.stationService.getFakeData('FakeData.json').subscribe(data => this.givenData = data);

    this.stationService.currentSelStation.subscribe(data => this.selectedStation = data);
    this.stationService.currentSelMinDate.subscribe(data => this.selectedMinDate = data);
    this.stationService.currentSelMaxDate.subscribe(data => this.selectedMaxDate = data);
  }

}
