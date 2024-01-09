import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Superheroe } from '../../models/superheroe.model';
import { ServiceSHService } from '../../services/service-sh.service';
import { Observable } from 'rxjs';
import { SuperheroesComponent } from '../superheroes/superheroes.component';
import { FiltrarSHPipe } from '../../pipes/filtrar-sh.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from 'express';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpinnerService } from '../../services/spinner.service';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@Component({
  selector: 'app-listado-super-heroe',
  standalone: true,
  imports: [CommonModule, SuperheroesComponent, FiltrarSHPipe, MatIconModule, MatDividerModule, MatButtonModule,
    FormsModule, CdkDropList, CdkDrag, RouterLink, NgxPaginationModule, NgxSpinnerModule, NgxUiLoaderModule],
  templateUrl: './listado-super-heroe.component.html',
  styleUrl: './listado-super-heroe.component.css'
})
export class ListadoSuperHeroeComponent {

  p: number = 0;

  indice: number;

  Superheroe: Superheroe = new Superheroe(0, '', '', '', '', '', '');

  superheroes: Superheroe[] = [];

  buscarsh: string = '';

  constructor(private servicioSH: ServiceSHService, private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.llamarSpiner();
    this.getObsSuperHeroes();
  }

  getObsSuperHeroes(): void {
    let obs$ = new Observable<Superheroe[]>;
    obs$ = this.servicioSH.getDatosSH();
    obs$.subscribe(data => { this.superheroes = data });
  }

  BuscarSH(buscar: string) {
    this.buscarsh = buscar;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.superheroes, event.previousIndex, event.currentIndex);
  }



}
