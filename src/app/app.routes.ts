import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './components/usuario/usuario-registro/register-user.component';
import { LoginUserComponent } from './components/usuario/usuario-login/login-user.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ReceitaComponent } from './components/receita/receita/receita.component';
import { DespesaComponent } from './components/despesa/despesa.component';

export const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'register', component: RegisterUserComponent},
  {path:'login', component: LoginUserComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'receita', component: ReceitaComponent},
  {path:'despesa', component: DespesaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
