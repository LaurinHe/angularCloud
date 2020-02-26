import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material';
import {StationService} from '../../station.service';

/**
 * Class for the selection of the min and max date. The data between the two dates is going to be visualized
 * @author Laurin Hecken
 */
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  minDate1 = new Date(1800, 0, 1);
  maxDate1 = new Date();

  date1 = new FormControl(new Date());
  date2 = new FormControl(new Date());

  minDate2 = new Date(1800, 0, 1);
  maxDate2 = new Date();

  date1String = '';
  date2String = '';

  /**
   * gets the event from the datepicker
   * converts the event to the string format that is needed
   * @author Laurin Hecken
   */
  changeDateHandler1(event: MatDatepickerInputEvent<Date>) {
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
    this.changeMinDate(this.date1String);
  }

  changeDateHandler2(event: MatDatepickerInputEvent<Date>) {
    this.date2String = '';
    this.date2String = this.date2String + event.value.getFullYear().toString() + '-';
    if (event.value.getMonth() < 9) {
      this.date2String = this.date2String + '0';
    }
    this.date2String = this.date2String + (event.value.getMonth() + 1).toString() + '-';
    if (event.value.getDate() < 10) {
      this.date2String = this.date2String + '0';
    }
    this.date2String = this.date2String + event.value.getDate().toString();
    this.changeMaxDate(this.date2String);
  }


  changeMinDate(givenMinDate: string) {
    this.stationService.changeMinDate(givenMinDate);
  }
  changeMaxDate(givenMaxDate: string) {
    this.stationService.changeMaxDate(givenMaxDate);
  }


  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.stationService.currentSelMinDate.subscribe(data => this.date1String = data);
    this.stationService.currentSelMaxDate.subscribe(data => this.date2String = data);
  }

}
