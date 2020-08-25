import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopbarMenuComponent } from './layout/topbar-menu/topbar-menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'starships',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '',
    component: TopbarMenuComponent,
    children: [
      {
        path: 'starships',
        loadChildren: () => import('./views/starship/starship.module').then(m => m.StarshipModule),
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
