import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-climatediag',
  templateUrl: './climatediag.component.html',
  styleUrls: ['./climatediag.component.css']
})
export class ClimatediagComponent implements OnInit {

  constructor(private dataService: DataService) { }

  years: number[] = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];

  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'November', 'December'];

  ngOnInit() {
  }




}
