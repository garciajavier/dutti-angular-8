import { StarshipCardComponent } from './starship-card/starship-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from '@/core/services/authentication.service';
import { MatCardModule } from '@angular/material/card';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StarshipComponent } from './starship.component';
import { MatPaginatorModule } from '@angular/material';


describe('StarshipComponent', () => {
  let component: StarshipComponent;
  let fixture: ComponentFixture<StarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MatPaginatorModule, MatCardModule, RouterTestingModule],
      declarations: [StarshipComponent, StarshipCardComponent],
      providers: [AuthenticationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
