import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SuperheroesComponent } from './components/superheroes/superheroes.component';
import { ListadoSuperHeroeComponent } from './components/listado-super-heroe/listado-super-heroe.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'mostrarSH', component:ListadoSuperHeroeComponent}  

];
