import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { User } from 'src/app/models/User';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';

import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public currentUser!: User;
  public formGroup!: FormGroup;

  constructor(
    private router: Router,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.setInitialForm();
    this.getUser();
  }

  private setInitialForm(): void {
    this.formGroup = new FormGroup({
      id:        new FormControl(null),
      name:      new FormControl(null),
      namefull:  new FormControl(null),
      email:     new FormControl(null),
      password:  new FormControl(null),
      role:      new FormControl(null),
      cellphone: new FormControl(null),
    });
  }

  private getUser(): void {
    const user: User = Object.assign({}, JSON.parse(localStorage.getItem('user') as string));
    delete user.id;
    delete user.email;
    delete user.role;

    this.profileService.get(user).subscribe({
      next: (userData: RequestResponseVM) => {
        console.warn(userData);
        alert(userData.message);
        this.currentUser = userData.data;
        this.formGroup.patchValue(userData.data);
      },
      error: (error: any) => {
        console.warn(error);
        alert(error.error.message);
        console.error("Erro ao buscar dados do usuário: ", error);
      }
    });
  }

  public updateUser(): void {
    this.profileService.update(this.formGroup.getRawValue()).subscribe({
      next: (userData: RequestResponseVM) => {
        alert(userData.message);
        this.formGroup.patchValue(userData);
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
        localStorage.removeItem('user');
        this.router.navigateByUrl('login');
      },
      error: (error: any) => {
        alert(error.error.message);
        console.error("Erro ao buscar dados do usuário: ", error);
      }
    });
  }
}