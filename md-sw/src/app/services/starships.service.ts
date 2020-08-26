import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarShip } from '@/core/models/starship.model';
import { Paginated } from '@/core/models/pagination.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { CacheService } from '@/core/helpers/cache.service';

@Injectable({
  providedIn: 'root'
})
export class StarShipsService {

  constructor(private http: HttpClient, private cache: CacheService) { }

  /**
   * Get all starships in paginated format
   */
  getAllStarShips(page: number = 1): Observable<Paginated<StarShip>> {
    if (!this.cache.cache[`$page-${page}`]) {
      const endpoint = `${environment.api_sw_url_base}/starships/?page=${page}`;
      this.cache.cache[`$page-${page}`] = this.http.get<Paginated<StarShip>>(endpoint).pipe(this.cache.cachePipe());
    }
    return this.cache.cache[`$page-${page}`];
  }

  /**
   * Get one Starships
   */
  getStarShip(id: string): Observable<StarShip> {
    if (!this.cache.cache[`$id-${id}`]) {
      const endpoint = `${environment.api_sw_url_base}/starships/${id}/`;
      this.cache.cache[`$id-${id}`] = this.http.get<StarShip>(endpoint).pipe(this.cache.cachePipe());
    }
    return this.cache.cache[`$id-${id}`];
  }


}
