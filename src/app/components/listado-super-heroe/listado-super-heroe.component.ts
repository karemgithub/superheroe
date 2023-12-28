import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Superheroe } from '../../models/superheroe.model';
import { ServiceSHService } from '../../services/service-sh.service';
import { Observable } from 'rxjs';
import { SuperheroesComponent } from '../superheroes/superheroes.component';

@Component({
  selector: 'app-listado-super-heroe',
  standalone: true,
  imports: [CommonModule, SuperheroesComponent],
  templateUrl: './listado-super-heroe.component.html',
  styleUrl: './listado-super-heroe.component.css'
})
export class ListadoSuperHeroeComponent {
  Superheroe: Superheroe = new Superheroe(0, '', '', '', '', '', '');
 superheroes: Superheroe[] = []

  constructor(private servicioSH: ServiceSHService) { }

  ngOnInit(): void {
    this.getObsSuperHeroes();
  }

  getObsSuperHeroes(): void {
    let obs$ = new Observable<Superheroe[]>;
    obs$ = this.servicioSH.getDatosSH();
    obs$.subscribe(data => { this.superheroes = data });
  }

}
