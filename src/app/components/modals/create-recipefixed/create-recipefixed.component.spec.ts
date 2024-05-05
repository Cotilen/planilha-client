import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipefixedComponent } from './create-recipefixed.component';

describe('CreateRecipefixedComponent', () => {
  let component: CreateRecipefixedComponent;
  let fixture: ComponentFixture<CreateRecipefixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRecipefixedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRecipefixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
