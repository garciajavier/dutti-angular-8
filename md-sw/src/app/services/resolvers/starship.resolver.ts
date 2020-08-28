import { StarshipHelperService } from './../helpers/starship-helper.service';
import { Injectable, OnDestroy } from '@angular/core';
import { StarShip } from '@/core/models/starship.model';
import { Observable, Subject } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { StarShipsService } from '../starships.service';
import { takeUntil, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StarShipResolver implements Resolve<StarShip>, OnDestroy {
  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private service: StarShipsService,
    private starshipHelperService: StarshipHelperService
  ) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.service.getStarShip(route.paramMap.get('id'))
      .pipe(
        takeUntil(this.destroy$),
        map((response: StarShip) => {
          return this.starshipHelperService.setAditionaData(response);
        }));
  }

}
