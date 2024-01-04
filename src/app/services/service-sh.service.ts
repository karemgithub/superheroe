import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Superheroe } from '../models/superheroe.model';

@Injectable({
    providedIn: 'root'
})
export class ServiceSHService {

    url: string = "http://localhost:3000/Superheroes";

    a_sh: Superheroe[] = [];

    superheroe: Superheroe = new Superheroe(0, '', '', '', '', '', '');

    constructor(private http: HttpClient) { }

    getDatosSH(): Observable<Superheroe[]> {
        let obs$ = this.http.get<Superheroe[]>(this.url);
        obs$.subscribe(data => { this.a_sh = data });
        return obs$;
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
        index= this.superheroe.id
        //let id: number= Number (index);
        let miurl = `${this.url} / ${index} `;
        // let miurl = this.url + this.superheroe.id;
        return this.http.delete<Superheroe>(miurl);
    }

    //==========================================================================================================
    //MODIFICAR UN SUPERHEROE
    //==========================================================================================================
    modificarSH(addsh: Superheroe, id: number): void {
        id = this.superheroe.id;
        this.http.put<Superheroe>(this.url + id,
            {
                "id": 0,
                'superheroe': addsh.superheroe,
                'editor': addsh.editor,
                'actor_principal': addsh.actor_principal,
                'tematica': addsh.tematica,
                'imagen': addsh.imagen,
                'personajes': addsh.personajes
            }).subscribe(data => { this.superheroe = data; });
        this.a_sh[id] = addsh;
    }
}
