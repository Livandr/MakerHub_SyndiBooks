import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  connectedUser!: User;
  loggedIn: boolean = false;
  form: FormGroup;
  notvalid: boolean = false;

  constructor(

    private readonly _loginService: LoginService,
    private readonly _router: Router
  ) {
    this.form = new FormGroup({
      'login': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required, Validators.minLength(4)])
    })
    localStorage.clear();
  }


  ngOnInit() {

  }


  onSubmit() {
    if (this.form.valid) {
      // Appel au service
      this._loginService.login(this.form.value).subscribe(
        {
          next: value => {
            this.loggedIn = true;
            this._router.navigateByUrl('/home');
          },
          error: (error) => this.notvalid = true
        }
      )
      // this.form.reset({
      //   login: [''],
      //   password: [''],
      // });
    }
  }

}
