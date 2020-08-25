import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipRoutingModule } from './starship-routing.module';
import { StarshipComponent } from './starship.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [StarshipComponent, DetailComponent],
  imports: [
    CommonModule,
    StarshipRoutingModule
  ]
})
export class StarshipModule { }
