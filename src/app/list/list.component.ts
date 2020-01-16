import { Component, OnInit } from '@angular/core';
import {StationService} from '../station.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public stations = [];

  public selectedCity;
  public selectedData;

  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.stationService.getStations()
      .subscribe( data => this.stations = data);
  }

}
