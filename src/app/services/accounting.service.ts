import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {
  // getWidgets(): Observable<WidgetDefinition<unknown>[]> | undefined {
  //   throw new Error('Method not implemented.');
  // }

  private _accounts!: Account[];

  private ACCOUNTS_URL = "http://localhost:8080/account/all";
  private _accountChanged = new BehaviorSubject<undefined>(undefined);
  private apiUrl: string = "http://localhost:8080/account/";

  constructor(
    private _http: HttpClient
  ) { }

  get $accountChanged() {
    return this._accountChanged.asObservable();

  }

  public get accounts(): Account[] {
    return this._accounts;
  }

  addAccount(account: Account) {
    this._accounts.push(account);
  }

  getAll(): Observable<Account[]> {
    return this._http.get<Account[]>(this.ACCOUNTS_URL);
  }

  getOne(id: number): Observable<Account> {
    return this._http.get<Account>(`${this.apiUrl}/${id}`);
  }




}
