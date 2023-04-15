import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { User } from 'src/app/models/User';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';

import { UserService } from 'src/app/core/services/user/user.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup!: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.setInitialForm();
  }

  private setInitialForm(): void {
    this.formGroup = new FormGroup({
      name:     new FormControl(null),
      password: new FormControl(null),
    });
  }

  public navigateTo(path: string): void {
    this.router.navigateByUrl(path);
  }

  public onSubmit(): void {
    this.loginService.login(this.formGroup.getRawValue() as User).subscribe({
      next: (userData: RequestResponseVM) => {
        alert(userData.message);
        this.userService.setGlobalUser(userData.data);
        this.navigateTo('profile');
      },
      error: (error: any) => {
        alert(error.error.message);
      }
    });
  }
}