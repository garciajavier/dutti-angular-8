import { BackButtonDirective } from './../../core/directives/back-button.directive';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipRoutingModule } from './starship-routing.module';
import { StarshipComponent } from './starship.component';
import { StarshipCardComponent } from './starship-card/starship-card.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';


@NgModule({
  declarations: [StarshipComponent, StarshipCardComponent, StarshipDetailComponent, BackButtonDirective],
  imports: [
    CommonModule,
    StarshipRoutingModule,
    MaterialModule
  ]
})
export class StarshipModule { }
