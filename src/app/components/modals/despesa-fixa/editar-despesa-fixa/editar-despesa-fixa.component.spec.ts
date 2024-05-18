import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDespesaFixaComponent } from './editar-despesa-fixa.component';

describe('EditarDespesaFixaComponent', () => {
  let component: EditarDespesaFixaComponent;
  let fixture: ComponentFixture<EditarDespesaFixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarDespesaFixaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarDespesaFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
