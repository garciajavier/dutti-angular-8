import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { publishReplay, refCount, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  /**
   * Time to save each request response on cache
   */
  FIVE_MINUTS = 5 * 60 * 1000;

  cache: Observable<any>[] = [];

  constructor() { }

  cachePipe() {
    return <T>(source: Observable<T>) => {
      return source.pipe(
        publishReplay(1, this.FIVE_MINUTS),
        refCount(),
        take(1));
    };
  }
}
