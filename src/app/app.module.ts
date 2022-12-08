import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabelaFuncionariosComponent } from './tabela-funcionarios/tabela-funcionarios.component';
import { FormFuncionariosComponent } from './form-funcionarios/form-funcionarios.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { MoedaPipe } from './moeda.pipe';
import { FiltroPesquisaPipe } from './filtro-pesquisa.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { LogComponent } from './pages/log/log.component';

//registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    TabelaFuncionariosComponent,
    FormFuncionariosComponent,
    MoedaPipe,
    FiltroPesquisaPipe,
    LoginComponent,
    FormLoginComponent,
    LogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
//    { provide: LOCALE_ID, useValue: 'pt'},
//    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
