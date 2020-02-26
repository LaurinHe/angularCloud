import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {IStation} from './Interfaces/IStation';
import {ICountry} from './Interfaces/ICountry';
import {Observable, BehaviorSubject} from 'rxjs';
import {IDataAll} from './Interfaces/IDataAll';
import {AppSettings} from './AppSettings';
import {IClimateDiagEntry} from './Interfaces/IClimateDiagEntry';
import {BugReport} from './Interfaces/Classes/BugReport';

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



  postDataEntry(newentry: IDataAll): Observable<any> {
    return this.http.put(this.baseUrl + 'api/data/putdataentry', newentry);
  }

  getClimateDiagEntry(stationid: number, year: number ): Observable<IClimateDiagEntry[]> {
 /*   const params = new HttpParams()
      .set('stationid', String(stationid)).set('year', String(year));*/
    return this.http.get<IClimateDiagEntry[]>(this.baseUrl + 'api/climatediag/getdatayearly?stationid=' + stationid + '&year=' + year);
  }

  postBugReport(bugreport: BugReport): Observable<any> {
    return this.http.post(this.baseUrl + '/api/bugreport/reportbug', bugreport);
  }



}




