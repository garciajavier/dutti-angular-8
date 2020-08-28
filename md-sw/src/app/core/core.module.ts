import { UrlSrcDirective } from './directives/url-src/url-src.directive';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '../layout/layout.module';
import { fakeBackendProvider } from './services/fake-backend';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';

@NgModule({
  declarations: [
    LoaderSpinnerComponent,
    UrlSrcDirective
  ],
  imports: [
    CommonModule,
    LayoutModule,
    NgxSpinnerModule
  ],
  exports: [
    LayoutModule,
    LoaderSpinnerComponent,
    LayoutModule,
    NgxSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
})
export class CoreModule { }
