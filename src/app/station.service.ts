import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStation} from './Interfaces/IStation';
import {ICountry} from './Interfaces/ICountry';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private baseUrl = 'http://localhost8080';

  // private selectedCountry = 'GER';


  private countryUrlFAKE = '/assets/data/fakeStations.json';


  private stationUrlBase = this.baseUrl.concat('/api/contstat/stations/withcountryname/?');

  // private stationUrl = this.stationUrlBase.concat(this.selectedCountry);

  private countryUrl = this.baseUrl.concat('/api/countries/list/');

  constructor(private http: HttpClient) { }

  getStations(): Observable<IStation[]> {
    return this.http.get<IStation[]>(this.baseUrl);
  }

  getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.countryUrlFAKE);
  }
}




