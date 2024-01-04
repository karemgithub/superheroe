import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Superheroe } from '../../models/superheroe.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { Observable } from 'rxjs';
import { ServiceSHService } from '../../services/service-sh.service';
import { Router } from 'express';





@Component({
  selector: 'app-superheroes',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, MatDividerModule, MatButtonModule, MatListModule],
  templateUrl: './superheroes.component.html',
  styleUrl: './superheroes.component.css'
})
export class SuperheroesComponent implements OnInit {

  sh: Superheroe[] = [];

  @Input() Superheroe: Superheroe = new Superheroe(0, '', '', '', '', '', '');
  @Input() indice: number = 0;

  constructor(private servicioSH: ServiceSHService ) { }

  ngOnInit(): void {

  }
  eliminar(): void {
    let obs$ = new Observable<Superheroe>;
    obs$ = this.servicioSH.eliminarSH(this.indice);
    obs$.subscribe(data=>{this.Superheroe=data});
    alert(this.indice);
  }
}

