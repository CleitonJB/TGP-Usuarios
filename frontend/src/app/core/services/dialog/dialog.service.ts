import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { DetailData } from 'src/app/models/DetailVM';

import { UserDetailComponent } from 'src/app/pages/user/user-detail/user-detail.component';
import { RoleDetailComponent } from 'src/app/pages/role/role-detail/role-detail.component';
import { AutorizacaoDetailComponent } from 'src/app/pages/autorizacao/autorizacao-detail/autorizacao-detail.component';
import { FuncionalidadeDetailComponent } from 'src/app/pages/funcionalidade/funcionalidade-detail/funcionalidade-detail.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  public openUserDialog(data: DetailData): Observable<any> {
    const dialogRef = this.dialog.open(UserDetailComponent, {
      data: data,
      disableClose: true
    });

    return dialogRef.afterClosed();
  }

  public openRoleDialog(data: DetailData): Observable<any> {
    const dialogRef = this.dialog.open(RoleDetailComponent, {
      data: data,
      disableClose: true
    });

    return dialogRef.afterClosed();
  }

  public openAutorizacaoDialog(data: DetailData): Observable<any> {
    const dialogRef = this.dialog.open(AutorizacaoDetailComponent, {
      data: data,
      disableClose: true
    });

    return dialogRef.afterClosed();
  }

  public openFuncionalidadeDialog(data: DetailData): Observable<any> {
    const dialogRef = this.dialog.open(FuncionalidadeDetailComponent, {
      data: data,
      disableClose: true
    });

    return dialogRef.afterClosed();
  }
}