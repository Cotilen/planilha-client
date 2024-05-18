import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoFixaComponent } from './confirmacao-fixa.component';

describe('ConfirmacaoFixaComponent', () => {
  let component: ConfirmacaoFixaComponent;
  let fixture: ComponentFixture<ConfirmacaoFixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacaoFixaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacaoFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
