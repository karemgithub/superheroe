import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSuperHeroeComponent } from './listado-super-heroe.component';

describe('ListadoSuperHeroeComponent', () => {
  let component: ListadoSuperHeroeComponent;
  let fixture: ComponentFixture<ListadoSuperHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoSuperHeroeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoSuperHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
