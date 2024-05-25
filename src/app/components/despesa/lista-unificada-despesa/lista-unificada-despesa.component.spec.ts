import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUnificadaDespesaComponent } from './lista-unificada-despesa.component';

describe('ListaUnificadaDespesaComponent', () => {
  let component: ListaUnificadaDespesaComponent;
  let fixture: ComponentFixture<ListaUnificadaDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaUnificadaDespesaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaUnificadaDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
