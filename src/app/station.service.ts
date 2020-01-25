import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStation} from './Interfaces/IStation';
import {ICountry} from './Interfaces/ICountry';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private baseUrl = 'http://localhost:8080';

  private selectedCountryID = 'GER';

  private countryUrlFAKE = '/assets/data/fakeStations.json';

  private stationUrlBase = this.baseUrl.concat('/api/contstat/stations/withcountryname/?countryid=');

  private stationUrl = this.stationUrlBase.concat(this.selectedCountryID);

  private countryUrl = this.baseUrl.concat('/api/countries/list');

  private selCountrySource = new BehaviorSubject<ICountry>({countryid: 'GER', countryname: 'Germany'});
  currentSelCountry = this.selCountrySource.asObservable();

    changeCountry(country: ICountry) {
    this.selCountrySource.next(country);
  }



  constructor(private http: HttpClient) { }

  getStations(givenURL: string): Observable<IStation[]> {
    return this.http.get<IStation[]>('assets/data/' + givenURL);
  }

  getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.countryUrlFAKE);
  }
}




