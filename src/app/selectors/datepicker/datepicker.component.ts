import { Component, OnInit } from '@angular/core';

/** @title Basic datepicker */

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  minDate = new Date(1800, 0, 1);
  maxDate = new Date();


  constructor() { }

  ngOnInit() {
  }

}
