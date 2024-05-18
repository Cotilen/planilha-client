import { Component } from '@angular/core';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Recipe } from '../../../../service/recipe/recipe';

@Component({
  selector: 'app-create-recipefixed',
  templateUrl: './create-recipefixed.component.html',
  styleUrl: './create-recipefixed.component.css'
})
export class CreateRecipefixedComponent {
  receita: Recipe = {
    name: 'Cleiton',
    value: '1000',
    dateRecipe: '20/01/2001'
  }

  constructor(
    private modalRef: ModalReference<{}>,
    private toastr: ToastrService
  ) { }

  cadastrar(form: NgForm){
    if(form.valid){
      this.receita.name = form.value.name
      this.receita.value = form.value.valor
      this.receita.dateRecipe = form.value.date

      this.modalRef.closeSuccess(form.value)
    }else{
      this.toastr.error('Formulário inválido!', 'Erro!',{
        progressBar: true
      })
    }
  }

  cancelar(){
    this.modalRef.cancel()
  }
}
