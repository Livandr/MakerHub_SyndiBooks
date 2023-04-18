import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;
  validation: boolean = false;

  constructor(
    private readonly _loginService: LoginService,
    private readonly _router: Router
  ) {
    localStorage.clear();
    this.form = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl('', [Validators.required, Validators.minLength(4)])
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this._loginService.login(this.form.value).subscribe(
        {
          next: value => this._router.navigateByUrl("/home"),
          error: (error) => this.validation = true
        }
      )
      this.form.reset({
        'user': "",
        'password': ""
      });
    }
  }

}
