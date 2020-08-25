import { AuthenticationService } from '@/core/services/authentication.service';
import { MatSnackBar } from '@angular/material';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar, private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          // const error = err.error.message || err.statusText;
          let errorMessage = '';
          if (error && error.error && error.error.message) {
            errorMessage = `${error.error.message || error.statusText}`;
          } else if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message || error.statusText}`;
          } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          // window.alert(errorMessage);
          this.snackBar.open(errorMessage, 'ERROR', {
            duration: 10000,
            panelClass: ['alert-snackbar']
          });
          if (error.status === 401) {
            // auto logout if 401 response returned from api
            this.authenticationService.logout();
            location.reload();
          }
          return throwError(errorMessage);
        })
      );
  }
}
