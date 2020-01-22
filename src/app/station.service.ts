import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStation} from './Interfaces/IStation';
import {ICountry} from './Interfaces/ICountry';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private baseUrl = 'http://localhost8080';

  private stationUrl = this.baseUrl.concat('/api/station');

  private countryUrl = this.baseUrl.concat('/api/country/list');

  constructor(private http: HttpClient) { }

  getStations(): Observable<IStation[]> {
    return this.http.get<IStation[]>(this.stationUrl);
  }

  getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.countryUrl);
  }
}




