import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/User';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';
import { DetailData, DetailMode } from 'src/app/models/DetailVM';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public formGroup!: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<UserDetailComponent>,
    private usersService: UsersService,
    @Inject(MAT_DIALOG_DATA) private detailData: DetailData,
  ) { }

  ngOnInit(): void {
    this.setInitialForm();
    this.populateData();
  }

  private setInitialForm(): void {
    this.formGroup = new FormGroup({
      id:        new FormControl({ value: null, disabled: true }),
      name:      new FormControl(null, Validators.required),
      email:     new FormControl(null, Validators.required),
      password:  new FormControl(null, Validators.required),
      role:      new FormControl(null, Validators.required),
    });
  }

  private populateData(): void {
    switch(this.detailData.mode) {
      case DetailMode.Add:
      break;

      case DetailMode.Update:
      break;

      case DetailMode.Delete:
        this.formGroup.disable();
      break;

      case DetailMode.View:
      break;
    }

    this.formGroup.patchValue(this.detailData.data);
  }

  public onSubmit(): void {
    switch(this.detailData.mode) {
      case DetailMode.Add:
        this.onCreate();
      break;

      case DetailMode.Update:
        this.onUpdate();
      break;

      case DetailMode.Delete:
        this.onDelete();
      break;

      case DetailMode.View:
        //!
      break;
    }
  }

  private onCreate(): void {
    const newUser: User = {
      id: this.getNextID(),
      name: this.formGroup.getRawValue().name,
      password: this.formGroup.getRawValue().password,
      email: this.formGroup.getRawValue().email,
      role: this.formGroup.getRawValue().role,
    }

    this.usersService.create(newUser).subscribe({
      next: (data: RequestResponseVM) => {
        alert(data.message);
        this.onClose();
      },
      error: (error: any) => {
        console.error(error.error.message);
      }
    });
  }

  private onUpdate(): void {
    this.usersService.update(this.formGroup.getRawValue()).subscribe({
      next: (data: RequestResponseVM) => {
        alert(data.message);
        this.onClose();
      },
      error: (error: any) => {
        console.error(error.error.message);
      }
    });
  }

  private onDelete(): void {
    this.usersService.delete(this.formGroup.getRawValue().id).subscribe({
      next: (data: RequestResponseVM) => {
        alert(data.message);
        this.onClose();
      },
      error: (error: any) => {
        console.error(error.error.message);
      }
    });
  }

  public onClose(): void {
    this.dialogRef.close(null);
  }

  //*
  private getNextID(): number {
    console.log(this.detailData.lastData);

    if(this.detailData.lastData) {
      return Number(this.detailData.lastData.id) + 1;
    } else {
      return 1;
    }
  }
}