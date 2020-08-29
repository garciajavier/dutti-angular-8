import { of } from 'rxjs';
import { StarShipServiceMock } from './../../../assets/mocks/starships/starships.service.mock';
import { StarShipsService } from '@/services/starships.service';
import { STARSHIP } from 'assets/mocks/starships/starship.mock';
import { StarshipCardComponent } from './starship-card/starship-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from '@/core/services/authentication.service';
import { MatCardModule } from '@angular/material/card';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StarshipComponent } from './starship.component';
import { MatPaginatorModule } from '@angular/material';
import { Router } from '@angular/router';


describe('StarshipComponent', () => {
  let component: StarshipComponent;
  let fixture: ComponentFixture<StarshipComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MatPaginatorModule, MatCardModule, RouterTestingModule.withRoutes([])],
      declarations: [StarshipComponent, StarshipCardComponent],
      providers: [AuthenticationService, { provide: StarShipsService, useClass: StarShipServiceMock }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(StarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be navigate on call detail', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.detail(STARSHIP);
    expect(navigateSpy).toHaveBeenCalledWith(['starships', STARSHIP.id]);
  });

  it('should be navigate on call detail', () => {
    component.getPaginatorData(1);
    expect(component.totalItems).toBeDefined();
  });

  it('should be get all StarShips', () => {
    const starShipsService = TestBed.get(StarShipsService);
    spyOn(starShipsService, 'getAllStarShips').and.callFake(() => {
      return of({});
    });

    expect(component.starShips$).toBeDefined();
  });

});
