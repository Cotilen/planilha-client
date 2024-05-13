import { Recipe } from './../../../service/recipe/recipe';
import { Component } from '@angular/core';
import { RecipeService } from '../../../service/recipe/recipe.service';
import { ItemLista } from '../../../service/lista';
import { Chart } from 'chart.js';
import { FixedrecipeService } from '../../../service/fixedrecipe/fixedrecipe.service';
import { addHours } from 'date-fns';
import { ModalService } from '@developer-partners/ngx-modal-dialog';
import { CreateRecipeComponent } from '../../modals/create-recipe/create-recipe.component';
import { CreateRecipefixedComponent } from '../../modals/create-recipefixed/create-recipefixed.component';
import { EditRecipeComponent } from '../../modals/edit-recipe/edit-recipe.component';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrl: './receita.component.css'
})

export class ReceitaComponent {

  constructor(
    private service: RecipeService,
    private recipeService: FixedrecipeService,
    private modal: ModalService
  ) { }

  id = Number(localStorage.getItem('id'))
  lista: ItemLista[] = []
  listaFixa: ItemLista[] = []
  value = 0
  valueFixed = 0
  total = 0


  ngOnInit(): void {
    this.listRecipe()
    this.listRecipeFixed()
    this.valueChart()

  }

  listRecipe() {

    this.service.getRecipes(this.id).subscribe(recipes => {
      recipes.recipe.forEach(recipe => {
        const partesData = recipe.dateRecipe.split('/');
        const date = new Date(partesData[1])

        let gmt = addHours(date, 3)
        let mes = gmt.getMonth() + 1
        let dataAtual = new Date().getMonth() + 1

        if (mes == dataAtual) {
          this.lista.push({id:Number(recipe.id) ,nome: `${recipe.name}`, valor: Number(recipe.value), data: `${recipe.dateRecipe}` })
        }
      })
    })
  }

  listRecipeFixed() {

    this.recipeService.getRecipes(this.id).subscribe(recipes => {
      recipes.recipe.forEach(recipe => {
        const partesData = recipe.dateRecipe.split('/');
        const date = new Date(partesData[0])

        let gmt = addHours(date, 3)
        let dia = gmt.getDay()
        let mes = gmt.getMonth() + 1
        let ano = gmt.getFullYear()

        const diaFormatado = (dia < 10) ? `0${dia}` : dia;
        const mesFormatado = (mes < 10) ? `0${mes}` : mes;

        let dataAtual = new Date().getMonth() + 1

        if (mes <= dataAtual) {
          this.listaFixa.push({ id:Number(recipe.id) ,nome: `${recipe.name}`, valor: Number(recipe.value), data: `${diaFormatado}/${mesFormatado}/${ano}` })
        }
      })
    })
  }

  valueChart(){
    let value = [0]
    value.pop()

    this.service.getRecipes(this.id).subscribe(recipes => {
      let valueReceita = 0
      let valueFixedReceita = 0
      let dataAtual = new Date().getMonth() + 1

      recipes.recipe.forEach(recipe => {
        const partesData = recipe.dateRecipe.split('/');
        const date = new Date(partesData[1])

        let gmt = addHours(date, 3)
        let mes = gmt.getMonth() + 1

        if (mes == dataAtual) {
          valueReceita += Number(recipe.value)
        }
      })

      this.recipeService.getRecipes(this.id).subscribe(recipes => {
        recipes.recipe.forEach(recipe => {
          let partesData = recipe.dateRecipe.split('/');
          let date = new Date(partesData[0]);

          let gmt = addHours(date, 3)
          let mes = gmt.getMonth() + 1


          if (mes <= dataAtual) {
            valueFixedReceita += Number(recipe.value)
          }

        })

        this.value = valueReceita
        this.valueFixed = valueFixedReceita
        this.total = this.value + this.valueFixed

        value.push(valueReceita)
        value.push(valueFixedReceita)

      })

    })

    setTimeout(() => {
      this.pizzaChart(value);
    }, 100);
  }

  pizzaChart(value: number[]) {

    let date = new Date().getMonth() + 1
    let mes = this.switchMeses(date)

    Chart.defaults.color = '#fff'

    let chart = new Chart('pizza', {
      type: 'doughnut',
      data: {
        labels: ['Receita', 'Receita Fixa'],
        datasets: [{
          label: mes,
          data: value,
          backgroundColor: [
            '#01B574',
            '#FB5927',
          ],
          borderColor: [
            '#01B574',
            '#FB5927',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        }
      }
    });

    chart.update()

  }

  switchMeses(date: number) {
    switch (date) {
      case 1:
        return 'Janeiro'
      case 2:
        return 'Fevereiro'
      case 3:
        return 'Março'
      case 4:
        return 'Abril'
      case 5:
        return 'Maio'
      case 6:
        return 'Junho'
      case 7:
        return 'Julho'
      case 8:
        return 'Agosto'
      case 9:
        return 'Setembro'
      case 10:
        return 'Outubro'
      case 11:
        return 'Novembro'
      case 12:
        return 'Dezembro'
      default:
        return 'Indefinido'
    }
  }

  openModalRecipe(){
    this.modal.show(CreateRecipeComponent,{
      title: 'Criar Receita',
    }).result()
      .subscribe((result: any) =>{
        const recipe: Recipe = result as Recipe;

        console.log(recipe);
        var receita = {
          id_user:this.id ,
          name: result.name,
          value: result.valor,
          dateRecipe: result.date
        }
        this.service.postRecipe(receita).subscribe((result) =>{
          window.location.reload();
        })
      })
  }

  openModalRecipeFixed(){
    this.modal.show(CreateRecipefixedComponent,{
      title: 'Criar Receita Fixa',
    }).result()
      .subscribe((result: any) =>{
        const recipe: Recipe = result as Recipe;
        var receita = {
          id_user:this.id ,
          name: result.name,
          value: result.valor,
          dateRecipe: result.date
        }
        this.recipeService.postRecipe(receita).subscribe((result) =>{

          window.location.reload();
        })
      })
  }

  openModalEditRecipe = (id: number) => {
    this.service.getOneRecipe(id).subscribe((result =>{
      console.log(result);
      localStorage.setItem('recipeName', `${result.recipe.name}`)
      localStorage.setItem('recipeId', `${result.recipe.id}`)
      localStorage.setItem('recipeDate', `${result.recipe.dateRecipe}`)
      localStorage.setItem('recipeValue', `${result.recipe.value}`)

      this.modal.show(EditRecipeComponent,{
        title: 'Editar Receita',
      }).result()
        .subscribe((result: any) =>{

          console.log(result);

        })
       }))
  }
}
