import { TestBed } from '@angular/core/testing';

import { StarshipHelperService } from './starship-helper.service';

describe('StarshipHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarshipHelperService = TestBed.get(StarshipHelperService);
    expect(service).toBeTruthy();
  });
});
