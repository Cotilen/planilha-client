import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {

  eyeImage: string = '../../../../assets/img/eye-slash.png';
  display: string = "none"


  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService,
    private elementRef: ElementRef
  ){}

  ngOnInit(): void {
  }

  logar(form: NgForm) {

    if (form.valid) {
      this.userService.login(form.value).subscribe(
        (user) => {
          localStorage.setItem('id', `${user.user.id}`);
          this.toastr.success('Login efetuado com sucesso!', 'Sucesso!')
          this.router.navigate(["./dashboard"]);
        },
        (error) => {
          if (error.status) {
            this.display = 'block'
            this.toastr.error('', 'Erro!')
          }
        }
      );
    } else {
      this.toastr.error('Usuário não encontrado!', 'Erro!')
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
}
