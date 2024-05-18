import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { Expense } from '../../../../service/expense/expense';
import { CategoryService } from '../../../../service/category/category.service';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrl: './create-expense.component.css'
})
export class CreateExpenseComponent {

  categorias = [{id: 1, name: ""}]

  despesa: Expense = {
    name: 'Cleiton',
    dateExpense: '20/01/2001',
    description: "",
    value: 1000,
    id_category: 1
  }

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
