import { Component, Input } from '@angular/core';
import { RecipeService } from '../../../service/recipe/recipe.service';
import { FixedrecipeService } from '../../../service/fixedrecipe/fixedrecipe.service';
import { addHours } from 'date-fns';

@Component({
  selector: 'app-lista-unificada',
  templateUrl: './lista-unificada.component.html',
  styleUrl: './lista-unificada.component.css'
})
export class ListaUnificadaComponent {
  id = Number(localStorage.getItem('id'));
  list = [{ id: 0, nome: "", valor: 0, data: "", color: "" }]
  @Input() color = "var(--green-color)"
  mes = "Janeiro"
  valorMes = new Date().getMonth() + 1
  year = new Date().getFullYear()

  constructor(
    private recipe: RecipeService,
    private recipeFixed: FixedrecipeService
  ) { }

  ngOnInit(): void {
    this.encherLista(this.id, this.valorMes)
    this.mes = this.getMonthName(this.valorMes)
  }

  encherLista(id: number, mesAtual: number) {
    this.list = []
    this.recipe.getRecipes(id).subscribe(receita => {
      receita.recipe.map(result => {
        const value = Number(result.value)
        const partesData = (result.dateRecipe.split('/'))


        if (Number(partesData[1]) == mesAtual) {
          this.list.push({ id: result.id ?? 0, nome: result.name ?? "", valor: value ?? 0, data: result.dateRecipe, color:'#01B574' })
        }
      })
    })
    this.recipeFixed.getRecipes(id).subscribe(receita => {
      receita.recipe.map(result => {
        const value = Number(result.value)
        const data = result.dateRecipe.split('/')

        let dia = Number(data[0])
        let mes = Number(data[1])
        let ano = Number(data[2])

        const diaFormatado = (dia < 10) ? `0${dia}` : dia;
        const mesFormatado = (mes < 10) ? `0${mes}` : mes;

        if (result.finalDate == null) {
          if (mes <= mesAtual) {
            this.list.push({ id: result.id ?? 0, nome: result.name ?? "", valor: value ?? 0, data: `${diaFormatado}/${mesFormatado}/${ano}`, color:'#FB5927' })
          }
        } else {
          const dataFinal = result.finalDate.split('/')
          if (mes <= mesAtual && Number(dataFinal[1]) >= mesAtual) {

            this.list.push({ id: result.id ?? 0, nome: result.name ?? "", valor: value ?? 0, data: `${diaFormatado}/${mesFormatado}/${ano}`, color:'#FB5927' })
          }
        }
      })

      this.list.sort((a, b) => {
        const dataA = this.converteData(a.data);
        const dataB = this.converteData(b.data);

        const mesComparacao = dataA.getMonth() - dataB.getMonth();

        if (mesComparacao !== 0) {
          return mesComparacao;
        }

        return dataA.getDate() - dataB.getDate();
      });

    })

  }

  proximoMes() {
    if (this.valorMes == 12) {
      this.year = this.year + 1
      this.valorMes = 1
    } else {
      this.valorMes = this.valorMes + 1
    }
    this.mes = this.getMonthName(this.valorMes)

    this.encherLista(this.id, this.valorMes)
  }

  mesAnterior() {
    if (this.valorMes == 1) {
      this.year = this.year - 1

      this.valorMes = 12
    } else {
      this.valorMes = this.valorMes - 1
    }
    this.mes = this.getMonthName(this.valorMes)
    this.encherLista(this.id, this.valorMes)
  }


  getMonthName(monthNumber: number) {
    let monthName;

    switch (monthNumber) {
      case 1:
        monthName = "Janeiro";
        break;
      case 2:
        monthName = "Fevereiro";
        break;
      case 3:
        monthName = "Março";
        break;
      case 4:
        monthName = "Abril";
        break;
      case 5:
        monthName = "Maio";
        break;
      case 6:
        monthName = "Junho";
        break;
      case 7:
        monthName = "Julho";
        break;
      case 8:
        monthName = "Agosto";
        break;
      case 9:
        monthName = "Setembro";
        break;
      case 10:
        monthName = "Outubro";
        break;
      case 11:
        monthName = "Novembro";
        break;
      case 12:
        monthName = "Dezembro";
        break;
      default:
        monthName = "Mês Inválido";
        break;
    }

    return monthName;
  }

  converteData(dataString: any) {
    const partesData = dataString.split("/");

    const dia = parseInt(partesData[0]);
    const mes = parseInt(partesData[1]) - 1;
    const ano = parseInt(partesData[2]);

    return new Date(ano, mes, dia);
  }
}
