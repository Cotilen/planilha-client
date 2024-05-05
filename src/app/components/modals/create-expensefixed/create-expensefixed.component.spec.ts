import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExpensefixedComponent } from './create-expensefixed.component';

describe('CreateExpensefixedComponent', () => {
  let component: CreateExpensefixedComponent;
  let fixture: ComponentFixture<CreateExpensefixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateExpensefixedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateExpensefixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
