import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalReference, ModalService } from '@developer-partners/ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../../service/category/category.service';
import { FixedexpenseService } from '../../../../service/fixedexpense/fixedexpense.service';
import { FixedExpense } from '../../../../service/fixedexpense/fixedexpense';
import { addHours } from 'date-fns';
import { ConfirmacaoDespesaFixaComponent } from '../confirmacao-despesa/confirmacao-despesa.component';

@Component({
  selector: 'app-editar-despesa-fixa',
  templateUrl: './editar-despesa-fixa.component.html',
  styleUrl: './editar-despesa-fixa.component.css'
})
export class EditarDespesaFixaComponent {

  constructor(
    private modalRef: ModalReference<{}>,
    private toastr: ToastrService,
    private modal: ModalService,
    private serviceCategory: CategoryService,
    private service: FixedexpenseService
  ) { }

  despesa: FixedExpense = {
    name: '',
    description: '',
    value: 0,
    dateExpense: '',
    finalDate: '',
    id_category: 0
  }

  descricao: any
  categorias = [{ id: 1, name: "" }]
  idCategory: any
  nameCategory: any
  nome: any
  value: any
  data: any
  dataFinal: any
  id: any

  ngOnInit(): void {
    this.id = localStorage.getItem('fixedExpenseId')
    this.nome = localStorage.getItem('fixedExpenseName')
    this.value = localStorage.getItem('fixedExpenseValue')
    this.idCategory = localStorage.getItem('fixedExpenseCategory')
    this.descricao = localStorage.getItem('fixedExpenseDescription')

    const partesDataRaw = localStorage.getItem('expenseDate');
    const partesData = partesDataRaw ? partesDataRaw.split('/') : null;

    if (partesData) {
      const ano = partesData[2]
      const mes = partesData[1]
      const dia = partesData[0]

      this.data = `${ano}-${mes}-${dia}`
    }

    const dataFinal = localStorage.getItem("fixedExpenseFinalDate")

    console.log(dataFinal);

    if (dataFinal) {
      const date = new Date(dataFinal)

      let gmt = addHours(date, 3)
      let dia = gmt.getDate()
      let mes = gmt.getMonth() + 1
      let ano = gmt.getFullYear()

      const diaFormatado = (dia < 10) ? `0${dia}` : dia;
      const mesFormatado = (mes < 10) ? `0${mes}` : mes;

      if(!isNaN(dia)){
        this.dataFinal = `${ano}-${mesFormatado}-${diaFormatado}`
      }
    }

    this.serviceCategory.getCategory().subscribe(result => {
      this.categorias = result.category
    })
  }

  editar(form: NgForm) {
    if (form.valid) {
      this.despesa.dateExpense = form.value['date']
      this.despesa.id_category = form.value['category']
      this.despesa.description = form.value['description']
      this.despesa.name = form.value['name']
      this.despesa.value = form.value['valor']
      this.despesa.finalDate = form.value['dateFinal']

      const inicial = new Date(this.despesa.dateExpense)
      const final = new Date(form.value.dateFinal)

      if (inicial > final) {
        this.toastr.error('A data final deve ser maior que a data inicial!', 'Erro!', {
          progressBar: true
        })
      } else {
        console.log(this.despesa);

        this.service.patchExpense(this.id, this.despesa).subscribe((result => {
          this.modalRef.closeSuccess(true)
        }))
      }
    } else {
      this.toastr.error('Formulário inválido!', 'Erro!', {
        progressBar: true
      })
    }

  }
  cancelar() {
    this.modalRef.cancel()
  }
  excluir() {
    this.modal.show(ConfirmacaoDespesaFixaComponent,{
      title: 'Excluir Despesa',
    }).result()
      .subscribe((result: any) =>{
        if(result){
          this.modalRef.closeSuccess(true)
        }
      })
   }
}
