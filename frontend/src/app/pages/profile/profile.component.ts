import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

import { User } from 'src/app/models/User';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';

import { UserService } from 'src/app/core/services/user/user.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public currentUser!: User | null;
  private userSubscription: Subscription | null = null;

  public formGroup!: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private profileService: ProfileService
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
      name:      new FormControl(null),
      namefull:  new FormControl({ value: null, disabled: true}),
      email:     new FormControl(null),
      password:  new FormControl(null),
      role:      new FormControl(null),
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
    // const user: User = Object.assign({}, JSON.parse(localStorage.getItem('user') as string));
    // delete user.id;
    // delete user.email;
    // delete user.role;

    // this.profileService.get(user).subscribe({
    //   next: (userData: RequestResponseVM) => {
    //     console.warn(userData);
    //     alert(userData.message);
    //     this.currentUser = userData.data;
    //     this.formGroup.patchValue(userData.data);
    //   },
    //   error: (error: any) => {
    //     console.warn(error);
    //     alert(error.error.message);
    //     console.error("Erro ao buscar dados do usuário: ", error);
    //   }
    // });
  }

  public updateUser(): void {
    this.profileService.update(this.formGroup.getRawValue()).subscribe({
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
    this.profileService.delete(this.formGroup.getRawValue().id).subscribe({
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