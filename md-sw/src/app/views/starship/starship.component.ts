﻿
import { environment } from 'environments/environment';
import { takeUntil } from 'rxjs/operators';
import { StarShipsService } from '@/services/starships.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Paginated } from '@/core/models/pagination.model';
import { StarShip } from '@/core/models/starship.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { StarshipHelperService } from '@/services/helpers/starship-helper.service';


@Component({ templateUrl: 'starship.component.html' })
export class StarshipComponent implements OnInit, OnDestroy {

  /**
   * Contains the list of notifications
   */
  starShips: BehaviorSubject<StarShip[]> = new BehaviorSubject<StarShip[]>([]);
  starShips$ = this.starShips.asObservable();

  pageIndex = 1;
  pageSize = 10;
  totalItems = 0;


  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private starShipsService: StarShipsService,
    private starhipsHelperService: StarshipHelperService,
    private router: Router) {
  }

  ngOnInit() {
    this.getAllStarShips(1);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Get all starships
   */
  getAllStarShips(page: number): void {
    this.starShipsService.getAllStarShips(page ? page : this.pageIndex)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe((response: Paginated<StarShip>) => {
        const starships = response.results ? response.results.map((starShip: StarShip) => {
          return this.starhipsHelperService.setAditionaData(starShip);
        }) : [];
        if (response.results) {
          this.totalItems = response.count;
          this.starShips.next(starships);
        }
      });
  }

  detail(starShip: StarShip) {
    this.router.navigate(['starships', starShip.id]);
  }

  getPaginatorData(event) {
    this.getAllStarShips(event.pageIndex + 1);
  }

}