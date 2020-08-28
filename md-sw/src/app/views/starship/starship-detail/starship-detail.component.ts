import { ActivatedRoute } from '@angular/router';
import { StarShip } from '@/core/models/starship.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent implements OnInit {

  public starShip: StarShip;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.starShip = data.starShip;
    });
  }

}
