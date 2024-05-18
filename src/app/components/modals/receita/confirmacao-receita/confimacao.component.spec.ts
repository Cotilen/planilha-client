import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimacaoComponent } from './confimacao.component';

describe('ConfimacaoComponent', () => {
  let component: ConfimacaoComponent;
  let fixture: ComponentFixture<ConfimacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfimacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfimacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
