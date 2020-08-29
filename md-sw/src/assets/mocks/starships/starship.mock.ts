import { StarShip } from '@/core/models/starship.model';
import { Paginated } from '@/core/models/pagination.model';
export const STARSHIP: StarShip = {
  id: 1,
  MGLT: '70',
  cargo_capacity: '70000',
  consumables: '1 month',
  cost_in_credits: 'unknown',
  created: '2014-12-15T13:00:56.332000Z',
  crew: '1',
  edited: '2014-12-20T21:23:49.897000Z',
  hyperdrive_rating: '3.0',
  length: '21.5',
  manufacturer: 'Kuat Systems Engineering',
  max_atmosphering_speed: '1000',
  model: 'Firespray-31-class patrol and attack',
  name: 'Slave 1',
  passengers: 6,
  starship_class: 'Patrol craft',
  url: '/assets/images/not_found.png'
};

export const STARSHIPS_PAGINATED: Paginated<StarShip> = {
  results: [
    {
      id: 1,
      MGLT: '70',
      cargo_capacity: '70000',
      consumables: '1 month',
      cost_in_credits: 'unknown',
      created: '2014-12-15T13:00:56.332000Z',
      crew: '1',
      edited: '2014-12-20T21:23:49.897000Z',
      hyperdrive_rating: '3.0',
      length: '21.5',
      manufacturer: 'Kuat Systems Engineering',
      max_atmosphering_speed: '1000',
      model: 'Firespray-31-class patrol and attack',
      name: 'Slave 1',
      passengers: 6,
      starship_class: 'Patrol craft',
      url: '/assets/images/not_found.png'
    }
  ],
  count: 1,
  previous: null,
  next: 'https://swapi.co/api/starships/?page=1'
};


