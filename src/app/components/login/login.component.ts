import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

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

  constructor(private fb: FormBuilder, private hhtplogin: LoginService) { }

  formLogin = this.fb.group({
    "usuario": ['', Validators.required],
    "password": ['', Validators.required]
  })

  onlogin(form: any) {
    console.log(form)
  }

}
