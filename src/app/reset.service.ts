import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser} from './Interfaces/UserI';

import { ResetPwInfo } from './auth/resetpw-info';
import {AppSettings} from './AppSettings';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  private baseUrl = AppSettings.API_ENDPOINT;
  private baseUrlUM = this.baseUrl + 'usermanagement';

  constructor(private http: HttpClient) {  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete(this.baseUrlUM + '/deleteuser?username=' + username, httpOptions);
  }

  getUserList(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrlUM + '/userlist');
  }

  setCurator(): Observable<any> {
    return this.http.get(this.baseUrlUM + '/setcurator'); // get to set
  }

  resetpassword(info: ResetPwInfo): Observable<string> {
    return this.http.put<string>(this.baseUrl + 'api/auth/resetpassword', info, httpOptions);
  }


}
