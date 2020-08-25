import { Component, OnInit, Input } from '@angular/core';
import { StarShip } from '@/core/models/starship.model';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss']
})
export class StarshipCardComponent implements OnInit {

  @Input() starShip: StarShip;

  constructor() { }

  ngOnInit() {
  }

}
