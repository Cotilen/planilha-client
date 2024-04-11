import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ){}

ngOnInit(): void {}

async cadastrar(form: NgForm) {
  if (form.valid) {
    this.userService.create(form.value).subscribe(() =>{
      this.toastr.success('Usuário cadastrado com sucesso!', 'Sucesso!',{
        progressBar: true
      })
      this.router.navigate(["./login"]);
    })
  } else {
    this.toastr.error('Formulário inválido!', 'Erro!',{
      progressBar: true
    })
  }
}

login(){
  this.router.navigate(["./login"]);
}

}


