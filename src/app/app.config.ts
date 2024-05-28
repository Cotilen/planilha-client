import { ApplicationConfig, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterUserComponent } from './components/usuario/usuario-registro/register-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { LoginUserComponent } from './components/usuario/usuario-login/login-user.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ValorRetangularComponent } from './components/valor-retangular/valor-retangular.component';
import { Chart } from 'chart.js/dist';
import { QuantidadeValoresComponent } from './components/dashboard/quantidade-valores/quantidade-valores.component';
import { ReceitaComponent } from './components/receita/receita/receita.component';
import { ListaComponent } from './components/lista/lista.component';
import { DespesaComponent } from './components/despesa/despesa.component';
import { ModalModule } from '@developer-partners/ngx-modal-dialog';
import { CreateRecipeComponent } from './components/modals/receita/criar-receita/create-recipe.component';
import { CreateRecipefixedComponent } from './components/modals/receita-fixa/criar-receita-fixa/create-recipefixed.component';
import { CreateExpenseComponent } from './components/modals/despesa/criar-despesa/create-expense.component';
import { CreateExpensefixedComponent } from './components/modals/despesa-fixa/criar-despesa-fixa/create-expensefixed.component';
import { EditRecipeComponent } from './components/modals/receita/editar-receita/edit-recipe.component';
import { ConfimacaoComponent } from './components/modals/receita/confirmacao-receita/confimacao.component';
import { EditRecipefixedComponent } from './components/modals/receita-fixa/editar-receita-fixa/edit-recipefixed.component';
import { ConfirmacaoFixaComponent } from './components/modals/receita-fixa/confirmacao-receita-fixa/confirmacao-fixa.component';
import { EditarDespesaComponent } from './components/modals/despesa/editar-despesa/editar-despesa.component';
import { EditarDespesaFixaComponent } from './components/modals/despesa-fixa/editar-despesa-fixa/editar-despesa-fixa.component';
import { ConfirmacaoDespesaFixaComponent } from './components/modals/despesa-fixa/confirmacao-despesa/confirmacao-despesa.component';
import { ConfirmacaoDespesaComponent } from './components/modals/despesa/confirmacao-despesa/confirmacao-despesa.component';
import { ListaUnificadaComponent } from './components/receita/lista-unificada/lista-unificada.component';
import { ListaUnificadaDespesaComponent } from './components/despesa/lista-unificada-despesa/lista-unificada-despesa.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
    ListaComponent,
    DespesaComponent,
    CreateRecipeComponent,
    CreateRecipefixedComponent,
    CreateExpenseComponent,
    CreateExpensefixedComponent,
    EditRecipeComponent,
    ConfimacaoComponent,
    EditRecipefixedComponent,
    ConfirmacaoFixaComponent,
    EditarDespesaComponent,
    EditarDespesaFixaComponent,
    ConfirmacaoDespesaFixaComponent,
    ConfirmacaoDespesaComponent,
    ListaUnificadaComponent,
    ListaUnificadaDespesaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
