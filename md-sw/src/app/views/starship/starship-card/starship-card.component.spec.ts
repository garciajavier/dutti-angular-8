import { STARSHIP } from 'assets/mocks/starships/starship.mock';
import { MatCardModule } from '@angular/material/card';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipCardComponent } from './starship-card.component';

describe('StarshipCardComponent', () => {
  let component: StarshipCardComponent;
  let fixture: ComponentFixture<StarshipCardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [MatCardModule],
        declarations: [StarshipCardComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipCardComponent);
    component = fixture.componentInstance;
    component.starShip = STARSHIP;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be starShip defined', () => {
    expect(component.starShip).toBeDefined();
  });
});
