import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoDespesaComponent } from './confirmacao-despesa.component';

describe('ConfirmacaoDespesaComponent', () => {
  let component: ConfirmacaoDespesaComponent;
  let fixture: ComponentFixture<ConfirmacaoDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacaoDespesaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacaoDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
