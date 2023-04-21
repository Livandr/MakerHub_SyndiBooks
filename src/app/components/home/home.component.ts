import { Component } from '@angular/core';
import { CoOwnership } from 'src/app/models/co-ownership';
import { CustomerService } from 'src/app/services/customer.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  loggedIn: boolean = false

  constructor(
    private readonly _loginService: LoginService
  ) { }

  get isLoggedIn() {
    return this._loginService.user ? true : false
  }



}
