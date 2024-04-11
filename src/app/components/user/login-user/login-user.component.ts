import { Component, ViewChild } from '@angular/core';
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

  display: string = "none"

  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {
  }



  logar(form: NgForm) {

    if (form.valid) {
      this.userService.login(form.value).subscribe(
        (user) => {
          console.log(user); // Aqui você recebe os dados do usuário
          this.toastr.success('Login efetuado com sucesso!', 'Sucesso!')
        },
        (error) => {
          if (error.status) {
            this.display = 'block'
          this.toastr.error('', 'Erro!')
          }
        }
      );
    } else {
      alert("Usuário não encontrado");
    }
  }

  register(){
    this.router.navigate(['./register']);
  }
}
