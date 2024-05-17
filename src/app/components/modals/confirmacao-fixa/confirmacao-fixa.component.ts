import { Component } from '@angular/core';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { RecipeService } from '../../../service/recipe/recipe.service';
import { FixedrecipeService } from '../../../service/fixedrecipe/fixedrecipe.service';

@Component({
  selector: 'app-confirmacao-fixa',
  templateUrl: './confirmacao-fixa.component.html',
  styleUrl: './confirmacao-fixa.component.css'
})
export class ConfirmacaoFixaComponent {
  constructor(
    private modalRef: ModalReference<{}>,
    private toastr: ToastrService,
    private service: FixedrecipeService,
  ) { }

  id:any

  ngOnInit(): void {
    this.id = localStorage.getItem('recipeId')

  }

  cancelar(){
    this.modalRef.cancel()
  }

  excluir(){
    this.service.deleteRecipe(this.id).subscribe((result =>{
      this.toastr.success('Excluido com sucesso!', 'Sucesso!',{
        progressBar: true
      })
      this.modalRef.closeSuccess(true)
    }))
  }

}
