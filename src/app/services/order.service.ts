import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders() {
    let token: any = localStorage.getItem('token');

    const options = {
      headers: new HttpHeaders().append('Authorization', 'Bearer ' + token)
    }

    return this.http.get('http://localhost:3000/user/orders', options);
  }
}
