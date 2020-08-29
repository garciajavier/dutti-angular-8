import { STARSHIP } from 'assets/mocks/starships/starship.mock';
import { StarShip } from '@/core/models/starship.model';
import { TestBed } from '@angular/core/testing';

import { StarshipHelperService } from './starship-helper.service';

describe('StarshipHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarshipHelperService = TestBed.get(StarshipHelperService);
    expect(service).toBeTruthy();
  });

  it('should be setAditionaData', () => {
    const service: StarshipHelperService = TestBed.get(StarshipHelperService);
    const starShip: StarShip = service.setAditionaData(STARSHIP);
    expect(starShip.UUID).toBeDefined();

  });
});
