import { Component, Input } from '@angular/core';
import { RecipeService } from '../../service/recipe/recipe.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent {

  @Input() list = [{nome: "", valor: 0, data: ""}]
  @Input() color = "var(--green-color)"
}
