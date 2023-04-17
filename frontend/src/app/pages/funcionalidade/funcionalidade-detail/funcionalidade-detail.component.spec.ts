import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadeDetailComponent } from './funcionalidade-detail.component';

describe('FuncionalidadeDetailComponent', () => {
  let component: FuncionalidadeDetailComponent;
  let fixture: ComponentFixture<FuncionalidadeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionalidadeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionalidadeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
