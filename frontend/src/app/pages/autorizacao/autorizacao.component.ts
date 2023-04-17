import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RolesID } from '../../models/Role';
import { DetailMode } from 'src/app/models/DetailVM';
import { Autorizacao } from 'src/app/models/Autorizacao';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';

import { User } from 'src/app/models/User';
import { UserService } from 'src/app/core/services/user/user.service';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { AutorizacaoService } from './autorizacao.service';

@Component({
  selector: 'app-autorizacao',
  templateUrl: './autorizacao.component.html',
  styleUrls: ['./autorizacao.component.scss']
})
export class AutorizacaoComponent implements OnInit {
  public ROLES = RolesID;
  
  displayedColumns: string[] = ['actions', 'id', 'role', 'funcionalidade'];
  dataSource: any = null; //!Role[] | null = [];

  private autorizacaoSubscription: Subscription | null = null;

  public currentUser!: User | null;
  private userSubscription: Subscription | null = null;

  constructor(
    private userService: UserService,
    private dialogService: DialogService,
    private autorizacaoService: AutorizacaoService,
  ) { }

  ngOnInit(): void {
    this.getAutorizacoes();
    this.getUser();
  }

  ngOnDestroy(): void {
    if(this.autorizacaoSubscription) this.autorizacaoSubscription.unsubscribe();
    if(this.userSubscription) this.userSubscription.unsubscribe();
  }

  private getAutorizacoes(): void {
    this.autorizacaoSubscription = this.autorizacaoService.get().subscribe({
      next: (autorizacoesData: RequestResponseVM) => {
        alert(autorizacoesData.message);
        this.dataSource = autorizacoesData.data;
      },
      error: (error: any) => {
        alert(error.error.message);
        console.error("Erro ao buscar as autorizações: ", error);
      }
    });
  }

  private getUser(): void {
    this.userSubscription = this.userService.getUser().subscribe({
      next: (userData: User | null) => {
        this.currentUser = userData;
      },
      error: (error: any) => {
        console.error("Erro ao obter os dados do usuário: ", error);
      }
    });
  }
  
  public onAddAutorizacao(): void {
    this.dialogService.openAutorizacaoDialog({
      mode: DetailMode.Add,
      data: null,
      lastData: this.dataSource[this.dataSource.length - 1]
    }).subscribe({
      next: (data: any) => {
        this.getAutorizacoes();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  public onEditAutorizacao(autorizacao: Autorizacao): void {
    this.updateAutorizacao(autorizacao);
  }

  private updateAutorizacao(autorizacao: Autorizacao): void {
    this.dialogService.openAutorizacaoDialog({
      mode: DetailMode.Update,
      data: autorizacao,
      lastData: this.dataSource[this.dataSource.length - 1]
    }).subscribe({
      next: (data: any) => {
        this.getAutorizacoes();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  public onDeleteAutorizacao(autorizacao: Autorizacao): void {
    this.deleteAutorizacaos(autorizacao);
  }

  private deleteAutorizacaos(autorizacao: Autorizacao): void {
    this.dialogService.openAutorizacaoDialog({
      mode: DetailMode.Delete,
      data: autorizacao,
      lastData: this.dataSource[this.dataSource.length - 1]
    }).subscribe({
      next: (data: any) => {
        this.getAutorizacoes();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}