import { AuthenticationService } from '@/core/services/authentication.service';

import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { User } from '@/core/models/user.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-topbar-menu',
  templateUrl: './topbar-menu.component.html',
  styleUrls: ['./topbar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarMenuComponent implements OnDestroy {

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  currentUser: User;

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(user => this.currentUser = user);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  logout() {
    this.router.navigate(['/login']);
    this.authenticationService.logout();
  }
  starship() {
    this.router.navigate(['/']);
  }

}
