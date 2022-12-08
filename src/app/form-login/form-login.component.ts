import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  mensagem = "";
  id!:string;
  login = new Login(); 
  

  constructor(private loginService: LoginService,private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    this.loginService.getInstance().get('http://127.0.0.1:3001/login')
    .subscribe((Response: any) => {
 
      // If response comes hideloader() function is called
      // to hide that loader
           
    });
   
  
  }


  realizaLogin() {
      this.loginService.logar(this.login).subscribe(login => {
        localStorage.setItem('tokenTrabalho', login.token)
        console.log("Login realizado com sucesso!", login.token);
        window.location.href = "http://localhost:4200/tabela";
        
      });

  }


}
