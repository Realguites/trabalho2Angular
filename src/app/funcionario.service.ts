import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

const httpOptions = { 
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('tokenTrabalho')}`,
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  baseAPI = "http://localhost:3001/funcionario";

  constructor(private http : HttpClient) { }

  getInstance() {
    return this.http;
  }

  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.baseAPI, httpOptions);
  }

  buscarPorId(id: number){
    return this.http.get<Funcionario>(this.baseAPI, httpOptions);
  }

  deletar(id: number){
    const uri = `${this.baseAPI}/${id}`;
    return this.http.delete<Funcionario>(uri, httpOptions).subscribe(() => console.log('Delete successful'));
  }

  inserir(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.baseAPI, funcionario, httpOptions);
  }

  editar(id: string, funcionario: Funcionario): Observable<Funcionario> {
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.put<Funcionario>(uri, funcionario, httpOptions);    
  }

}
