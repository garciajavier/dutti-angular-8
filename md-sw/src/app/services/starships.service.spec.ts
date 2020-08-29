import { of } from 'rxjs';
import { StarShipsService } from '@/services/starships.service';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CacheService } from '@/core/helpers/cache.service';


describe('StarShipsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ], providers: [CacheService]
  }));

  it('should be created', () => {
    const service: StarShipsService = TestBed.get(StarShipsService);
    expect(service).toBeTruthy();
  });

  it('should be getAllStarShips', inject([StarShipsService], (service: StarShipsService) => {
    service.getAllStarShips(0);
    expect(service).toBeTruthy();
  }));

  it('should be getAllStarShips cached', inject([StarShipsService], (service: StarShipsService) => {
    const cacheService: CacheService = TestBed.get(CacheService);
    cacheService.cache[`$page-0`] = of();
    service.getAllStarShips(0);
    expect(service).toBeTruthy();
  }));

  it('should be getStarShip cached', inject([StarShipsService], (service: StarShipsService) => {
    service.getStarShip('1');
    expect(service).toBeTruthy();
  }));

  it('should be getStarShip cached', inject([StarShipsService], (service: StarShipsService) => {
    const cacheService: CacheService = TestBed.get(CacheService);
    cacheService.cache[`$id-1`] = of();
    service.getStarShip('1');
    expect(service).toBeTruthy();
  }));


});
