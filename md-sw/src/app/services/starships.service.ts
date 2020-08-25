import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarShip } from '@/core/models/starship.model';
import { Paginated } from '@/core/models/pagination.model';
import { Observable, of } from 'rxjs';
import { switchMap, map, publishReplay, refCount, take } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarShipsService {

  private cacheStarShip: Observable<StarShip>[] = [];
  private cachePage: Observable<Paginated<StarShip>>[] = [];

  constructor(private http: HttpClient) { }

  /**
   * Get all starships in paginated format
   */
  getAllStarShips(page: number = 1): Observable<Paginated<StarShip>> {
    if (!this.cachePage[page]) {
      const endpoint = `${environment.api_sw_url_base}/starships/?page=${page}`;
      this.cachePage[page] = this.http.get<Paginated<StarShip>>(endpoint)
        .pipe(
          publishReplay(1, 5 * 60 * 1000),
          refCount(),
          take(1),
          switchMap(response => {
            return of<Paginated<StarShip>>(response);
          })
        );
    }
    return this.cachePage[page];
  }

  /**
   * Get one Starships
   */
  getStarShip(id: string): Observable<StarShip> {
    if (!this.cacheStarShip[id]) {
      const endpoint = `${environment.api_sw_url_base}/starships/${id}/`;
      this.cacheStarShip[id] = this.http.get<StarShip>(endpoint).pipe(
        publishReplay(1, 5 * 60 * 1000),
        refCount(),
        take(1),
      );
    }
    return this.cacheStarShip[id];
  }
}
