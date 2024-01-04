import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarshComponent } from './modificarsh.component';

describe('ModificarshComponent', () => {
  let component: ModificarshComponent;
  let fixture: ComponentFixture<ModificarshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarshComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
