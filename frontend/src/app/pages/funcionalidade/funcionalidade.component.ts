import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from 'src/app/models/User';
import { RolesID } from '../../models/Role';
import { DetailMode } from 'src/app/models/DetailVM';
import { Funcionalidade } from 'src/app/models/Funcionalidade';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';

import { UserService } from 'src/app/core/services/user/user.service';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { FuncionalidadeService } from './funcionalidade.service';

@Component({
  selector: 'app-funcionalidade',
  templateUrl: './funcionalidade.component.html',
  styleUrls: ['./funcionalidade.component.scss']
})
export class FuncionalidadeComponent implements OnInit {
  public ROLES = RolesID;
  
  displayedColumns: string[] = ['actions', 'id', 'description'];
  dataSource: any = null; //!Role[] | null = [];

  private funcionalidadeSubscription: Subscription | null = null;

  public currentUser!: User | null;
  private userSubscription: Subscription | null = null;

  constructor(
    private userService: UserService,
    private dialogService: DialogService,
    private funcionalidadeService: FuncionalidadeService,
  ) { }

  ngOnInit(): void {
    this.getFuncionalidades();
    this.getUser();
  }

  ngOnDestroy(): void {
    if(this.funcionalidadeSubscription) this.funcionalidadeSubscription.unsubscribe();
    if(this.userSubscription) this.userSubscription.unsubscribe();
  }

  private getFuncionalidades(): void {
    this.funcionalidadeSubscription = this.funcionalidadeService.get().subscribe({
      next: (funcionalidadesData: RequestResponseVM) => {
        alert(funcionalidadesData.message);
        this.dataSource = funcionalidadesData.data;
      },
      error: (error: any) => {
        alert(error.error.message);
        console.error("Erro ao buscar funcionalidades: ", error);
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
  
  public onAddFuncionalidade(): void {
    this.dialogService.openFuncionalidadeDialog({
      mode: DetailMode.Add,
      data: null,
      lastData: this.dataSource[this.dataSource.length - 1]
    }).subscribe({
      next: (data: any) => {
        this.getFuncionalidades();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  public onEditFuncionalidade(funcionalidade: Funcionalidade): void {
    this.updateRoles(funcionalidade);
  }

  private updateRoles(funcionalidade: Funcionalidade): void {
    this.dialogService.openFuncionalidadeDialog({
      mode: DetailMode.Update,
      data: funcionalidade,
      lastData: this.dataSource[this.dataSource.length - 1]
    }).subscribe({
      next: (data: any) => {
        this.getFuncionalidades();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  public onDeleteFuncionalidade(funcionalidade: Funcionalidade): void {
    this.deleteFuncionalidade(funcionalidade);
  }

  private deleteFuncionalidade(funcionalidade: Funcionalidade): void {
    this.dialogService.openFuncionalidadeDialog({
      mode: DetailMode.Delete,
      data: funcionalidade,
      lastData: this.dataSource[this.dataSource.length - 1]
    }).subscribe({
      next: (data: any) => {
        this.getFuncionalidades();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}