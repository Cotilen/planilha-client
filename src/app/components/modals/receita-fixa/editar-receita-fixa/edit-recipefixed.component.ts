import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalReference, ModalService } from '@developer-partners/ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { addHours } from 'date-fns';
import { FixedRecipe } from '../../../../service/fixedrecipe/fixedRecipe';
import { FixedrecipeService } from '../../../../service/fixedrecipe/fixedrecipe.service';
import { ConfirmacaoFixaComponent } from '../confirmacao-receita-fixa/confirmacao-fixa.component';

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
      const data =partesData.split('/')

      let diaInicial = Number(data[0])
      let mesInicial = Number(data[1])
      let anoInicial = Number(data[2])

      const diaFormatado = (diaInicial < 10) ? `0${diaInicial}` : diaInicial;
      const mesFormatado = (mesInicial < 10) ? `0${mesInicial}` : mesInicial;

      this.data = `${anoInicial}-${mesFormatado}-${diaFormatado}`
    }


    if (dataFinal) {
      const date = dataFinal.split('/')

      let dia = Number(date[0])
      let mes = Number(date[1])
      let ano = Number(date[2])

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
