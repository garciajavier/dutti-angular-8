import { Component, OnInit, Input } from '@angular/core';
import { StarShip } from '@/core/models/starship.model';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss']
})
export class StarshipCardComponent implements OnInit {

  @Input() starShip: StarShip;
  id: string;

  constructor() { }

  ngOnInit() {
    this.id = this.starShip.url.replace('http://swapi.dev/api/starships/', ' ').slice(0, -1);
  }

}
