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

  delete(id: number){
    this.servico.deletar(id)
  }

  ngOnInit(): void {
    
  }

}
