import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './components/user/register-user/register-user.component';
import { LoginUserComponent } from './components/user/login-user/login-user.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';

export const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'register', component: RegisterUserComponent},
  {path:'login', component: LoginUserComponent},
  {path:'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
