import { environment } from 'environments/environment';
import { Injectable, OnDestroy } from '@angular/core';
import { StarShip } from '@/core/models/starship.model';
import { Observable, of, Subject } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StarShipsService } from '../starships.service';
import { takeUntil, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StarShipResolver implements Resolve<StarShip>, OnDestroy {
  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private service: StarShipsService) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.service.getStarShip(route.paramMap.get('id'))
      .pipe(
        takeUntil(this.destroy$),
        map((response: StarShip) => {
          response.imageUrl = `${environment.api_sw_imageUrl_base}${response.url.split('/')[response.url.split('/').length - 2]}.jpg`;
          response.defaultImage = 'url(assets/images/not_found.png)';
          return response;
        }));
  }

}
