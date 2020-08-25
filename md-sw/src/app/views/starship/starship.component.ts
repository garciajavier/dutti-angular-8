
import { Component, OnInit } from '@angular/core';
import { User } from '@/core/models/user.model';
import { AuthenticationService } from '@/core/services/authentication.service';


@Component({ templateUrl: 'starship.component.html' })
export class StarshipComponent implements OnInit {
  currentUser: User;

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
  }

}
