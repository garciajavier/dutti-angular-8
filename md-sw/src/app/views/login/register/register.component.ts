
import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { AuthenticationService } from '@/core/services/authentication.service';
import { UserService } from '@/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar,
    public authenticationService: AuthenticationService
  ) {
    // redirect to starship if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      roles: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(take(1))
      .subscribe(() => {
        this.snackBar.open('Registro completado', 'OK', {
          duration: 2000,
        });
        this.router.navigate(['/']);
      });
  }
}
