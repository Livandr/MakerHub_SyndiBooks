import { Injectable } from '@angular/core';
import { ConnectedUser } from '../models/connected-user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isConnected?: ConnectedUser;
  private anyUserConnectedSource = new BehaviorSubject("");
  public anyUserConnected = this.anyUserConnectedSource.asObservable();

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _loginService: LoginService
  ) { }

  login(cred: { username: string, password: string },) {
    return this._httpClient.post<ConnectedUser>("http://localhost:8080/api/auth/login", cred).pipe(
      tap(resp => {
        this.isConnected = resp;
        localStorage.setItem("token", this.isConnected?.token ?? "tt")
        localStorage.setItem("username", this.isConnected?.username ?? "")
        localStorage.setItem("role", this.isConnected?.roles[0] ?? "")
        this._loginService.logOn(localStorage.getItem("role") ?? "")
      })
    )
  }

  logOn(user: string) {
    this.anyUserConnectedSource.next(user)
  }

  logOff() {
    localStorage.clear();
    this.anyUserConnectedSource.next('');
  }
}
