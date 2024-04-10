import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  formulario!: NgForm;

  constructor(
    private router: Router,
    private userService: UserService,
  ){}

ngOnInit(): void {}

async cadastrar(form: NgForm) {
  if (form.valid) {
    this.userService.create(form.value).subscribe(() =>{
      this.router.navigate(["./login"]);
    })
  } else {
    alert("Formulario Invalido");
  }
}

login(){
  this.router.navigate(["./login"]);
}

}


