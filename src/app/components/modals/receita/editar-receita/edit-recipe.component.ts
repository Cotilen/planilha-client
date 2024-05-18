import { Component } from '@angular/core';
import { ModalReference, ModalService } from '@developer-partners/ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Recipe } from '../../../../service/recipe/recipe';
import { RecipeService } from '../../../../service/recipe/recipe.service';
import { ConfimacaoComponent } from '../confirmacao-receita/confimacao.component';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent {

  receita: Recipe = {
    name: 'Receita',
    value: '1000',
    dateRecipe: '20/01/2001'
  }


  constructor(
    private modalRef: ModalReference<{}>,
    private toastr: ToastrService,
    private modal: ModalService,
    private service: RecipeService
  ) { }

  id: any
  nome: any
  value: any
  data: any

  ngOnInit(): void {
    this.id = localStorage.getItem('recipeId')
    this.nome = localStorage.getItem('recipeName')
    this.value = localStorage.getItem('recipeValue')

    const partesDataRaw = localStorage.getItem('recipeDate');
    const partesData = partesDataRaw ? partesDataRaw.split('/') : null;

    if (partesData) {
      const ano = partesData[2]
      const mes = partesData[1]
      const dia = partesData[0]

      this.data = `${ano}-${mes}-${dia}`
    }
  }

  editar(form: NgForm){
    this.receita.name = form.value.name
    this.receita.value = form.value.valor
    this.receita.dateRecipe = form.value.date

    this.service.patchRecipe(this.id, this.receita).subscribe((result =>{
      this.modalRef.closeSuccess(true)
    }))
  }

  cancelar(){
    this.modalRef.cancel()
  }

  excluir(){
    this.modal.show(ConfimacaoComponent,{
      title: 'Excluir Receita',
    }).result()
      .subscribe((result: any) =>{
        if(result){
          this.modalRef.closeSuccess(true)
        }
      })
  }
}
