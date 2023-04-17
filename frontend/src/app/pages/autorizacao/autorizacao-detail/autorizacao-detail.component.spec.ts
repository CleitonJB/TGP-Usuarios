import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizacaoDetailComponent } from './autorizacao-detail.component';

describe('AutorizacaoDetailComponent', () => {
  let component: AutorizacaoDetailComponent;
  let fixture: ComponentFixture<AutorizacaoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorizacaoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizacaoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
