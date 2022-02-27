import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable()
export class AuthService {

  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {
  }

  login(credentials: any) {
   return this.http.post('http://localhost:3000/user/login', credentials)
     .pipe(map((response: any) => {
       if (response && response.token) {
         localStorage.setItem('token', response.token);
         return true
       }
       return false;
     }));
  }

  logout() {
    localStorage.removeItem('token');

  }

  isLoggedIn() {

    const token: any = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    let isExpired = this.jwtHelper.isTokenExpired(token);

    return !isExpired;
  }

  getCurrentUser() {
    let token = localStorage.getItem('token');

    if (!token) return null;

    return this.jwtHelper.decodeToken(token);

  }

}

