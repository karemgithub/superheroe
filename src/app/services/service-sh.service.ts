import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Superheroe } from '../models/superheroe.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ServiceSHService {

    url: string = "http://localhost:3000/Superheroes/";

    a_sh: Superheroe[] = [];

    superheroe: Superheroe = new Superheroe(0, '', '', '', '', '', '');

    constructor(private http: HttpClient, private router: Router) { }

    //==========================================================================================================
    //CARGAR TODOS LOS DATOS DE UN SUPERHEROE
    //==========================================================================================================
    getDatosSH(): Observable<Superheroe[]> {
        let obs$ = this.http.get<Superheroe[]>(this.url);
        obs$.subscribe(data => { this.a_sh = data });
        return obs$;
    }

    //==========================================================================================================
    //ENCONTRAR UN SUPERHEROE
    //==========================================================================================================

    encontrarSuperHeroe(index: number): Observable<Superheroe[]> {
        const params = new HttpParams().set("id", index)
        return this.http.get<Superheroe[]>("http://localhost:3000/Superheroes", { params });
    }

    //==========================================================================================================
    //INSERTAR UN SUPERHEROE
    //==========================================================================================================
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
            }).subscribe(data => { shNew = data });
    }

    //==========================================================================================================
    //ELIMINAR UN SUPERHEROE
    //==========================================================================================================
    eliminarSH(index: number): Observable<Superheroe> {
        let id: number = Number(index);
        let miurl = "http://localhost:3000/Superheroes/" + id;
        return this.http.delete<Superheroe>(miurl);
    }

    //==========================================================================================================
    //MODIFICAR UN SUPERHEROE
    //==========================================================================================================
    modificarSH(addsh: Superheroe, id: number): Observable<Superheroe> {
        id = addsh.id;
        return this.http.put<Superheroe>(this.url + id,
            {
                "id": id,
                'superheroe': addsh.superheroe,
                'editor': addsh.editor,
                'actor_principal': addsh.actor_principal,
                'tematica': addsh.tematica,
                'imagen': addsh.imagen,
                'personajes': addsh.personajes,
            })
    }
}
