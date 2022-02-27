import {OrderService} from './services/order.service';
import {AuthService} from './services/auth.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AdminComponent} from './admin/admin.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NoAccessComponent} from './no-access/no-access.component';
import {HttpClientModule} from "@angular/common/http";
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    BsNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'login', component: LoginComponent},
      {path: 'no-access', component: NoAccessComponent}
    ])
  ],
  providers: [
    OrderService,

    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
