import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Basic datepicker */

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  minDate1 = new Date(1800, 0, 1);
  maxDate1 = new Date();

  date1 = new FormControl(new Date());

  minDate2 = new Date(1800, 0, 1);
  maxDate2 = new Date();




  constructor() { }

  ngOnInit() {
  }

}
