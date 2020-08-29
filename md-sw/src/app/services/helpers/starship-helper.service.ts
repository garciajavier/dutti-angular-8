import { environment } from 'environments/environment';
import { StarShip } from '@/core/models/starship.model';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarshipHelperService {

  constructor() { }

  setAditionaData(starShip: StarShip): StarShip {
    starShip.id = parseInt(starShip.url.split('/')[starShip.url.split('/').length - 2], 0);
    starShip.UUID = starShip.url.substring(environment.api_sw_imageUrl_base.length);
    starShip.imageUrl = `${environment.api_sw_imageUrl_base}${starShip.id}.jpg`;
    starShip.defaultImage = 'url(/assets/images/not_found.png)';
    return starShip;
  }

}
