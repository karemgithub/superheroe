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
}
