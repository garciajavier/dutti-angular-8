import { UrlSrcDirective } from '././url-src.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div urlSrc [url]="urlSrc" [bypass]="byPass"></div>`,
})
class TestUrlSrcComponent {
  urlSrc = '/test';
  byPass: boolean;
}

describe('UrlSrcDirective', () => {
  let component: TestUrlSrcComponent;
  let fixture: ComponentFixture<TestUrlSrcComponent>;
  let inputEl: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestUrlSrcComponent, UrlSrcDirective]
    });
    fixture = TestBed.createComponent(TestUrlSrcComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('div'));
  });

  it('should create an instance', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(inputEl.nativeElement.style.backgroundImage).toBe(`url("/test")`);
  });
  it('should create an instance with no urlSrc', () => {
    component.urlSrc = null;
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundImage).toBe('');
  });
});
