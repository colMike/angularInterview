import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable()
export class AuthService {
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
    return false;
  }
}

