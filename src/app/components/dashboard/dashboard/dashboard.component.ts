import { Component, ElementRef } from '@angular/core';
import { UserService } from '../../../service/user/user.service';
import { Chart } from 'chart.js/auto';
import { addHours } from 'date-fns';
import { UserRecipe } from '../../../service/user/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(
    private userService: UserService,
    private elementRef: ElementRef
  ) { }

  id = Number(localStorage.getItem('id'))
  background = ""

  valueReceitaDash = 0
  valueDespesaDash = 0
  valueSaldo = 0
  valueData = 0

  dataReceita = ""
  dataDespesa = ""
  valueReceita = ""
  valueDespesa = ""
  quantidadeReceita = 0
  quantidadeDespesa = 0

  ngOnInit(): void {
    this.getValueDashboard()
    this.getValueChartTrimestral()
    this.getLastValues()
  }


  getValueDashboard() {
    const date = new Date()
    const month = date.getMonth() + 1

    this.userService.getDataDashboard(this.id, month).subscribe(data => {
      //Verifica se as receitas não estão vazias e adiciona à tela
      if(data.recipe.length > 0){
        data.recipe.map((recipe) => {
          this.valueReceitaDash += recipe.value
        })
      }
      //Verifica se as receitas fixas não estão vazias e adiciona à tela
      if(data.fixedrecipe.length > 0){

        data.fixedrecipe.map((fixedrecipe) => {
        let data = new Date(fixedrecipe.dateRecipe).getMonth() + 1
        let dataAtual = new Date().getMonth() + 1
          if(dataAtual >= data ){
            this.valueReceitaDash += fixedrecipe.value
          }

        })
      }
      //Verifica se as despesas não estão vazias e adiciona à tela
      if(data.expense.length > 0){
        data.expense.map(expense =>{
          this.valueDespesaDash += expense.value
        })
      }
      //Verifica se as despesas fixas não estão vazias e adiciona à tela
      if(data.fixedexpense.length > 0){
        data.fixedexpense.map(fixedexpense =>{
          let data = new Date(fixedexpense.dateExpense).getMonth() + 1
          let dataAtual = new Date().getMonth() + 1

          if(dataAtual >= data ){
            this.valueDespesaDash += fixedexpense.value
          }
        })
      }
      this.valueSaldo = this.valueReceitaDash - this.valueDespesaDash
      this.valueData = date.getDate()
      this.background = this.valueSaldo > 0 ? "var(--green-color)" : "var(--red-color)"
    }
    )

  }

  getValueChartTrimestral() {
    const date = new Date()
    const year = date.getFullYear()

    let arrayExpense = [0]
    let arrayRecipe = [0]

    arrayRecipe.shift()


    this.userService.getDataGrafico(this.id, year).subscribe(data => {
      let primeiro = 0
      let segundo = 0
      let terceiro = 0
      let quarto = 0

      let primeiroRecipe = 0
      let segundoRecipe = 0
      let terceiroRecipe = 0
      let quartoRecipe = 0

      data.expense.map(expense =>{
        let data = new Date(expense.data)
        let mes = addHours(data, 3)

        if(mes.getMonth() + 1 == 1 || mes.getMonth() + 1 == 2 || mes.getMonth() + 1 == 3){
          primeiro = primeiro + expense.value
        }else if(mes.getMonth() + 1 == 4 || mes.getMonth() + 1 == 5 || mes.getMonth() + 1 == 6){
          segundo = segundo + expense.value
        }else if(mes.getMonth() + 1 == 7 || mes.getMonth() + 1 == 8 || mes.getMonth() + 1 == 9){
          terceiro = terceiro + expense.value
        }else{
          quarto = quarto + expense.value
        }

      })

      data.fixedexpense.map(expense =>{
        const date = new Date(expense.dateExpense).getMonth() + 1

        switch (date) {
          case 1:
            primeiro += (expense.value * 3)
            segundo += (expense.value * 3)
            terceiro += (expense.value * 3)
            quarto += (expense.value * 3)
            break;
          case 2:
            primeiro += (expense.value * 2)
            segundo += (expense.value * 3)
            terceiro += (expense.value * 3)
            quarto += (expense.value * 3)
            break;
          case 3:
            primeiro += (expense.value)
            segundo += (expense.value * 3)
            terceiro += (expense.value * 3)
            quarto += (expense.value * 3)
            break;
          case 4:
            segundo += (expense.value * 3)
            terceiro += (expense.value * 3)
            quarto += (expense.value * 3)
            break;
          case 5:
            segundo += (expense.value * 2)
            terceiro += (expense.value * 3)
            quarto += (expense.value * 3)
            break;
          case 6:
            segundo += (expense.value)
            terceiro += (expense.value * 3)
            quarto += (expense.value * 3)
            break;
          case 7:
            terceiro += (expense.value * 3)
            quarto += (expense.value * 3)
            break;
          case 8:
            terceiro += (expense.value * 2)
            quarto += (expense.value * 3)
            break;
          case 9:
            terceiro += (expense.value)
            quarto += (expense.value * 3)
            break;
          case 10:
            quarto += (expense.value * 3)
            break;
          case 11:
            quarto += (expense.value * 2)
            break;
          case 12:
            quarto += (expense.value)
            break;
        }


      })

      data.recipe.map(recipe => {
        let data = new Date(recipe.data)
        let mes = addHours(data, 3)

        if(mes.getMonth() + 1 == 1 || mes.getMonth() + 1 == 2 || mes.getMonth() + 1 == 3){
          primeiroRecipe = primeiroRecipe + recipe.value
        }else if(mes.getMonth() + 1 == 4 || mes.getMonth() + 1 == 5 || mes.getMonth() + 1 == 6){
          segundoRecipe = segundoRecipe + recipe.value
        }else if(mes.getMonth() + 1 == 7 || mes.getMonth() + 1 == 8 || mes.getMonth() + 1 == 9){
          terceiroRecipe = terceiroRecipe + recipe.value
        }else{
          quartoRecipe = quartoRecipe + recipe.value
        }
      })

      data.fixedrecipe.map(recipe => {
        const date = new Date(recipe.dateRecipe).getMonth() + 1

        switch (date) {
          case 1:
            primeiroRecipe += (recipe.value * 3)
            segundoRecipe += (recipe.value * 3)
            terceiroRecipe += (recipe.value * 3)
            quartoRecipe += (recipe.value * 3)
            break;
          case 2:
            primeiroRecipe += (recipe.value * 2)
            segundoRecipe += (recipe.value * 3)
            terceiroRecipe += (recipe.value * 3)
            quartoRecipe += (recipe.value * 3)
            break;
          case 3:
            primeiroRecipe += (recipe.value)
            segundoRecipe += (recipe.value * 3)
            terceiroRecipe += (recipe.value * 3)
            quartoRecipe += (recipe.value * 3)
            break;
          case 4:
            segundoRecipe += (recipe.value * 3)
            terceiroRecipe += (recipe.value * 3)
            quartoRecipe += (recipe.value * 3)
            break;
          case 5:
            segundoRecipe += (recipe.value * 2)
            terceiroRecipe += (recipe.value * 3)
            quartoRecipe += (recipe.value * 3)
            break;
          case 6:
            segundoRecipe += (recipe.value)
            terceiroRecipe += (recipe.value * 3)
            quartoRecipe += (recipe.value * 3)
            break;
          case 7:
            terceiroRecipe += (recipe.value * 3)
            quartoRecipe += (recipe.value * 3)
            break;
          case 8:
            terceiroRecipe += (recipe.value * 2)
            quartoRecipe += (recipe.value * 3)
            break;
          case 9:
            terceiroRecipe += (recipe.value)
            quartoRecipe += (recipe.value * 3)
            break;
          case 10:
            quartoRecipe += (recipe.value * 3)
            break;
          case 11:
            quartoRecipe += (recipe.value * 2)
            break;
          case 12:
            quartoRecipe += (recipe.value)
            break;
        }

      })
      arrayExpense.push(primeiro)
      arrayExpense.push(segundo)
      arrayExpense.push(terceiro)
      arrayExpense.push(quarto)

      arrayRecipe.push(primeiroRecipe)
      arrayRecipe.push(segundoRecipe)
      arrayRecipe.push(terceiroRecipe)
      arrayRecipe.push(quartoRecipe)

      arrayExpense.shift()

    })


    this.chartTrimestral(arrayExpense, arrayRecipe)

  }

  chartTrimestral(despesa: {}[], receita: {}[]) {

    Chart.defaults.color= '#fff'

    let chart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['1ºTri', '2ºTri', '3ºTri', '4ºTri'],
        datasets: [{
          label: 'Receita',
          data: receita,
          borderWidth: 1,
          backgroundColor: '#01B574',
          borderRadius: 10,
        },
        {
          label: 'Despesa',
          data: despesa,
          borderWidth: 1,
          backgroundColor: '#F54A4A',
          borderRadius: 10
        }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Receitas X Despesas Trimestral'
          }
        }
      },
    });

  }

  getLastValues(){
    const date = new Date()
    const month = date.getMonth() + 1

    this.userService.getDataDashboard(this.id, month).subscribe(data => {

      let dataMaiorRecipe = new Date(data.recipe[0].data)
      let dadosRecipe = data.recipe[0]

      data.recipe.forEach(recipe =>{

        let date = new Date(recipe.data)

        if(date > dataMaiorRecipe){
          dadosRecipe = recipe
        }

      })

      let dataReceita = new Date(dadosRecipe.data)
      let mesReceita = addHours(dataReceita, 3)

      let dataMaiorExpense = new Date(data.expense[0].data)
      let dadosExpense = data.expense[0]

      data.expense.forEach(expense =>{

        let date = new Date(expense.data)

        if(date > dataMaiorExpense){
          dadosExpense = expense
        }

      })

      let dataDespesa = new Date(dadosExpense.data)
      let mesDespesa = addHours(dataDespesa, 3)

      this.dataReceita = mesReceita.getDate() + "/" + (mesReceita.getMonth() + 1)
      this.valueReceita = `R$ ${dadosRecipe.value}`
      this.dataDespesa = mesDespesa.getDate() + "/" + (mesDespesa.getMonth() + 1)
      this.valueDespesa = `R$ ${dadosExpense.value}`
      this.quantidadeDespesa = data.expense.length + data.fixedexpense.length
      this.quantidadeReceita = data.recipe.length + data.fixedrecipe.length


    })
  }

}
