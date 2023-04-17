import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { User } from 'src/app/models/User';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly BASE_URL: string = `${environment.server_url}/user`;

  constructor(
    private http: HttpClient
  ) { }

  public get(bodyParams: Partial<User>): Observable<any> {
    const url: string = `${this.BASE_URL}/login`;

    return this.http.post<RequestResponseVM>(url, bodyParams);
  }

  public getAll(): Observable<any> {
    const url: string = `${this.BASE_URL}/getAll`;

    return this.http.get<RequestResponseVM>(url);
  }

  public create(bodyParams: User): Observable<any> {
    const url: string = `${this.BASE_URL}/register`;

    return this.http.post<RequestResponseVM>(url, bodyParams);
  }

  public update(bodyParams: User): Observable<any> {
    const url: string = `${this.BASE_URL}/update`;

    return this.http.put<RequestResponseVM>(url, bodyParams);
  }

  public delete(UserID: number): Observable<any> {
    const url: string = `${this.BASE_URL}/delete/${UserID}`;

    return this.http.delete<RequestResponseVM>(url);
  }
}
