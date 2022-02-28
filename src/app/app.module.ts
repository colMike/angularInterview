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
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import {AuthGuard} from "./services/auth-guard.service";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { RegisterComponent } from './register/register.component';
import { ApplyLoanComponent } from './admin/apply-loan/apply-loan.component';
import { CheckLoanLimitsComponent } from './admin/check-loan-limits/check-loan-limits.component';
import { DownloadScheduleComponent } from './admin/download-schedule/download-schedule.component';
import { LoanReoaymentProcessComponent } from './admin/loan-reoayment-process/loan-reoayment-process.component';
import { CheckBalanceComponent } from './admin/check-balance/check-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    BsNavbarComponent,
    RegisterComponent,
    ApplyLoanComponent,
    CheckLoanLimitsComponent,
    DownloadScheduleComponent,
    LoanReoaymentProcessComponent,
    CheckBalanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'no-access', component: NoAccessComponent},

      {path: 'admin/applyLoan', component: ApplyLoanComponent, canActivate: [AuthGuard]},
      {path: 'admin/checkLoanLimits', component: CheckLoanLimitsComponent, canActivate: [AuthGuard]},
      {path: 'admin/loanRepaymentProcess', component: LoanReoaymentProcessComponent, canActivate: [AuthGuard]},
      {path: 'admin/checkBalance', component: CheckBalanceComponent, canActivate: [AuthGuard]},
      {path: 'admin/downloadSchedule', component: DownloadScheduleComponent, canActivate: [AuthGuard]},



    ]),

    // For Multilingual support
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    OrderService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
