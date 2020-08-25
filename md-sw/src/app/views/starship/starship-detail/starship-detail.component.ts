import { ActivatedRoute } from '@angular/router';

import { environment } from 'environments/environment';
import { StarShip } from '@/core/models/starship.model';
import { StarShipsService } from '@/services/starships.service';


import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent implements OnInit {

  public starShip: StarShip;

  constructor(private starShipsService: StarShipsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.starShip = data.starShip;
    });
  }

}
