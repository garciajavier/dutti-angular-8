import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '../layout/layout.module';
import { fakeBackendProvider } from './services/fake-backend';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
  ],
  exports: [
    LayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
})
export class CoreModule { }
