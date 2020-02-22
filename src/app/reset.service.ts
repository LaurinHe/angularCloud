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

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.baseUrlUM + '/deleteuser' + id, httpOptions);
  }

  getUserList(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrlUM + '/userlist');
  }

  setCurator(): Observable<any> {
    return this.http.get(this.baseUrlUM + 'setcurator'); // get to set
  }

  resetpassword(): Observable<any> {
    return this.http.get(this.baseUrlUM + 'resetpassword'); // get to set
  }


}
