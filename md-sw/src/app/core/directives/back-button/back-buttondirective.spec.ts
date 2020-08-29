import { RouterTestingModule } from '@angular/router/testing';

import { Location } from '@angular/common';
import { BackButtonDirective } from './back-button.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';


@Component({
  template: `<button mat-button appBackButton>Volver</button>`
})
class TestComponent { }

describe('BackButtonDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        TestComponent,
        BackButtonDirective
      ],
      providers: [Location]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should call location back when clicked button', () => {
    const location: Location = TestBed.get(Location);
    spyOn(location, 'back').and.callFake(() => null);
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const button: HTMLElement = debugEl.querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(location.back).toHaveBeenCalled();
  });
});
