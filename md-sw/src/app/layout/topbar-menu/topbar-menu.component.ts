import { AuthenticationService } from '@/core/services/authentication.service';

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@/core/models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar-menu',
  templateUrl: './topbar-menu.component.html',
  styleUrls: ['./topbar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarMenuComponent {
  currentUser: User;

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser$.subscribe(user => this.currentUser = user);
  }

  logout() {
    this.router.navigate(['/login']);
    this.authenticationService.logout();
  }
  starship() {
    this.router.navigate(['/']);
  }

}
