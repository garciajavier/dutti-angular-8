import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { publishReplay, refCount, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  cache: Observable<any>[] = [];

  constructor() { }

  cachePipe() {
    return <T>(source: Observable<T>) => {
      return source.pipe(
        publishReplay(1, 5 * 60 * 1000),
        refCount(),
        take(1));
    };
  }
}
