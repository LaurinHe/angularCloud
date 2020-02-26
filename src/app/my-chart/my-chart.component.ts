import { Component, OnInit } from '@angular/core';
import {StationService} from '../station.service';
import {IDataAll} from '../Interfaces/IDataAll';
import {IStation} from '../Interfaces/IStation';
import {FormControl} from '@angular/forms';

/**
 * Class for the chart. The data from the db is visualized here
 * @author Laurin Hecken
 */
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
    {data: this.myTempSet, label: 'Temperature [°C]'},
    {data: this.myPrecSet, label: 'Precipitation [mm]'},
    {data: this.myWindSet, label: 'Wind speed [m/s]'},
    {data: this.myMinTemp, label: 'Min temperature [°C]'},
    {data: this.myMaxTemp, label: 'Max temperature [°C]'},
    {data: this.myStatPres, label: 'Station pressure [bar]'}
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

      this.myTempSet.push(Number(((this.givenData[i].temperature - 32) * (5 / 9)).toFixed(2)));

      if (this.givenData[i].precipitation !== 99.99) {
        this.myPrecSet.push(Number((this.givenData[i].precipitation * 2.54).toFixed(2)));
      }
      this.myWindSet.push(Number((this.givenData[i].windSpeed * 0.51444).toFixed(2)));
      this.myMinTemp.push(Number(((this.givenData[i].minTemperature - 32) * (5 / 9)).toFixed(2)));
      this.myMaxTemp.push(Number(((this.givenData[i].maxTemperature - 32) * (5 / 9)).toFixed(2)));
      this.myStatPres.push(Number((this.givenData[i].stationPressure / 1000).toFixed(2)));
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
