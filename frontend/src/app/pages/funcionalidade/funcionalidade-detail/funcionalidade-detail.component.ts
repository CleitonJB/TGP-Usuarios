import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Role } from 'src/app/models/Role';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';
import { DetailData, DetailMode } from 'src/app/models/DetailVM';

import { FuncionalidadeService } from '../funcionalidade.service';

@Component({
  selector: 'app-funcionalidade-detail',
  templateUrl: './funcionalidade-detail.component.html',
  styleUrls: ['./funcionalidade-detail.component.scss']
})
export class FuncionalidadeDetailComponent implements OnInit {

  public formGroup!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<FuncionalidadeDetailComponent>,
    private funcionalidadeService: FuncionalidadeService,
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

    this.funcionalidadeService.create(newRole).subscribe({
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
    this.funcionalidadeService.update(this.formGroup.getRawValue()).subscribe({
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
    this.funcionalidadeService.delete(this.formGroup.getRawValue().id).subscribe({
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