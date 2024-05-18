import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ConfirmacaoDespesaFixaComponent } from './confirmacao-despesa.component';

describe('ConfirmacaoDespesaComponent', () => {
  let component: ConfirmacaoDespesaFixaComponent;
  let fixture: ComponentFixture<ConfirmacaoDespesaFixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacaoDespesaFixaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacaoDespesaFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
