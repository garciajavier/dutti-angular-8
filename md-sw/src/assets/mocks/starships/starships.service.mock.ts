import { STARSHIP } from 'assets/mocks/starships/starship.mock';
import { STARSHIPS_PAGINATED } from './starship.mock';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { StarShipsService } from '@/services/starships.service';

@Injectable()
export class StarShipServiceMock extends StarShipsService {

  getAllStarShips(page: number) {
    return of(STARSHIPS_PAGINATED);
  }

  getStarShip(id: string) {
    return of(STARSHIP);
  }
}
