import { Component, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceSHService } from '../../services/service-sh.service';
import { Superheroe } from '../../models/superheroe.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modificarsh',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modificarsh.component.html',
  styleUrl: './modificarsh.component.css'
})
export class ModificarshComponent implements OnInit {

  @Input() Superheroe: Superheroe = new Superheroe(0, '', '', '', '', '', '');
  @Input() indice: number = 0;

  @Input() id?: string;

  superheroes: Superheroe[] = [];

  @Output() newItemEvent = new EventEmitter<Superheroe>();

  constructor(private servicioSH: ServiceSHService, private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
    this.superheroe.setValue(this.Superheroe.superheroe);
    this.actorprincipal.setValue(this.Superheroe.actor_principal);
    this.editor.setValue(this.Superheroe.editor);
    this.imagen.setValue(this.Superheroe.imagen);
    this.tematica.setValue(this.Superheroe.tematica);
    this.personajes.setValue(this.Superheroe.personajes);
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


  actualizarSH(): void {
    let superh = new Superheroe(this.indice, this.superheroe.value, this.editor.value, this.actorprincipal.value, this.tematica.value, this.personajes.value, this.imagen.value);
    this.servicioSH.modificarSH(superh, this.indice).subscribe(data => { superh = data });
    this.newItemEvent.emit(superh);
    this.router.navigate(['/detalles'+ this.indice])
  }


}
