import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../data.service';
import * as Chart from 'chart.js';
import {Router} from '@angular/router';
import {StationService} from '../../station.service';
import {IDataAll} from '../../Interfaces/IDataAll';
import {IClimateDiagEntry} from '../../Interfaces/IClimateDiagEntry';
import {IStation} from '../../Interfaces/IStation';

/**
 * This class is for getting data for the climate diagram and displaying it
 * @author Florian Lang
 */
@Component({
  selector: 'app-climatediag',
  templateUrl: './climatediag.component.html',
  styleUrls: ['./climatediag.component.css']
})
export class ClimatediagComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router,
              private stationService: StationService) { }

  years: number[] = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];

  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'November', 'December'];

  myTempAvgSet: number[] = [];
  myPrecSet: number[] = [];

  selectedYear: number;
  selectedStation: IStation;

  public barChartData = [
    {data: this.myTempAvgSet, type: 'line', label: 'Temperature avg (°C)'},
    {data: this.myPrecSet, label: 'Precipitation (mm)'}
  ];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = this.months; // ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public givenData: IClimateDiagEntry[] = [];

  // @ts-ignore
  // @ViewChild( BaseChartDirective ) chart: BaseChartDirective;

  ngOnInit() {
    this.stationService.currentSelStation.subscribe(data => this.selectedStation = data);
  }

  /**
   * gets data from the Backend
   */
  getDataFromServer() {

   /* this.myTempAvgSet = [];
    this.myPrecSet = [];*/

    this.dataService.getClimateDiagEntry(this.selectedStation.id, this.selectedYear)
      .subscribe(data => {
        this.givenData = data;

        while (this.myPrecSet.length > 0) {
          this.myPrecSet.pop();
        }
        while (this.myTempAvgSet.length > 0) {
          this.myTempAvgSet.pop();
        }

        for (let i = 0; i < this.givenData.length; i++) {
          // this.myChartLabels.push(this.givenData[i].date);
          this.myTempAvgSet.push(Number(((this.givenData[i].temperatureavg - 32) * (5 / 9)).toFixed(2)));

          if (this.givenData[i].precipitation !== 99.99) {
            this.myPrecSet.push(Number((this.givenData[i].precipitation * 2.54).toFixed(2)));
          }
        }

        this.barChartData = [
          {data: this.myTempAvgSet, type: 'line', label: 'Temperature avg (°C)'},
          {data: this.myPrecSet, label: 'Precipitation (mm)'}
        ];

      });
    console.log('fetching data for station: ' + this.selectedStation.name + ' and year: ' + this.selectedYear);
    // this.buttonHandler();
  }


  buttonHandler() {

    /*while (this.myPrecSet.length > 0) {
      this.myPrecSet.pop();
    }
    while (this.myTempAvgSet.length > 0) {
      this.myTempAvgSet.pop();
    }*/

     for (let i = 0; i < this.givenData.length; i++) {
      // this.myChartLabels.push(this.givenData[i].date);
      this.myTempAvgSet.push(Number(((this.givenData[i].temperatureavg - 32) * (5 / 9)).toFixed(2)));

      if (this.givenData[i].precipitation !== 99.99) {
        this.myPrecSet.push(Number((this.givenData[i].precipitation * 2.54).toFixed(2)));
      }
    }

  }




}
