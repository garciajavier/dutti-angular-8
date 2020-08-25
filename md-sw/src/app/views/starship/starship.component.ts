import { environment } from 'environments/environment';
import { takeUntil } from 'rxjs/operators';
import { StarShipsService } from './../../services/starships.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Paginated } from '@/core/models/pagination.model';
import { StarShip } from '@/core/models/starship.model';
import { BehaviorSubject, Subject } from 'rxjs';


@Component({ templateUrl: 'starship.component.html' })
export class StarshipComponent implements OnInit, OnDestroy {

  /**
   * Contains the list of notifications
   */
  starShips: BehaviorSubject<StarShip[]> = new BehaviorSubject<StarShip[]>([]);
  starShips$ = this.starShips.asObservable();

  /**
   *  Default Page
   */
  defaultPage = 1;

  /**
   *  Current Page
   */
  currentPage = 1;

  /**
   *  Items Per Page
   */
  itemsPerPage = 10;

  /**
   *  Total items
   */
  totalItems = 0;

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private starShipsService: StarShipsService) {
    console.log('constructor');

  }

  ngOnInit() {
    console.log('ngOnInit');
    this.getAllStarShips();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Get all starships
   */
  getAllStarShips(page?: number): void {
    this.starShipsService.getAllStarShips(page ? page : this.defaultPage)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe((response: Paginated<StarShip>) => {
        const starships = response.results ? response.results.map((starShip: StarShip) => {
          starShip.imageUrl = `${environment.api_sw_imageUrl_base}${starShip.url.split('/')[starShip.url.split('/').length - 2]}.jpg`;
          starShip.defaultImage = 'url(assets/images/not_found.png)';
          return starShip;
        }) : [];
        if (response.results) {
          this.totalItems = response.count;
          this.starShips.next(starships);
        }
      });
  }

}
