import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { StarshipCardComponent } from './../starship-card/starship-card.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipDetailComponent } from './starship-detail.component';

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
          data: of({ data: 1 }),
          root: {
            routeConfig: {
              data: {
                users: 'a'
              },
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
    component.starShip = {
      MGLT: '70',
      cargo_capacity: '70000',
      consumables: '1 month',
      cost_in_credits: 'unknown',
      created: '2014-12-15T13:00:56.332000Z',
      crew: '1',
      edited: '2014-12-20T21:23:49.897000Z',
      hyperdrive_rating: '3.0',
      length: '21.5',
      manufacturer: 'Kuat Systems Engineering',
      max_atmosphering_speed: '1000',
      model: 'Firespray-31-class patrol and attack',
      name: 'Slave 1',
      passengers: 6,
      starship_class: 'Patrol craft',
      url: '/assets/images/not_found.png'
    };
    expect(component).toBeTruthy();
  });
});
