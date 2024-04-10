import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {

  constructor(private route: Router){}

  logar(form: NgForm){

  }

  register(){
    this.route.navigate(['./register']);
  }
}
