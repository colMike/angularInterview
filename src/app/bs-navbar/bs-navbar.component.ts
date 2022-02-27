import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  authService: AuthService;

  constructor(private auth_Service: AuthService) {
    this.authService = auth_Service;
  }

  ngOnInit(): void {
  }

}
