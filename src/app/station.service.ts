import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStation} from './Interfaces/IStation';
import {ICountry} from './Interfaces/ICountry';
import {Observable, BehaviorSubject} from 'rxjs';
import {IDataAll} from './Interfaces/IDataAll';
import {AppSettings} from './AppSettings';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private baseUrl = AppSettings.API_ENDPOINT;

  private selectedCountryID = 'GER';

  private countryUrlFAKE = 'assets/data/fakeCountry.json';

  // private stationUrlBase = this.baseUrl.concat('/api/contstat/stations/withcountryname/?countryid=');
  //
  // private stationUrl = this.stationUrlBase.concat(this.selectedCountryID);

  private countryUrl = this.baseUrl.concat('api/countries/list');

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
    return this.http.get<IStation[]>(this.baseUrl + 'api/contstat/stations/withcountryname?countryid=' + givenURL);
  }

   getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.countryUrl);
  }

  getData(givenURL: string): Observable<IDataAll[]> {
    return this.http.get<IDataAll[]>(this.baseUrl + 'api/data/list' + givenURL);
  }

  getFakeData(givenURL: string): Observable<IDataAll[]> {
    return this.http.get<IDataAll[]>('assets/data/' + givenURL);
  }

  getStation(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createStation(station: IStation) { // : Observable<IStation> {
    // return this.http.post(`${this.baseUrl + 'api/contstat/stations'}`, station);
  }

}




