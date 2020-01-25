import {Component, Input, OnInit} from '@angular/core';
import { StationService} from '../../station.service';
import {ICountry} from '../../Interfaces/ICountry';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-selector-country',
  templateUrl: './selector-country.component.html',
  styleUrls: ['./selector-country.component.css']
})
export class SelectorCountryComponent implements OnInit {

  public countries = [];
  public selectedCountry: ICountry;


  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.stationService.getCountries()
      .subscribe(data => this.countries = data);

    this.stationService.currentSelCountry.subscribe(data => this.selectedCountry = data);
  }

  changeSelectedCountry() {
    this.stationService.changeCountry({countryid: 'USA', countryname: 'UnitedStatesOfAmerica'});
  }

}
