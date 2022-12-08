import { Component, Input, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'tabela-funcionarios',
  templateUrl: './tabela-funcionarios.component.html',
  styleUrls: ['./tabela-funcionarios.component.css']
})
export class TabelaFuncionariosComponent implements OnInit {
  titulo = "Tabela de Funcionarios";
  nomePesquisado = "";
  lista: Funcionario[] = []
  
  constructor(private servico: FuncionarioService) {
   this.listar();
  }

  listar() {
    this.servico.listar().subscribe(
      (data) => {
        this.lista = data;
      }
    )
  }

  verificar(){
    const higherAge = this.lista.reduce(function(prev, current) {
      return (prev.age > current.age) ? prev : current
  })
    alert("O funcionário mais velho é: " + higherAge.nome + " " + higherAge.sobrenome + " com " + higherAge.age + " anos!")
  }

  delete(id: number){
    this.servico.deletar(id)
  }

  ngOnInit(): void {
    
  }

}
