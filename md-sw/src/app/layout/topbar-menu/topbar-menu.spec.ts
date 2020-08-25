import { MaterialModule } from './../../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarMenuComponent } from './topbar-menu.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TopbarMenuComponent', () => {
  let component: TopbarMenuComponent;
  let fixture: ComponentFixture<TopbarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopbarMenuComponent],
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
