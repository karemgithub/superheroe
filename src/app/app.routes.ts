import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SuperheroesComponent } from './components/superheroes/superheroes.component';
import { ListadoSuperHeroeComponent } from './components/listado-super-heroe/listado-super-heroe.component';
import { AgragarSHComponent } from './components/agragar-sh/agregar-sh.component';
import { ModificarshComponent } from './components/modificarsh/modificarsh.component';
import { DetallesComponent } from './components/detalles/detalles.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'mostrarSH', component:ListadoSuperHeroeComponent},
    {path: 'agregarSH', component:AgragarSHComponent},
   // {path: 'modificarsh', component: ModificarshComponent},
    {path: 'detalles/:id', component: DetallesComponent}

];
