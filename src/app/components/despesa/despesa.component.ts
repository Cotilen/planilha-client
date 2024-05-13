import { Component } from '@angular/core';
import { ExpenseService } from '../../service/expense/expense.service';
import { addHours } from 'date-fns';
import { ItemLista } from '../../service/lista';
import { Chart } from 'chart.js';
import { FixedexpenseService } from '../../service/fixedexpense/fixedexpense.service';
import { ModalService } from '@developer-partners/ngx-modal-dialog';
import { CreateExpenseComponent } from '../modals/create-expense/create-expense.component';
import { Expense } from '../../service/expense/expense';
import { CreateRecipefixedComponent } from '../modals/create-recipefixed/create-recipefixed.component';
import { CreateExpensefixedComponent } from '../modals/create-expensefixed/create-expensefixed.component';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.css'
})
export class DespesaComponent {

  constructor(
    private expense: ExpenseService,
    private fixedExpense: FixedexpenseService,
    private modal: ModalService
  ){}

  ngOnInit(): void {
    this.listExpense()
    this.valueChart()
    this.listExpenseFixed()
  }

  id = Number(localStorage.getItem('id'))
  lista: ItemLista[] = []
  listaFixa: ItemLista[] = []
  value = 0
  valueFixed = 0
  total = 0

  listExpense() {

    this.expense.getExpenses(this.id).subscribe(expense => {
      expense.expense.forEach(expense => {
        const partesData = expense.dateExpense.split('/');
        const date = new Date(partesData[0])

        let gmt = addHours(date, 3)
        let dia = gmt.getDay()
        let mes = gmt.getMonth() + 1
        let ano = gmt.getFullYear()

        const diaFormatado = (dia < 10) ? `0${dia}` : dia;
        const mesFormatado = (mes < 10) ? `0${mes}` : mes;

        let dataAtual = new Date().getMonth() + 1

        if (mes == dataAtual) {
          this.lista.push({id:Number(expense.id) , nome: `${expense.name}`, valor: Number(expense.value), data: `${diaFormatado}/${mesFormatado}/${ano}` })
        }
      })
    })
  }

  listExpenseFixed() {

    this.fixedExpense.getExpenses(this.id).subscribe(expenses => {
      expenses.expense.forEach(expense => {
        const partesData = expense.dateExpense.split('/');
        const date = new Date(partesData[0])

        let gmt = addHours(date, 3)
        let dia = gmt.getDay()
        let mes = gmt.getMonth() + 1
        let ano = gmt.getFullYear()

        const diaFormatado = (dia < 10) ? `0${dia}` : dia;
        const mesFormatado = (mes < 10) ? `0${mes}` : mes;

        let dataAtual = new Date().getMonth() + 1

        if (mes <= dataAtual) {
          this.listaFixa.push({id:Number(expense.id) , nome: `${expense.name}`, valor: Number(expense.value), data: `${diaFormatado}/${mesFormatado}/${ano}` })
        }
      })
    })
  }

  valueChart(){
    let value = [0]
    value.pop()

    this.expense.getExpenses(this.id).subscribe(expense => {
      let valueExpense = 0
      let valueFixedExpense = 0
      let dataAtual = new Date().getMonth() + 1

      expense.expense.forEach(expense => {
        const partesData = expense.dateExpense.split('/');
        const date = new Date(partesData[0])

        let gmt = addHours(date, 3)
        let mes = gmt.getMonth() + 1

        if (mes == dataAtual) {
          valueExpense += Number(expense.value)
        }
      })

      this.fixedExpense.getExpenses(this.id).subscribe(expenses => {
        expenses.expense.forEach(expense => {
          let partesData = expense.dateExpense.split('/');
          let date = new Date(partesData[0]);

          let gmt = addHours(date, 3)
          let mes = gmt.getMonth() + 1

          if (mes <= dataAtual) {
            valueFixedExpense += Number(expense.value)
          }

        })

        this.value = valueExpense
        this.valueFixed = valueFixedExpense
        this.total = this.value + this.valueFixed

        value.push(valueExpense)
        value.push(valueFixedExpense)

      })

    })

    setTimeout(() => {
      this.pizzaChart(value);
    }, 100); // Aguarda um curto período para garantir que a view esteja pronta
  }

  pizzaChart(value: number[]) {

    let date = new Date().getMonth() + 1
    let mes = this.switchMeses(date)

    Chart.defaults.color = '#fff'

    let chart = new Chart('pizza', {
      type: 'doughnut',
      data: {
        labels: ['Despesa', 'Despesa Fixa'],
        datasets: [{
          label: mes,
          data: value,
          backgroundColor: [
            '#F54A4A',
            '#FB5927',
          ],
          borderColor: [
            '#F54A4A',
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

  openModalExpense(){
    this.modal.show(CreateExpenseComponent,{
      title: 'Criar Despesa',
    }).result()
      .subscribe((result: any) =>{
        const expense: Expense = result as Expense;

        var despesa = {
          id_user: this.id ,
          name: result.name,
          value: result.valor,
          dateExpense: result.date,
          id_category: Number(result.category),
          description: result.description
        }

        this.expense.postExpenses(despesa).subscribe(result =>{

          window.location.reload();
        })
      })
  }

  openModalExpenseFixed(){
    this.modal.show(CreateExpensefixedComponent,{
      title: 'Criar Despesa Fixa',
    }).result()
      .subscribe((result: any) =>{
        const expense: Expense = result as Expense;
        var despesa = {
          id_user:this.id ,
          name: result.name,
          value: result.valor,
          dateExpense: result.date,
          id_category: Number(result.category),
          description: result.description
        }
        this.fixedExpense.postExpenses(despesa).subscribe((result) =>{
          window.location.reload();
        })
      })
  }
}
