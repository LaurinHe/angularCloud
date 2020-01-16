import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IUser} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'assets/data/user.json';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }
}
