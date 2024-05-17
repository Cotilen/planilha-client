import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfimacaoComponent } from '../confimacao/confimacao.component';
import { ModalReference, ModalService } from '@developer-partners/ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { RecipeService } from '../../../service/recipe/recipe.service';
import { addHours } from 'date-fns';
import { FixedRecipe } from '../../../service/fixedrecipe/fixedRecipe';
import { FixedrecipeService } from '../../../service/fixedrecipe/fixedrecipe.service';
import { ConfirmacaoFixaComponent } from '../confirmacao-fixa/confirmacao-fixa.component';

@Component({
  selector: 'app-edit-recipefixed',
  templateUrl: './edit-recipefixed.component.html',
  styleUrl: './edit-recipefixed.component.css'
})
export class EditRecipefixedComponent {
  receita: FixedRecipe = {
    name: 'Receita',
    value: '1000',
    dateRecipe: '20/01/2005',
    finalDate: '20/01/2005'
  }


  constructor(
    private modalRef: ModalReference<{}>,
    private toastr: ToastrService,
    private modal: ModalService,
    private service: FixedrecipeService
  ) { }

  id: any
  nome: any
  value: any
  data: any
  finalDate: any = null

  ngOnInit(): void {
    this.id = localStorage.getItem('recipeId')
    this.nome = localStorage.getItem('recipeName')
    this.value = localStorage.getItem('recipeValue')
    const dataFinal = localStorage.getItem('recipeFinalDate');

    const partesData = localStorage.getItem('recipeDate');

    if (partesData) {
      const data = new Date(partesData)

      let gmt = addHours(data, 3)
      let diaInicial = gmt.getDate()
      let mesInicial = gmt.getMonth() + 1
      let anoInicial = gmt.getFullYear()

      const diaFormatado = (diaInicial < 10) ? `0${diaInicial}` : diaInicial;
      const mesFormatado = (mesInicial < 10) ? `0${mesInicial}` : mesInicial;

      this.data = `${anoInicial}-${mesFormatado}-${diaFormatado}`
    }


    if (dataFinal) {
      const date = new Date(dataFinal)

      let gmt = addHours(date, 3)
      let dia = gmt.getDate()
      let mes = gmt.getMonth() + 1
      let ano = gmt.getFullYear()

      const diaFormatado = (dia < 10) ? `0${dia}` : dia;
      const mesFormatado = (mes < 10) ? `0${mes}` : mes;

      if(!isNaN(dia)){
        this.finalDate = `${ano}-${mesFormatado}-${diaFormatado}`
      }
    }
  }

  editar(form: NgForm){
    this.receita.name = form.value.name
    this.receita.value = form.value.valor
    this.receita.dateRecipe = form.value.date
    this.receita.finalDate = form.value.finalDate

    const inicial = new Date(form.value.date)
    const final = new Date(form.value.finalDate)

    if(inicial > final){
      this.toastr.error('A data final deve ser maior que a data inicial!', 'Erro!',{
        progressBar: true
      })
    }else{
      this.service.patchRecipe(this.id, this.receita).subscribe((result =>{
        this.modalRef.closeSuccess(true)
      }))
    }
  }

  cancelar(){
    this.modalRef.cancel()
  }

  excluir(){
    this.modal.show(ConfirmacaoFixaComponent,{
      title: 'Excluir Receita Fixa',
    }).result()
      .subscribe((result: any) =>{
        if(result){
          this.modalRef.closeSuccess(true)
        }
      })
  }
}
