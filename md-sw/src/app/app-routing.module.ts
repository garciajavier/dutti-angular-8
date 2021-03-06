import { UserResolver } from '@/services/resolvers/users.resolver';
import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopbarMenuComponent } from './layout/topbar-menu/topbar-menu.component';

export const routes: Routes = [
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
        path: 'users',
        loadChildren: () => import('./views/admin-user/admin-user.module').then(m => m.AdminUserModule),
        resolve: {
          users: UserResolver
        },
        canActivate: [AuthGuard],
        data: {
          roles: ['ADMIN']
        }
      },
      {
        path: 'starships',
        loadChildren: () => import('./views/starship/starship.module').then(m => m.StarshipModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'info',
        loadChildren: () => import('./views/info/info.module').then(m => m.InfoModule),
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
