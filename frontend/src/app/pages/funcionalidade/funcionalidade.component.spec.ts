import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadeComponent } from './funcionalidade.component';

describe('FuncionalidadeComponent', () => {
  let component: FuncionalidadeComponent;
  let fixture: ComponentFixture<FuncionalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionalidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
