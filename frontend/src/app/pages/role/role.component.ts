import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from 'src/app/models/User';
import { DetailMode } from 'src/app/models/DetailVM';
import { Role, RolesID } from '../../models/Role';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';

import { RoleService } from './role.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  public ROLES = RolesID;
  
  displayedColumns: string[] = ['actions', 'id', 'description'];
  dataSource: any = null; //!Role[] | null = [];

  private roleSubscription: Subscription | null = null;

  public currentUser!: User | null;
  private userSubscription: Subscription | null = null;

  constructor(
    private roleService: RoleService,
    private userService: UserService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getRoles();
    this.getUser();
  }

  ngOnDestroy(): void {
    if(this.roleSubscription) this.roleSubscription.unsubscribe();
    if(this.userSubscription) this.userSubscription.unsubscribe();
  }

  private getRoles(): void {
    this.roleSubscription = this.roleService.get().subscribe({
      next: (rolesData: RequestResponseVM) => {
        alert(rolesData.message);
        this.dataSource = rolesData.data;
      },
      error: (error: any) => {
        alert(error.error.message);
        console.error("Erro ao buscar roles: ", error);
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
  
  public onAddRole(): void {
    this.dialogService.openRoleDialog({
      mode: DetailMode.Add,
      data: null,
      lastData: this.dataSource[this.dataSource.length - 1]
    }).subscribe({
      next: (data: any) => {
        this.getRoles();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  public onEditRole(role: Role): void {
    this.updateRoles(role);
  }

  private updateRoles(role: Role): void {
    this.dialogService.openRoleDialog({
      mode: DetailMode.Update,
      data: role,
      lastData: this.dataSource[this.dataSource.length - 1]
    }).subscribe({
      next: (data: any) => {
        this.getRoles();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  public onDeleteRole(role: Role): void {
    this.deleteRoles(role);
  }

  private deleteRoles(role: Role): void {
    this.dialogService.openRoleDialog({
      mode: DetailMode.Delete,
      data: role,
      lastData: this.dataSource[this.dataSource.length - 1]
    }).subscribe({
      next: (data: any) => {
        this.getRoles();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}