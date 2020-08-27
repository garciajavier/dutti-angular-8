import { AuthenticationService } from './../../core/services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { first } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { User } from '@/core/models/user.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {

  currentUser: User;
  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.users.next(data.users);
    });
  }

  deleteUser(id: number) {
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => {
        this.userService.getAll()
          .pipe(first())
          .subscribe(users => {
            this.users.next(users);
          });
      });
  }


}
