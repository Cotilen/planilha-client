import { Component } from '@angular/core';
import { ModalReference } from '@developer-partners/ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { FixedexpenseService } from '../../../../service/fixedexpense/fixedexpense.service';

@Component({
  selector: 'app-confirmacao-despesa',
  templateUrl: './confirmacao-despesa.component.html',
  styleUrl: './confirmacao-despesa.component.css'
})
export class ConfirmacaoDespesaFixaComponent {
  constructor(
    private modalRef: ModalReference<{}>,
    private toastr: ToastrService,
    private service: FixedexpenseService,
  ) { }

  id:any

  ngOnInit(): void {
    this.id = localStorage.getItem('expenseId')

  }

  cancelar(){
    this.modalRef.cancel()
  }

  excluir(){
    this.service.deleteExpense(this.id).subscribe((result =>{
      this.toastr.success('Excluido com sucesso!', 'Sucesso!',{
        progressBar: true
      })
      this.modalRef.closeSuccess(true)
    }))
  }
}