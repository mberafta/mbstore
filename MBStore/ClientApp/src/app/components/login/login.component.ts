import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Login } from '../../shared/models/Login';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'mbs-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  loginForm: FormGroup;
  name: AbstractControl;
  password: AbstractControl;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = fb.group({
      'name': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.name = this.loginForm.controls['name'];
    this.password = this.loginForm.controls['password'];
  }

  onSubmit(formValue: Login): void {
    this.loginService.login(formValue).subscribe(
      (response) => {
        if (response['token']) {
          localStorage.setItem('access_token', response['token']);
        }
      }
    );
  }

}
