import { Injectable } from '@angular/core';
import { ConnectedUser } from '../models/connected-user';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, finalize, tap } from 'rxjs';
import { Router } from '@angular/router';

export interface Auth {
  token: string,
  // refreshToken: string;
  username: string;
  roles: string[];
}

type User = {
  lastname: string,
  firstname: string,
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isConnected?: ConnectedUser;
  private readonly AUTH_STORAGE_KEY = "user_data";
  private _connectedSubject = new BehaviorSubject(this.connected);


  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _router: Router
  ) { }



  login(cred: { username: string, password: string },) {

    console.log(cred)

    return this._httpClient.post<ConnectedUser>("http://localhost:8080/auth/login", cred).pipe(
      tap(resp => {
        this.user = resp;
        this._connectedSubject.next(this.connected);
      }),
      catchError((err) => { throw new Error(err.message); }),
      finalize(() => {
        if (this.user?.roles.includes("ROLE_ADMIN"))
          this._router.navigateByUrl("/home")
      })
    )
  }

  logout() {

    this.user = undefined;
    this._connectedSubject.next(this.connected);
    this._router.navigateByUrl("/home");
  }

  get user(): Auth | undefined {
    const userJson = localStorage.getItem(this.AUTH_STORAGE_KEY)

    if (userJson)
      return JSON.parse(userJson);

    return undefined;
  }

  private set user(user: Auth | null | undefined) {
    console.log(typeof user);

    if (!user)
      localStorage.removeItem(this.AUTH_STORAGE_KEY);
    else
      localStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify(user));
  }

  get connected() {
    return this.user !== undefined
  }

  get connected$() {
    return this._connectedSubject.asObservable();
  }



}
