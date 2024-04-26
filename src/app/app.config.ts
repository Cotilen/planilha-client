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
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ValorRetangularComponent } from './components/valor-retangular/valor-retangular.component';
import { Chart } from 'chart.js/dist';
import { QuantidadeValoresComponent } from './components/dashboard/quantidade-valores/quantidade-valores.component';
import { ReceitaComponent } from './components/receita/receita/receita.component';
import { ListaComponent } from './components/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    MensagemComponent,
    LoginUserComponent,
    DashboardComponent,
    HeaderComponent,
    ValorRetangularComponent,
    QuantidadeValoresComponent,
    ReceitaComponent,
    ListaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
