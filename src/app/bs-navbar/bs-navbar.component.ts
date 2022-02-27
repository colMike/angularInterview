import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  authService: AuthService;

  constructor(
    private auth_Service: AuthService,
    public translate: TranslateService) {

    this.authService = auth_Service;


    translate.addLangs(['en', 'kis']);
    translate.setDefaultLang('en');
  }

  switchLanguage(lang: string){
    this.translate.use(lang);
  }




  ngOnInit(): void {
  }

}
