import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { StarshipCardComponent } from './../starship-card/starship-card.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipDetailComponent } from './starship-detail.component';
import { STARSHIP } from 'assets/mocks/starships/starship.mock';

describe('StarshipDetailComponent', () => {
  let component: StarshipDetailComponent;
  let fixture: ComponentFixture<StarshipDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [StarshipDetailComponent, StarshipCardComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          data: of({
            starShip: STARSHIP
          }),
          root: {
            routeConfig: {
              path: '/starships'
            }
          },

        }
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be starShip defined', () => {
    expect(component.starShip).toBeDefined();
  });
});
