import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorRetangularComponent } from './valor-retangular.component';

describe('ValorRetangularComponent', () => {
  let component: ValorRetangularComponent;
  let fixture: ComponentFixture<ValorRetangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValorRetangularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValorRetangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
