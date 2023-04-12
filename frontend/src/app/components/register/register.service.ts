import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { User } from 'src/app/models/User';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly BASE_URL: string = `${environment.server_url}/user`;

  constructor(
    private http: HttpClient
  ) { }

  public register(bodyParams: User): Observable<any> {
    const url: string = `${this.BASE_URL}/register`;

    return this.http.post<RequestResponseVM>(url, bodyParams);
  }
}