import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStation} from './station';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private url = '/assets/data/stations.json';

  constructor(private http: HttpClient) { }

  getStations(): Observable<IStation[]> {
    return this.http.get<IStation[]>(this.url);
  }
}




