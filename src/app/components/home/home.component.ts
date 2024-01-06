import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  load: boolean = false;

  ngOnInit(): void {

    setTimeout(() => {
      this.load = true;
    }, 5000);
  }

}
