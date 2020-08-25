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
export class TopbarMenuComponent implements OnInit {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  starship() {
    this.router.navigate(['']);
  }

}
