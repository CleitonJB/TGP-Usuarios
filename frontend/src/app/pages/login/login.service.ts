import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { User } from 'src/app/models/User';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly BASE_URL: string = `${environment.server_url}/user`;

  constructor(
    private http: HttpClient
  ) { }

  public login(bodyParams: Partial<User>): Observable<any> {
    const url: string = `${this.BASE_URL}/login`;

    return this.http.post<RequestResponseVM>(url, bodyParams);
  }
}