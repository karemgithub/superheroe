import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { LoginI } from '../../models/login.interface';
import { Router } from '@angular/router';
import { ResponseI } from '../../models/response.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private fb: FormBuilder, private httplogin: LoginService, private router: Router) { }

  formLogin = this.fb.group({
    "usuario": ['', Validators.required],
    "password": ['', Validators.required]
  })


  

  onlogin(form: LoginI) {
    this.httplogin.login(form).subscribe(data => {
      let dataResponse: ResponseI= data;
      if(dataResponse.status){
        localStorage.setItem("token", dataResponse.result.token);
        this.router.navigate(['mostrarSH'])
      }
    })
  }

}
