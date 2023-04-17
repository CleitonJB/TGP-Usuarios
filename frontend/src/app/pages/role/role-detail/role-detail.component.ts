import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Role } from 'src/app/models/Role';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';
import { DetailData, DetailMode } from 'src/app/models/DetailVM';

import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.scss']
})
export class RoleDetailComponent implements OnInit {
  
  public formGroup!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<RoleDetailComponent>,
    private roleService: RoleService,
    @Inject(MAT_DIALOG_DATA) private detailData: DetailData,
  ) { }

  ngOnInit(): void {
    this.setInitialForm();
    this.populateData();
  }

  private setInitialForm(): void {
    this.formGroup = new FormGroup({
      id:           new FormControl({ value: null, disabled: true }),
      description:  new FormControl(null, Validators.required),
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
    const newRole: Role = {
      id: this.getNextID(),
      description: this.formGroup.getRawValue().description,
    }

    this.roleService.create(newRole).subscribe({
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
    this.roleService.update(this.formGroup.getRawValue()).subscribe({
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
    this.roleService.delete(this.formGroup.getRawValue().id).subscribe({
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