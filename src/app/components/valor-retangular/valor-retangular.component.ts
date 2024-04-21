import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-valor-retangular',
  templateUrl: './valor-retangular.component.html',
  styleUrl: './valor-retangular.component.css'
})
export class ValorRetangularComponent {
  @Input() value =''
  @Input() color = '#ffffff'
  @Input() title =''
  @Input() img =''

}
