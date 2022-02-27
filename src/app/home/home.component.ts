import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  authService: AuthService;

  constructor(private auth_Service: AuthService) {
    this.authService = auth_Service;
  }

  onLogout() {
    this.authService.logout();
  }
}
