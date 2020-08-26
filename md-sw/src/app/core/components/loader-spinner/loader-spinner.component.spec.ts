import { NgxSpinnerModule } from 'ngx-spinner';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderSpinnerComponent } from './loader-spinner.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject, of } from 'rxjs';
import { LoaderService } from '@/services/loader.service';

describe('LoaderSpinnerComponent', () => {
  let component: LoaderSpinnerComponent;
  let fixture: ComponentFixture<LoaderSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderSpinnerComponent],
      imports: [
        HttpClientTestingModule,
        NgxSpinnerModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: LoaderService, useClass: class LoaderServiceMock extends LoaderService {
            public isLoading = of(false) as any;
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get loader status and get true', () => {
    const service = TestBed.get(LoaderService);
    service.isLoading = new BehaviorSubject(true);
    component.ngOnInit();
    service.isLoading.subscribe(loading => {
      expect(loading).toBeTruthy();
    });
  });
});
