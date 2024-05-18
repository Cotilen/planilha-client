import { Component } from '@angular/core';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../../../service/category/category.service';

@Component({
  selector: 'app-create-expensefixed',
  templateUrl: './create-expensefixed.component.html',
  styleUrl: './create-expensefixed.component.css'
})
export class CreateExpensefixedComponent {
  categorias = [{id: 1, name: ""}]

  constructor(
    private modalRef: ModalReference<{}>,
    private toastr: ToastrService,
    private category: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategory()
  }

  getCategory(){
    this.category.getCategory().subscribe(result => {
      this.categorias = result.category;
    })
  }

  cadastrar(form: NgForm){

    if(form.valid){
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
