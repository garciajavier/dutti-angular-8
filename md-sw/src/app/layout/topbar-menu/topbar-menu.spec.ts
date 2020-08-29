
import { MaterialModule } from './../../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarMenuComponent } from './topbar-menu.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

describe('TopbarMenuComponent', () => {
  let router: Router;
  let component: TopbarMenuComponent;
  let fixture: ComponentFixture<TopbarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopbarMenuComponent],
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule
      ],
      providers: [
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(TopbarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout() navigate to login', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.logout();
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });

  it('should starship() navigate to login', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.starship();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });
});
