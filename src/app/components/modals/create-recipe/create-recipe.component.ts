import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { Recipe } from '../../../service/recipe/recipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.css'
})
export class CreateRecipeComponent {
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
