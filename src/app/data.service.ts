import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStation} from './Interfaces/IStation';
import {ICountry} from './Interfaces/ICountry';
import {Observable, BehaviorSubject} from 'rxjs';
import {IDataAll} from './Interfaces/IDataAll';
import {AppSettings} from './AppSettings';

/**
 * Service for sending data to the backend
 * @author Florian Lang
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = AppSettings.API_ENDPOINT;

  private countryUrl = this.baseUrl.concat('api/countries/list');


  private selMinDateSource = new BehaviorSubject<string>('');
  currentSelMinDate = this.selMinDateSource.asObservable();

  private selMaxDateSource = new BehaviorSubject<string>('');
  currentSelMaxDate = this.selMaxDateSource.asObservable();

  constructor(private http: HttpClient) { }

  createStation(station: IStation): Observable<any> {
    return this.http.post(`${this.baseUrl + 'api/contstat/stations'}`, station);
  }

  postDataEntry(newentry: IDataAll): Observable<any> {
    return this.http.put(this.baseUrl + 'api/data/putdataentry', newentry);
  }

}




