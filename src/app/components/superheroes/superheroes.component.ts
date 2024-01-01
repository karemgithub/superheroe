import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Superheroe } from '../../models/superheroe.model';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';





@Component({
  selector: 'app-superheroes',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, MatDividerModule, MatButtonModule, MatListModule],
  templateUrl: './superheroes.component.html',
  styleUrl: './superheroes.component.css'
})
export class SuperheroesComponent implements OnInit {

  @Input() Superheroe: Superheroe = new Superheroe(0, '', '', '', '', '', '');
  @Input() indice: number = 0;

  constructor() { }

  ngOnInit(): void { }



}

