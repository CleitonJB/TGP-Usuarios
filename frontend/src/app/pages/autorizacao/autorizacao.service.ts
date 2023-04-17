import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Autorizacao } from 'src/app/models/Autorizacao';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {
  private readonly BASE_URL: string = `${environment.server_url}/autorizacao`;

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<any> {
    const url: string = `${this.BASE_URL}/getAll`;

    return this.http.get<RequestResponseVM>(url);
  }

  public create(bodyParams: Autorizacao): Observable<any> {
    const url: string = `${this.BASE_URL}/create`;

    return this.http.post<RequestResponseVM>(url, bodyParams);
  }

  public update(bodyParams: Autorizacao): Observable<any> {
    const url: string = `${this.BASE_URL}/update`;

    return this.http.put<RequestResponseVM>(url, bodyParams);
  }

  public delete(RoleID: number): Observable<any> {
    const url: string = `${this.BASE_URL}/delete/${RoleID}`;

    return this.http.delete<RequestResponseVM>(url);
  }
}