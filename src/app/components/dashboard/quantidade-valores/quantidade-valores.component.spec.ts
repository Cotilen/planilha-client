import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantidadeValoresComponent } from './quantidade-valores.component';

describe('QuantidadeValoresComponent', () => {
  let component: QuantidadeValoresComponent;
  let fixture: ComponentFixture<QuantidadeValoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantidadeValoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuantidadeValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
