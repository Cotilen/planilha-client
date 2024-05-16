import { Component } from '@angular/core';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { RecipeService } from '../../../service/recipe/recipe.service';

@Component({
  selector: 'app-confimacao',
  templateUrl: './confimacao.component.html',
  styleUrl: './confimacao.component.css'
})
export class ConfimacaoComponent {

  constructor(
    private modalRef: ModalReference<{}>,
    private toastr: ToastrService,
    private service: RecipeService,
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
