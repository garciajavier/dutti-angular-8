import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarShip } from '@/core/models/starship.model';
import { Paginated } from '@/core/models/pagination.model';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarShipsService {

  constructor(private http: HttpClient) { }

  /**
   * Get all starships in paginated format
   */
  getAllStarShips(page: number = 1): Observable<Paginated<StarShip>> {
    const endpoint = `${environment.api_sw_url_base}/starships/?page=${page}`;
    return this.http.get<Paginated<StarShip>>(endpoint)
      .pipe(
        switchMap(response => {
          return of<Paginated<StarShip>>(response);
        })
      );
  }

  /**
   * Get one Starships
   */
  getStarShip(id: number): Observable<StarShip> {
    const endpoint = `${environment.api_sw_url_base}/starships/${id}`;
    return this.http.get<StarShip>(endpoint);
  }
}
