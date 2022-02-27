import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eclectics Web Application';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'kis']);
    translate.setDefaultLang('kis');
  }

  switchLanguage(lang: string){
    this.translate.use(lang);
  }
}
