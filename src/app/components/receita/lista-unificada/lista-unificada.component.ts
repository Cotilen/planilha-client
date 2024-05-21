import { Component, Input } from '@angular/core';
import { RecipeService } from '../../../service/recipe/recipe.service';
import { FixedrecipeService } from '../../../service/fixedrecipe/fixedrecipe.service';

@Component({
  selector: 'app-lista-unificada',
  templateUrl: './lista-unificada.component.html',
  styleUrl: './lista-unificada.component.css'
})
export class ListaUnificadaComponent {
  id = Number(localStorage.getItem('id'));
  list = [{id:0,nome: "", valor: 0, data: ""}]
  @Input() color = "var(--green-color)"

  constructor(
    private recipe: RecipeService,
    private recipeFixed: FixedrecipeService
  ){}

  ngOnInit(): void{
    this.encherLista(this.id)
  }

  encherLista(id: number){
    this.list.pop()
    this.recipe.getRecipes(id).subscribe(receita =>{
      receita.recipe.map(result =>{
        const value = Number(result.value)
        this.list.push({id: result.id ?? 0, nome: result.name ?? "", valor: value ?? 0, data: result.dateRecipe})
      })
    })
    this.recipeFixed.getRecipes(id).subscribe(receita =>{
      receita.recipe.map(result =>{
        const value = Number(result.value)
        this.list.push({id: result.id ?? 0, nome: result.name ?? "", valor: value ?? 0, data: result.dateRecipe})
      })
    })
  }
}
