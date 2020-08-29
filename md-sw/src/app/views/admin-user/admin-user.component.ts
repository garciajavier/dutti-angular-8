import { AuthenticationService } from '../../core/services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { take, takeUntil, flatMap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '@/core/models/user.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit, OnDestroy {

  currentUser: User;
  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    // Get users from resolver (see app-routing.module)
    this.activatedRoute.data.pipe(
      takeUntil(this.destroy$)
    ).subscribe((data) => {
      this.users.next(data.users);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(
      take(1),
      flatMap(() => this.userService.getAll().pipe()),
      takeUntil(this.destroy$),
    ).subscribe(users => {
      this.users.next(users);
    });

  }


}
