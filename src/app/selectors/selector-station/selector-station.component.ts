import { Component, OnInit } from '@angular/core';
import {StationService} from '../../station.service';
import {ICountry} from '../../Interfaces/ICountry';
import {IStation} from '../../Interfaces/IStation';

/**
 * Class for the selection of the station. The data of this station is going to be visualized
 * @author Laurin Hecken
 */
@Component({
  selector: 'app-selector-station',
  templateUrl: './selector-station.component.html',
  styleUrls: ['./selector-station.component.css']
})
export class SelectorStationComponent implements OnInit {

  stations: IStation[] = [];

  selectedCountry: ICountry;

  selectedStation: IStation;

  inputDisabled = true;

  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.stationService.currentSelCountry.subscribe(data => this.selectedCountry = data);
  }

  giveStations() {
    this.stationService.getStations(this.selectedCountry.countryid)
      .subscribe(data => this.stations = data);
    this.inputDisabled = false;
  }

  changeSelectedStation(givenStation: IStation) {
    this.stationService.changeStation(givenStation);
  }

}
