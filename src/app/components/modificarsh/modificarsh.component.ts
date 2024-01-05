import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceSHService } from '../../services/service-sh.service';
import { Superheroe } from '../../models/superheroe.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificarsh',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modificarsh.component.html',
  styleUrl: './modificarsh.component.css'
})
export class ModificarshComponent implements OnInit {
  titulo: string= "Modificar SuperHeroe";

  superheroes: Superheroe[] = [];
  indice: number = 0;
  

  constructor(private servicioSH: ServiceSHService, private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute ) { }


  ngOnInit(): void {
    this.CargarDatosSH;
    this.indice = this.route.snapshot.params['id'];
  }

  //==========================================================================================================
  //CARGAR SUPERHEROE
  //==========================================================================================================
  CargarDatosSH() {
    let obs$ = new Observable<Superheroe[]>;
    obs$ = this.servicioSH.getDatosSH();
    obs$.subscribe(data => { this.superheroes = data });
  }


   //==========================================================================================================
    //VALIDACIÓN DEL FORMULARIO REACTIVO
    //==========================================================================================================
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
 //==========================================================================================================



  modificarSuperHeroe() {
    let superh = new Superheroe(0, this.superheroe.value, this.editor.value, this.actorprincipal.value, this.tematica.value, this.personajes.value, this.imagen.value);
    

  }

}
