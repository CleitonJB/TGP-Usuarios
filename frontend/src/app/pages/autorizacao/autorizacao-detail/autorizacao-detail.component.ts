import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Autorizacao } from 'src/app/models/Autorizacao';
import { RequestResponseVM } from 'src/app/models/ResponseRequestVM';
import { DetailData, DetailMode } from 'src/app/models/DetailVM';

import { AutorizacaoService } from '../autorizacao.service';

@Component({
  selector: 'app-autorizacao-detail',
  templateUrl: './autorizacao-detail.component.html',
  styleUrls: ['./autorizacao-detail.component.scss']
})
export class AutorizacaoDetailComponent implements OnInit {

  public formGroup!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AutorizacaoDetailComponent>,
    private autorizacaoService: AutorizacaoService,
    @Inject(MAT_DIALOG_DATA) private detailData: DetailData,
  ) { }

  ngOnInit(): void {
    this.setInitialForm();
    this.populateData();
  }

  private setInitialForm(): void {
    this.formGroup = new FormGroup({
      id:              new FormControl({ value: null, disabled: true }),
      role:            new FormControl(null, Validators.required),
      funcionalidade:  new FormControl(null, Validators.required),
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
    const newAutorizacao: Autorizacao = {
      id: this.getNextID(),
      role: this.formGroup.getRawValue().role,
      funcionalidade: this.formGroup.getRawValue().funcionalidade,
    }

    this.autorizacaoService.create(newAutorizacao).subscribe({
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
    this.autorizacaoService.update(this.formGroup.getRawValue()).subscribe({
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
    this.autorizacaoService.delete(this.formGroup.getRawValue().id).subscribe({
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