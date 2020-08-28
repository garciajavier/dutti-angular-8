import { UserService } from '@/services/user.service';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { takeUntil, first } from 'rxjs/operators';
import { User } from '@/core/models/user.model';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User>, OnDestroy {
  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private service: UserService
  ) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.service.getAll()
      .pipe(
        takeUntil(this.destroy$),
        first()
      );
  }

}
