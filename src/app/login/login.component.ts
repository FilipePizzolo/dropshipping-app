import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public rest: RestService,
    private router: Router,
    private cookieService: CookieService) { }

  username: string;
  password: string;
  
  ngOnInit() {
    this.username = 'User1';
    this.password = 'pass1';
  }

  login(): void {
    this.rest.authenticate(this.username, this.password).subscribe((result) => {
      configureLogin(result);
    }, (err) => {
      console.log(err);
    });
    
    function configureLogin(result) {
      let bearerToken = 'Bearer ' + result.access_token;
      this.cookieService.set('AuthToken', bearerToken);
      // TODO: route according to role
    }
    // if (this.username == 'admin' && this.password == 'admin') {
    //   this.router.navigate(["products"]);
    // } else {
    //   alert("Invalid credentials");
    // }
  }

}
