import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IDataAll} from '../../Interfaces/IDataAll';
import {DataAll} from '../../Interfaces/Classes/DataAll';
import {IStation} from '../../Interfaces/IStation';
import {ICountry} from '../../Interfaces/ICountry';
import {StationService} from '../../station.service';
import {Router} from '@angular/router';
import {MatDatepickerInputEvent, MatInputModule} from '@angular/material';
import {DataService} from '../../data.service';


/**
 * Component to Create a data entry
 * @author Florian Lang
 */
@Component({
  selector: 'app-datacreate',
  templateUrl: './datacreate.component.html',
  styleUrls: ['./datacreate.component.css']
})
export class DatacreateComponent implements OnInit {

  submitted = false;

  selectedCountry: ICountry;
  selectedStation: IStation;
  selectedDate: string;

  numberPatternDouble = '^[0-9]+\.[0-9]+$|^[0-9]+$';
  numberPatternInt = '^[0-9]+$';

  date1String = '';

  dataForm;
  // @ts-ignore
  dataEntry: IDataAll = new DataAll(0, '', 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, '',
    0, '', 0, '', 0, 0);

  constructor(private stationService: StationService,
              private router: Router,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.dataForm = new FormGroup({
      stationid: new FormControl(this.dataEntry.stationid),
      date: new FormControl(this.dataEntry.date),
      temperature: new FormControl(this.dataEntry.temperature, [Validators.required, Validators.pattern(this.numberPatternDouble)]),
      tempAttr: new FormControl(this.dataEntry.tempAttr, [Validators.required, Validators.pattern(this.numberPatternInt)]),
      dewpoint: new FormControl(this.dataEntry.dewpoint, [Validators.required, Validators.pattern(this.numberPatternDouble)]),
      dewAttr: new FormControl(this.dataEntry.dewAttr, [Validators.required, Validators.pattern(this.numberPatternInt)]),
      seaLevelPressure: new FormControl(this.dataEntry.seaLevelPressure,
        [Validators.required, Validators.pattern(this.numberPatternDouble)]),
      slpAttr: new FormControl(this.dataEntry.slpAttr, [Validators.required, Validators.pattern(this.numberPatternInt)]),
      stationPressure: new FormControl(this.dataEntry.stationPressure, [Validators.required, Validators.pattern(this.numberPatternDouble)]),
      stpAttr: new FormControl(this.dataEntry.stpAttr, [Validators.required, Validators.pattern(this.numberPatternInt)]),
      visibility: new FormControl(this.dataEntry.visibility, [Validators.required, Validators.pattern(this.numberPatternDouble)]),
      visibAttr: new FormControl(this.dataEntry.visibAttr, [Validators.required, Validators.pattern(this.numberPatternInt)]),
      windSpeed: new FormControl(this.dataEntry.windSpeed, [Validators.required, Validators.pattern(this.numberPatternDouble)]),
      wdspAtr: new FormControl(this.dataEntry.wdspAtr, [Validators.required, Validators.pattern(this.numberPatternInt)]),
      maxWindSpeed: new FormControl(this.dataEntry.gust, [Validators.required, Validators.pattern(this.numberPatternDouble)]),
      gust: new FormControl(this.dataEntry.gust, [Validators.required, Validators.pattern(this.numberPatternInt)]),
      maxTemperature: new FormControl(this.dataEntry.maxTemperature, [Validators.required, Validators.pattern(this.numberPatternDouble)]),
      maxAttr: new FormControl(this.dataEntry.maxAttr, Validators.required),
      minTemperature: new FormControl(this.dataEntry.minTemperature, [Validators.required, Validators.pattern(this.numberPatternDouble)]),
      minAttr: new FormControl(this.dataEntry.minAttr, Validators.required),
      precipitation: new FormControl(this.dataEntry.precipitation, [Validators.required, Validators.pattern(this.numberPatternDouble)]),
      prcpAttr: new FormControl(this.dataEntry.prcpAttr, Validators.required),
      snowDepth: new FormControl(this.dataEntry.snowDepth, [Validators.required, Validators.pattern(this.numberPatternDouble)]),
      frshtt: new FormControl(this.dataEntry.frshtt, [Validators.required, Validators.pattern(this.numberPatternDouble)]),
    });

  }



  changeDateHandler(event: MatDatepickerInputEvent<Date>) {
    this.date1String = '';
    this.date1String = this.date1String + event.value.getFullYear().toString() + '-';
    if (event.value.getMonth() < 9) {
      this.date1String = this.date1String + '0';
    }
    this.date1String = this.date1String + (event.value.getMonth() + 1).toString() + '-';
    if (event.value.getDate() < 10) {
      this.date1String = this.date1String + '0';
    }
    this.date1String = this.date1String + event.value.getDate().toString();
  }

  onSubmit(dataForm) {
    this.submitted = true;
    this.stationService.currentSelStation.subscribe(data => dataForm.stationid = data.id);
    dataForm.date = this.date1String; //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    console.log(dataForm);
    // save here
    this.dataService.postDataEntry(dataForm)
      .subscribe(data => console.log(data), error => console.log(error));
    console.log('The new DailyData Entry has been submitted');

    this.dataForm.reset();
  }

  gotoList() {
    // this.router.navigate(['/stations']);
  }

  get temperature() { return this.dataForm.get('temperature'); }
  get tempAttr() { return this.dataForm.get('tempAttr'); }
  get dewpoint() { return this.dataForm.get('dewpoint'); }
  get dewAttr() { return this.dataForm.get('dewAttr'); }
  get seaLevelPressure() { return this.dataForm.get('seaLevelPressure'); }
  get slpAttr() { return this.dataForm.get('slpAttr'); }
  get stationPressure() { return this.dataForm.get('stationPressure'); }
  get stpAttr() { return this.dataForm.get('stpAttr'); }
  get visibility() { return this.dataForm.get('visibility'); }
  get visibAttr() { return this.dataForm.get('visibAttr'); }
  get windSpeed() { return this.dataForm.get('windSpeed'); }
  get wdspAtr() { return this.dataForm.get('wdspAtr'); }
  get maxWindSpeed() { return this.dataForm.get('maxWindSpeed'); }
  get gust() { return this.dataForm.get('gust'); }
  get maxTemperature() { return this.dataForm.get('maxTemperature'); }
  get maxAttr() { return this.dataForm.get('maxAttr'); }
  get minTemperature() { return this.dataForm.get('minTemperature'); }
  get minAttr() { return this.dataForm.get('minAttr'); }
  get precipitation() { return this.dataForm.get('precipitation'); }
  get prcpAttr() { return this.dataForm.get('prcpAttr'); }
  get snowDepth() { return this.dataForm.get('snowDepth'); }
  get frshtt() { return this.dataForm.get('frshtt'); }

}
