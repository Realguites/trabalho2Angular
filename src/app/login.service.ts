import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  baseAPI = "http://127.0.0.1:3001/login";

  constructor(private http : HttpClient) { }

  getInstance() {
    return this.http;
  }

  logar(login: Login): Observable<Login> {
    return this.http.post<Login>(this.baseAPI, login, httpOptions);
  }


}
