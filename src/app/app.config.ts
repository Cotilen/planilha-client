import { ApplicationConfig, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterUserComponent } from './components/user/register-user/register-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { LoginUserComponent } from './components/user/login-user/login-user.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SaldoDiarioComponent } from './dashboard/saldo-diario/saldo-diario.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    MensagemComponent,
    LoginUserComponent,
    DashboardComponent,
    HeaderComponent,
    SaldoDiarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
