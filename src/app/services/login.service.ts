import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "http://localhost:3000/Login/";

  constructor(private http: HttpClient) { }


  login(form: LoginI): Observable<ResponseI> {
    let direccion = this.url
    return this.http.post<ResponseI>(direccion, form);

  }

}
