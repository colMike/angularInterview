import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // @ts-ignore
  orders: any[];
  authService: AuthService;


  constructor(
    private orderService: OrderService,
    private auth_Service: AuthService) {
    this.authService = auth_Service;
  }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe((orders: any) => {
        console.log(orders['orders']);
        this.orders = orders['orders'];
      });
  }

  onLogout() {
    this.authService.logout();
  }

}
