

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User } from '@/core/models/user.model';
import { Role } from '../models/role.model';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);
  public currentUser$: Observable<User>;

  private roles: BehaviorSubject<Role[]> = new BehaviorSubject(null);
  public roles$ = this.roles.asObservable();


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  set setRoles(roles: Role[]) {
    this.roles.next(roles);
  }

  login(username, password) {
    return this.http.post<any>(`${environment.api_url}/users/authenticate`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  userCan(hasRoles: string[]): boolean {
    return hasRoles.some(role => {
      return this.currentUserValue.roles.some(currentRole => {
        return currentRole.code === role;
      });
    });
  }

}
