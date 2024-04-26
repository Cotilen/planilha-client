import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './components/user/register-user/register-user.component';
import { LoginUserComponent } from './components/user/login-user/login-user.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ReceitaComponent } from './components/receita/receita/receita.component';

export const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'register', component: RegisterUserComponent},
  {path:'login', component: LoginUserComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'receita', component: ReceitaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
