import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormFuncionariosComponent } from './form-funcionarios/form-funcionarios.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { LoginComponent } from './pages/login/login.component';
import { TabelaFuncionariosComponent } from './tabela-funcionarios/tabela-funcionarios.component';

const rotas: Routes = [
  { path: 'novo', component: FormFuncionariosComponent },
  { path: 'tabela', component: TabelaFuncionariosComponent },
  { path: 'edit/:id', component: FormFuncionariosComponent},
  { path: '', redirectTo: '/tabela', pathMatch: 'full' }, 
  { path: 'login', component: FormLoginComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
