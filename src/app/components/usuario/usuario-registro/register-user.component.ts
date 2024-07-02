import { Component, ElementRef } from '@angular/core';
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

  eyeImage: string = '../../../../assets/img/eye-slash.png';
  eyeImageConfirm: string = '../../../../assets/img/eye-slash.png';
  display: string = "none"

  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService,
    private elementRef: ElementRef

  ){}

ngOnInit(): void {}

async cadastrar(form: NgForm) {
  if(form.value.email !== form.value.confirmEmail){
    this.toastr.error('O email e a confirmação devem ser iguais!', 'Erro!',{
      progressBar: true
    })
  }

  if(form.value.password !== form.value.confirmPassword){
    this.toastr.error('A senha e a confirmação devem ser iguais!', 'Erro!',{
      progressBar: true
    })
  }

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

trocarVisibilidade(){
  const input = this.elementRef.nativeElement.querySelector('#password')
  input.type = input.type == 'password' ? 'text' : 'password'

  const eye = this.elementRef.nativeElement.querySelector('#eye')
  this.eyeImage = (this.eyeImage === '../../../../assets/img/eye-slash.png')
  ? '../../../../assets/img/eye.png'
  : '../../../../assets/img/eye-slash.png'

}

trocarVisibilidadeConfirm(){
  const input = this.elementRef.nativeElement.querySelector('#confirmPassword')
  input.type = input.type == 'password' ? 'text' : 'password'

  const eye = this.elementRef.nativeElement.querySelector('#eyeConfirm')
  this.eyeImageConfirm = (this.eyeImageConfirm === '../../../../assets/img/eye-slash.png')
  ? '../../../../assets/img/eye.png'
  : '../../../../assets/img/eye-slash.png'

}


}


