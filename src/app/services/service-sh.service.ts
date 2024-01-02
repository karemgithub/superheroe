import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Superheroe } from '../models/superheroe.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceSHService {

  url: string = "http://localhost:3000/Superheroes";

  sh: Superheroe[] = [];

  constructor(private http: HttpClient) { }

  getDatosSH(): Observable<Superheroe[]> {
    let obs$ = this.http.get<Superheroe[]>(this.url);
    obs$.subscribe(data => { this.sh = data });
    return obs$;
  }

  postSuperHeroe(shNew: Superheroe): void {

    this.http.post<Superheroe>(this.url,
      {
        'id': 0,
        'superheroe': shNew.superheroe,
        'editor': shNew.editor,
        'actor_principal': shNew.actor_principal,
        'tematica': shNew.tematica,
        'imagen': shNew.imagen,
        'personajes': shNew.personajes          
      }).subscribe(data=>{shNew = data });

    
  }

}
