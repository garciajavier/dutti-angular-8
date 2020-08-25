import { StarShipResolver } from './../../services/resolvers/starship.resolver';
import { StarshipComponent } from './starship.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';


const routes: Routes = [
  { path: '', component: StarshipComponent },
  {
    path: ':id', component: StarshipDetailComponent,
    resolve: {
      starShip: StarShipResolver
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipRoutingModule { }
