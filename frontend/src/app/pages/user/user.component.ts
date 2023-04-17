import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from 'src/app/models/User';
import { RolesID } from '../../models/Role';
import { DetailMode } from 'src/app/models/DetailVM';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';

import { UserService } from 'src/app/core/services/user/user.service';
import { UsersService } from './users.service';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public ROLES = RolesID;
  
  displayedColumns: string[] = ['actions', 'id', 'name', 'email', 'password', 'role'];
  dataSource: any = null; //!Role[] | null = [];

  private usersSubscription: Subscription | null = null;

  public currentUser!: User | null;
  private userSubscription: Subscription | null = null;

  constructor(
    private userService: UserService,
    private usersService: UsersService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getUser();
  }

  ngOnDestroy(): void {
    if(this.usersSubscription) this.usersSubscription.unsubscribe();
    if(this.userSubscription) this.userSubscription.unsubscribe();
  }

  private getUsers(): void {
    this.usersSubscription = this.usersService.getAll().subscribe({
      next: (usersData: RequestResponseVM) => {
        alert(usersData.message);
        this.dataSource = usersData.data;
      },
      error: (error: any) => {
        alert(error.error.message);
        console.error("Erro ao buscar users: ", error);
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
  
  public onAddUser(): void {
    this.dialogService.openUserDialog({
      mode: DetailMode.Add,
      data: null,
      lastData: this.dataSource[this.dataSource.length - 1]
    }).subscribe({
      next: (data: any) => {
        this.getUsers();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  public onEditUser(user: User): void {
    this.updateRole(user);
  }

  private updateRole(user: User): void {
    this.dialogService.openUserDialog({
      mode: DetailMode.Update,
      data: user,
      lastData: this.dataSource[this.dataSource.length - 1]
    }).subscribe({
      next: (data: any) => {
        this.getUsers();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  public onDeleteUser(user: User): void {
    this.deleteUser(user);
  }

  private deleteUser(user: User): void {
    this.dialogService.openUserDialog({
      mode: DetailMode.Delete,
      data: user,
      lastData: this.dataSource[this.dataSource.length - 1]
    }).subscribe({
      next: (data: any) => {
        this.getUsers();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}