import { Component, OnInit } from '@angular/core';
import { StationService} from '../../station.service';

@Component({
  selector: 'app-selector-country',
  templateUrl: './selector-country.component.html',
  styleUrls: ['./selector-country.component.css']
})
export class SelectorCountryComponent implements OnInit {
  selectedCountry = 'none';
  public countries;

  constructor(private stationService: StationService) { }



  ngOnInit() {
    this.stationService.getCountries()
      .subscribe( data => this.countries = data);
  }

}
