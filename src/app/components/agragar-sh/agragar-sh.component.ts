import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { Superheroe } from '../../models/superheroe.model';
import { resolve } from 'path';
import { rejects } from 'assert';
import { DomSanitizer } from '@angular/platform-browser';
import { EventEmitter } from 'stream';
import { ServiceSHService } from '../../services/service-sh.service';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-agragar-sh',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDividerModule, MatButtonModule,
    ReactiveFormsModule],
  templateUrl:
    './agragar-sh.component.html',

  styleUrl: './agragar-sh.component.css'
})
export class AgragarSHComponent implements OnInit {
  previsualizacion: string;
  superheroes: Superheroe[] = [];
  archivos: any[];

  listaEditor: string[] = [];
  aux: number[] = [];

  event: EventEmitter;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private servicioSH: ServiceSHService, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.CargarDatosSH();

  }

  CargarDatosSH() {
    let obs$ = new Observable<Superheroe[]>;
    obs$ = this.servicioSH.getDatosSH();
    obs$.subscribe(data => { this.superheroes = data });
  }

  formSH = this.fb.group({
    "superheroe": ['', Validators.required],
    "editor": ['', Validators.required],
    "actorprincipal": ['', Validators.required],
    "tematica": ['', Validators.required],
    "personajes": ['', Validators.required],
    "imagen": ['', Validators.required]

  })

  get superheroe(): FormControl {
    return this.formSH.get('superheroe') as FormControl;
  }

  get editor(): FormControl {
    return this.formSH.get('editor') as FormControl;
  }

  get actorprincipal(): FormControl {
    return this.formSH.get('actorprincipal') as FormControl;
  }

  get tematica(): FormControl {
    return this.formSH.get('tematica') as FormControl;
  }

  get imagen(): FormControl {
    return this.formSH.get('imagen') as FormControl;
  }

  get personajes(): FormControl {
    return this.formSH.get('personajes') as FormControl;
  }

  AgregarSuperHeroe() {
    let superh = new Superheroe(0, this.superheroe.value, this.editor.value, this.actorprincipal.value, this.tematica.value, this.personajes.value, this.imagen.value);
    this.servicioSH.postSuperHeroe(superh);
    alert(console.log(superh))
  }



}