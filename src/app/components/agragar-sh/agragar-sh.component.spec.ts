import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgragarSHComponent } from './agregar-sh.component';

describe('AgragarSHComponent', () => {
  let component: AgragarSHComponent;
  let fixture: ComponentFixture<AgragarSHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgragarSHComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgragarSHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
