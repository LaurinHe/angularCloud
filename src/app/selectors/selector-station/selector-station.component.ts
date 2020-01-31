import { Component, OnInit } from '@angular/core';
import {StationService} from '../../station.service';
import {ICountry} from '../../Interfaces/ICountry';
import {IStation} from '../../Interfaces/IStation';

@Component({
  selector: 'app-selector-station',
  templateUrl: './selector-station.component.html',
  styleUrls: ['./selector-station.component.css']
})
export class SelectorStationComponent implements OnInit {

  stations = [];

  selectedCountry: ICountry;

  selectedStation: IStation;

  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.stationService.currentSelCountry.subscribe(data => this.selectedCountry = data);
  }

  giveStations() {
    this.stationService.getStations(this.selectedCountry.countryid)
      .subscribe(data => this.stations = data);
  }

  changeSelectedStation(givenStation: IStation) {
    this.stationService.changeStation(givenStation);
  }

}
