import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Login } from '../shared/models/Login';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {

  }

  login(model: Login) {
    return this.http.post("/api/Login", model);
  }

}
