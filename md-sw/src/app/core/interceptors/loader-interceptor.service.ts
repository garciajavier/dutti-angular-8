
import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, finalize } from 'rxjs/operators';
import { LoaderService } from '@/services/loader.service';

const NO_SPINNER_LOADING_HEADER = 'NO_LOADER';
@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor {
  requests: HttpRequest<any>[] = [];

  constructor(private loaderService: LoaderService) { }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    this.requests.splice(i, 1);
    this.loaderService.isLoading.next(this.requests.length > 0);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.has(NO_SPINNER_LOADING_HEADER)) {
      req = this.clearNoSpinnerHeader(req);
      return next.handle(req);
    } else {
      this.requests.push(req);
      this.loaderService.isLoading.next(true);

      return next
        .handle(req)
        .pipe(
          filter((event) => event instanceof HttpResponse),
          finalize(() => this.removeRequest(req))
        );
    }
  }

  /**
   * Iterate over httpHeaders from request and delete the NO_LOADER header
   * @param req Request to analize
   */
  private clearNoSpinnerHeader(req: HttpRequest<any>): HttpRequest<any> {
    let cloneHttpHeaders: HttpHeaders = new HttpHeaders();
    req.headers.keys().forEach((key: string) => {
      if (key !== NO_SPINNER_LOADING_HEADER) {
        cloneHttpHeaders = cloneHttpHeaders.append(key, req.headers.get(key));
      }
    });
    const reqMod = req.clone({
      headers: cloneHttpHeaders
    });
    return reqMod;
  }
}
