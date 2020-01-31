import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStation} from './Interfaces/IStation';
import {ICountry} from './Interfaces/ICountry';
import {Observable, BehaviorSubject} from 'rxjs';
import {IDataAll} from './Interfaces/IDataAll';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private baseUrl = 'http://localhost:8080';

  private selectedCountryID = 'GER';

  private countryUrlFAKE = '/assets/data/fakeCountry.json';

  private stationUrlBase = this.baseUrl.concat('/api/contstat/stations/withcountryname/?countryid=');

  private stationUrl = this.stationUrlBase.concat(this.selectedCountryID);

  private countryUrl = this.baseUrl.concat('/api/countries/list');

  private selCountrySource = new BehaviorSubject<ICountry>({countryid: '', countryname: ''});
  currentSelCountry = this.selCountrySource.asObservable();

  private selStationSource = new BehaviorSubject<IStation>({
    id: '',
  name: '',
  latitude: 0,
  longitude: 0,
  elevation: 0,
  state: '',
  gsnflag: '',
  hcncrnflag: '',
  wmoid: '',
});
  currentSelStation = this.selStationSource.asObservable();

  private selMinDateSource = new BehaviorSubject<string>('');
  currentSelMinDate = this.selMinDateSource.asObservable();

  private selMaxDateSource = new BehaviorSubject<string>('');
  currentSelMaxDate = this.selMaxDateSource.asObservable();

  changeCountry(country: ICountry) {
    this.selCountrySource.next(country);
  }
  changeStation(station: IStation) {
    this.selStationSource.next(station);
  }
  changeMinDate(minDate: string) {
    this.selMinDateSource.next(minDate);
  }
  changeMaxDate(maxDate: string) {
    this.selMaxDateSource.next(maxDate);
  }

  constructor(private http: HttpClient) { }

  getStations(givenURL: string): Observable<IStation[]> {
    return this.http.get<IStation[]>(this.baseUrl + '/api/contstat/stations/withcountryname/?countryid=' + givenURL);
  }

  getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.countryUrl);
  }

  getData(givenURL: string): Observable<IDataAll[]> {
    return this.http.get<IDataAll[]>('http://localhost:8080/api/data/list' + givenURL);
  }

  getFakeData(givenURL: string): Observable<IDataAll[]> {
    return this.http.get<IDataAll[]>('assets/data/' + givenURL);
  }
}




