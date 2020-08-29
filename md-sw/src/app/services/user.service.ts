import { User } from './../core/models/user.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  /**
   * Get all Users
   */
  getAll() {
    return this.http.get<User[]>(`${environment.api_url}/users`);
  }

  /**
   * Get user
   * @param User User to register
   */
  register(user: User) {
    return this.http.post(`${environment.api_url}/users/register`, user);
  }

  /**
   * Delete user
   * @param id Id user to delte
   */
  delete(id: number) {
    return this.http.delete(`${environment.api_url}/users/${id}`);
  }
}
