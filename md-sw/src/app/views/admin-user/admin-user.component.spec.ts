import { ActivatedRoute } from '@angular/router';
import { UserService } from '@/services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserComponent } from './admin-user.component';

describe('AdminUserComponent', () => {
  let component: AdminUserComponent;
  let fixture: ComponentFixture<AdminUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserComponent],
      imports: [MatCardModule, MatIconModule, HttpClientTestingModule],
      providers: [
        UserService,
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ data: 1 }),
            root: {
              routeConfig: {
                data: {
                  users: 'a'
                },
                path: '/starships'
              }
            },

          }
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('delete user', () => {
    const service: UserService = TestBed.get(UserService);
    spyOn(service, 'delete').and.returnValue(of());
    component.deleteUser(0);
    expect(service.delete).toHaveBeenCalled();
  });
});
