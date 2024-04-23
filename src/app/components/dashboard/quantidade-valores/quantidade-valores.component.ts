import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quantidade-valores',
  templateUrl: './quantidade-valores.component.html',
  styleUrl: './quantidade-valores.component.css'
})
export class QuantidadeValoresComponent {

  @Input() tipo = ""
  @Input() value = ""
  @Input() data = ""
  @Input() img = ""
  @Input() dados = ""

}
