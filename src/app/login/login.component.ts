import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // @ts-ignore
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  signIn(credentials: any) {
    console.log('activated route');
    console.log(this.route);
    this.authService.login(credentials)
      .subscribe(result => {
        if (result) {

          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

          this.router.navigate([returnUrl || '/admin']);
        }
        else
          this.invalidLogin = true;
      }, error => {
        console.log(error)
      });
  }
}
