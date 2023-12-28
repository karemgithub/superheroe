import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Superheroe } from '../../models/superheroe.model';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-superheroes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './superheroes.component.html',
  styleUrl: './superheroes.component.css'
})
export class SuperheroesComponent implements OnInit {

  @Input() Superheroe: Superheroe = new Superheroe(0, '', '', '', '', '', '');
  @Input() indice: number = 0;

  constructor() { }

  ngOnInit(): void { }

}

