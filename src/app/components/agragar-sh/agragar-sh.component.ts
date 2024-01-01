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
    this.MostrarEditor();
  }

  CargarDatosSH() {
    let obs$ = new Observable<Superheroe[]>;
    obs$ = this.servicioSH.getDatosSH();
    obs$.subscribe(data => { this.superheroes = data });
  }

  MostrarEditor(): number[] {
    let tipo: string[] = [];
    for (let i = 0; i < this.superheroes.length; i++) {
      tipo[i] = this.superheroes[i].editor;
    }
    let Leditor = new Set(tipo);
    this.listaEditor = Array.from(Leditor.values());
    // recorro el tamaño de la lista de los superheroes
    for (let i = 0; i < this.listaEditor.length; i++) {
      let contador = 0;
      for (let j = 0; j < this.superheroes.length; j++) {
        if (this.listaEditor[i] == this.superheroes[j].editor) {
          contador++;
        }
      }
      //this.aux.push(contador / this.superheroes.length);
    }
    //alert(this.aux);
    return this.aux;
  }


  // CapturarImagen(event: any) {
  //   const capturarImagen = event.taget.files;

  //   this.extraerBase64(capturarImagen).then((imagen: any) => {
  //     console.log(imagen)
  //   });
  //    this.archivos.push(capturarImagen);

  // }

  // extraerBase64 = async ($event: any) => new Promise((resolve, rejects) => {
  //   try {
  //     const unsafImg = window.URL.createObjectURL($event);
  //     const image = this.sanitizer.bypassSecurityTrustUrl(unsafImg);
  //     const reader = new FileReader();
  //     reader.readAsDataURL($event);
  //     reader.onload = () => {
  //       resolve({
  //         base: null
  //       });
  //     };
  //   } catch (e) {
  //     return null;
  //   }
  // })

  formSH = this.fb.group({
    "superheroe": ['', Validators.required],
    "editor": ['', Validators.required],
    "actor_principal": ['', Validators.required],
    "tematica": ['', Validators.required],
    "personajes": ['', Validators.required],
    "imagen": ['', Validators.required],
    "descripcion": ['', Validators.required]
  })

  get superheroe(): FormControl {
    return this.formSH.get('superheroe') as FormControl;
  }

  get editor(): FormControl {
    return this.formSH.get('editor') as FormControl;
  }

  get actor_principal(): FormControl {
    return this.formSH.get('actor_principal') as FormControl;
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

  get descripcion(): FormControl {
    return this.formSH.get('descripcion') as FormControl;
  }

}