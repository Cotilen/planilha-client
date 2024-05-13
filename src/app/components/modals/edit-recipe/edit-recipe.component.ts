import { Component } from '@angular/core';
import { Recipe } from '../../../service/recipe/recipe';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent {

  receita: Recipe = {
    name: 'Cleiton',
    value: '1000',
    dateRecipe: '20/01/2001'
  }


  constructor(
    private modalRef: ModalReference<{}>,
    private toastr: ToastrService
  ) { }

  nome: any
  value: any
  data: any

  ngOnInit(): void {
    this.nome = localStorage.getItem('recipeName')
    this.value = localStorage.getItem('recipeValue')
    const partesData = localStorage.getItem('recipeDate')?.split('/')

    // partesData ? this.data = new Date(partesData[3] + "-" + partesData[2] + "-" + partesData[1]). : this.data = "0000/00/00"

    console.log(this.data);


  }

  cadastrar(form: NgForm){
  }

  cancelar(){
    this.modalRef.cancel()
  }

}
