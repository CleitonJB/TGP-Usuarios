import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { User } from 'src/app/models/User';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';

import { UserService } from 'src/app/core/services/user/user.service';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formGroup!: FormGroup;
  
  constructor(
    private router: Router,
    private userService: UserService,
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
    this.setInitialForm();
  }

  private setInitialForm(): void {
    this.formGroup = new FormGroup({
      id:       new FormControl(1),
      name:     new FormControl(null),
      email:    new FormControl(null),
      password: new FormControl(null),
      role:     new FormControl(1)
    });
  }

  public navigateTo(path: string): void {
    this.router.navigateByUrl(path);
  }

  public onSubmit(): void {
    this.registerService.register(this.formGroup.getRawValue() as User).subscribe({
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
