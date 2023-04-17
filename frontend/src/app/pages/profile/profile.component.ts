import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/User';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';
import { RolesID, RolesString } from 'src/app/models/Role';

import { UserService } from 'src/app/core/services/user/user.service';
import { UsersService } from '../user/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public ROLES = RolesID;
  public roles_options: any[] = [
    {
      label: RolesString[1],
      value: RolesID.Novato
    },
    {
      label: RolesString[2],
      value: RolesID.Estagiario
    },
    {
      label: RolesString[3],
      value: RolesID.Desenvolvedor
    },
    {
      label: RolesString[4],
      value: RolesID.Gerente
    },
    {
      label: RolesString[5],
      value: RolesID.Diretor
    }
  ];

  public currentUser!: User | null;
  private userSubscription: Subscription | null = null;

  public formGroup!: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.setInitialForm();
    this.getUser();
  }

  ngOnDestroy(): void {
    if(this.userSubscription) this.userSubscription.unsubscribe();
  }

  private setInitialForm(): void {
    this.formGroup = new FormGroup({
      id:        new FormControl(null),
      name:      new FormControl(null, Validators.required),
      namefull:  new FormControl({ value: null, disabled: true}),
      email:     new FormControl(null, Validators.required),
      password:  new FormControl(null, Validators.required),
      role:      new FormControl(null, Validators.required),
      cellphone: new FormControl({ value: null, disabled: true}),
    });
  }

  private getUser(): void {
    this.userSubscription = this.userService.getUser().subscribe({
      next: (userData: User | null) => {
        this.currentUser = userData;
        if(userData != null) this.formGroup.patchValue(userData);
      },
      error: (error: any) => {
        console.error("Erro ao obter os dados do usuário: ", error);
      }
    });
  }

  public updateUser(): void {
    this.usersService.update(this.formGroup.getRawValue()).subscribe({
      next: (userData: RequestResponseVM) => {
        alert(userData.message);
        this.formGroup.patchValue(userData);
        this.userService.setGlobalUser(this.formGroup.getRawValue());
      },
      error: (error: any) => {
        alert(error.error.message);
        console.error("Erro ao buscar dados do usuário: ", error);
      }
    });
  }

  public deleteUser(): void {
    this.usersService.delete(this.formGroup.getRawValue().id).subscribe({
      next: (userData: RequestResponseVM) => {
        alert(userData.message);
        this.userService.removeGlobalUser();
        this.router.navigateByUrl('login');
      },
      error: (error: any) => {
        alert(error.error.message);
        console.error("Erro ao buscar dados do usuário: ", error);
      }
    });
  }
}