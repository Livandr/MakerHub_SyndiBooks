import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { BehaviorSubject, Observable } from 'rxjs';
import { AccountInsertForm } from '../models/account-insert-form';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {


  private _accounts!: Account[];
  private _chargesAndProducts!: Account[];
  private _suppliers!: Account[];

  private ACCOUNTS_URL = "http://localhost:8080/account/all";
  private CHARGES_AND_PRODUCTS_URL = "http://localhost:8080/account/charges";
  private SUPPLIER_ACCOUNTS_URL = "http://localhost:8080/account/suppliers";
  private _accountChanged = new BehaviorSubject<undefined>(undefined);
  private apiUrl: string = "http://localhost:8080/account/details";

  constructor(
    private _http: HttpClient
  ) { }

  get $accountChanged() {
    return this._accountChanged.asObservable();

  }

  public get accounts(): Account[] {
    return this._accounts;
  }

  public get chargesAndProducts(): Account[] {
    return this._chargesAndProducts;
  }

  public get suppliers(): Account[] {
    return this._suppliers;
  }

  addAccount(account: Account) {
    this._accounts.push(account);
  }

  addNewAccount(form: AccountInsertForm): Observable<never> {
    return this._http.post<never>("http://localhost:8080/account/add", form)

  }

  getAll(): Observable<Account[]> {
    return this._http.get<Account[]>(this.ACCOUNTS_URL);

  }

  getChargesAndProducts(): Observable<Account[]> {
    return this._http.get<Account[]>(this.CHARGES_AND_PRODUCTS_URL);
  }

  getSuppliers(): Observable<Account[]> {
    return this._http.get<Account[]>(this.SUPPLIER_ACCOUNTS_URL);
  }

  getOne(id: number): Observable<Account> {
    return this._http.get<Account>(`${this.apiUrl}/` + id);
  }




}
