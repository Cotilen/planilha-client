import { Expense } from './../../../../service/expense/expense';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalReference, ModalService } from '@developer-partners/ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../../service/category/category.service';
import { ExpenseService } from '../../../../service/expense/expense.service';
import { ConfirmacaoDespesaComponent } from '../confirmacao-despesa/confirmacao-despesa.component';

@Component({
  selector: 'app-editar-despesa',
  templateUrl: './editar-despesa.component.html',
  styleUrl: './editar-despesa.component.css'
})
export class EditarDespesaComponent {

  despesa:Expense = {
    name: '',
    description: '',
    value: 0,
    dateExpense: '',
    id_category: 0
  }

  constructor(
    private modalRef: ModalReference<{}>,
    private toastr: ToastrService,
    private modal: ModalService,
    private serviceCategory: CategoryService,
    private service: ExpenseService
  )
    {}

  descricao: any
  categorias = [{id: 1, name: ""}]
  idCategory: any
  nameCategory: any
  nome: any
  value: any
  data: any
  id: any

    ngOnInit(): void {
      this.id = localStorage.getItem('expenseId')
      this.nome = localStorage.getItem('expenseName')
      this.value = localStorage.getItem('expenseValue')
      this.idCategory = localStorage.getItem('expenseCategory')
      this.descricao = localStorage.getItem('expenseDescription')

      const partesDataRaw = localStorage.getItem('expenseDate');
      const partesData = partesDataRaw ? partesDataRaw.split('/') : null;

      if (partesData) {
        const ano = partesData[2]
        const mes = partesData[1]
        const dia = partesData[0]

        this.data = `${ano}-${mes}-${dia}`
      }

      this.serviceCategory.getCategory().subscribe(result =>{
        this.categorias = result.category
      })

  }

  editar(form: NgForm){
    if(form.valid){
      this.despesa.dateExpense = form.value['date']
      this.despesa.id_category = form.value['category']
      this.despesa.description = form.value['description']
      this.despesa.name = form.value['name']
      this.despesa.value = form.value['valor']

      this.service.patchExpense(this.id,this.despesa).subscribe(result =>{
        this.modalRef.closeSuccess(true)
      })
    }else{
      this.toastr.error('Preencha todos os campos!', 'Erro!',{
        progressBar: true
      })
    }
  }
  cancelar(){
    this.modalRef.cancel()
  }
  excluir(){
    this.modal.show(ConfirmacaoDespesaComponent,{
      title: 'Excluir Despesa',
    }).result()
      .subscribe((result: any) =>{
        if(result){
          this.modalRef.closeSuccess(true)
        }
      })
  }
}
