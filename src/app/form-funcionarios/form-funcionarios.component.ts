import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'form-funcionarios',
  templateUrl: './form-funcionarios.component.html',
  styleUrls: ['./form-funcionarios.component.css']
})
export class FormFuncionariosComponent implements OnInit {

  mensagem = "";
  id!:string;
  funcionario = new Funcionario();
  

  constructor(private funcionarioService: FuncionarioService,private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    this.id = window.location.href.split("edit/")[1];
    this.funcionarioService.getInstance().get('http://127.0.0.1:3001/funcionario')
    .subscribe((Response: any) => {
 
      // If response comes hideloader() function is called
      // to hide that loader
           
    });
   
  
  }

  private isInserted() {
    return !window.location.href.split("edit/")[1]
  }

  salvar() {
    if(this.isInserted()) {
      console.log('func: ', this.funcionario)
      this.funcionarioService.inserir(this.funcionario).subscribe(funcionario => {
        console.log("Funcionario Cadastrado", funcionario);
        this.mensagem = this.funcionario.nome + " cadastrado com sucesso!";
        this.funcionario = new Funcionario();
      });

    }
    else {
      
      this.funcionarioService.editar(this.id, this.funcionario).subscribe(func => {
      this.mensagem = `${func.nome} editado com sucesso!`; 
      this.funcionario = func;
     })

    }
  }
/*
  cadastrar() {
    this.funcionarioService.inserir(this.funcionario);
    this.funcionario = new Funcionario();
  }
*/
  

}
