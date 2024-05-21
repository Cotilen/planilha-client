import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUnificadaComponent } from './lista-unificada.component';

describe('ListaUnificadaComponent', () => {
  let component: ListaUnificadaComponent;
  let fixture: ComponentFixture<ListaUnificadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaUnificadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaUnificadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
