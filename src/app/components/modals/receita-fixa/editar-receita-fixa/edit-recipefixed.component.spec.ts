import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipefixedComponent } from './edit-recipefixed.component';

describe('EditRecipefixedComponent', () => {
  let component: EditRecipefixedComponent;
  let fixture: ComponentFixture<EditRecipefixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRecipefixedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRecipefixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
