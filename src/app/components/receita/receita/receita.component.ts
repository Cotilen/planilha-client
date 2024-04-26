import { Component } from '@angular/core';
import { RecipeService } from '../../../service/recipe/recipe.service';
import { ItemLista } from '../../../service/lista';
import { Chart } from 'chart.js';
import { FixedrecipeService } from '../../../service/fixedrecipe/fixedrecipe.service';
import { addHours } from 'date-fns';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrl: './receita.component.css'
})

export class ReceitaComponent {

  constructor(
    private service: RecipeService,
    private recipeService: FixedrecipeService
  ){}

  id = Number(localStorage.getItem('id'))
  lista : ItemLista[] = []

  ngOnInit(): void {
    this.listRecipe()
    // this.valuePizzaChart()
  }

  ngAfterViewInit(): void {
    let value = [0]
    value.pop()

    this.service.getRecipes(this.id).subscribe(recipes =>{
      let valueReceita = 0
      let valueFixedReceita = 0
      let dataAtual = new Date().getMonth() + 1

      recipes.recipe.forEach(recipe =>{
        const partesData = recipe.dateRecipe.split('/');
        const date = new Date(Number(partesData[2]), Number(partesData[1]) - 1, Number(partesData[0]))
        let gmt = addHours(date, 3)
        let mes = gmt.getMonth() + 1

        if(mes == dataAtual){
          valueReceita += Number(recipe.value)
        }
      })

    this.recipeService.getRecipes(this.id).subscribe(recipes =>{
      recipes.recipe.forEach(recipe =>{

        const partesData = recipe.dateRecipe.split('/');
        const date = new Date(Number(partesData[2]), Number(partesData[1]) - 1, Number(partesData[0]))
        let gmt = addHours(date, 3)
        let mes = gmt.getMonth() + 1

        if(mes >= dataAtual){
          valueFixedReceita += Number(recipe.value)
        }


      value.push(valueReceita)
      value.push(valueFixedReceita)
      })


    })

    })

    setTimeout(() => {
      this.pizzaChart(value);
    }, 100); // Aguarda um curto período para garantir que a view esteja pronta
  }


  listRecipe(){

    this.service.getRecipes(this.id).subscribe(recipes =>{
      recipes.recipe.forEach(recipe =>{
        this.lista.push({nome: `${recipe.name}`, valor: Number(recipe.value), data: `${recipe.dateRecipe}`})
      })

    })

  }

  pizzaChart(value: number[]){

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

  switchMeses(date: number){
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
}
