import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
// @ts-ignore
  invalidForm: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  signIn(userDetails: any) {

    console.log('Registration credentials');
    console.log(userDetails);


    this.authService.register(userDetails)
      .subscribe(result => {
        if (result) {

          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

          this.router.navigate([returnUrl || '/admin']);
        }
        else
          this.invalidForm = true;
      }, error => {
        console.log(error)
      });
  }
}
