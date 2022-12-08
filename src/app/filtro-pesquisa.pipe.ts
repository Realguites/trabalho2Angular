import { Pipe, PipeTransform } from '@angular/core';
import { Funcionario } from './funcionario';

@Pipe({
  name: 'filtroPesquisa'
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaFuncionarios: Funcionario[], valor?: string): Funcionario[] {
    const nome = valor ?valor :"";
    console.log(nome);
    return listaFuncionarios.filter(
      (funcionario) => 
        funcionario.nome.toLocaleLowerCase().includes(nome.toLowerCase())
    );
  }

}
