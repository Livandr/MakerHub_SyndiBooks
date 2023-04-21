import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { AccountingService } from 'src/app/services/accounting.service';

@Component({
  selector: 'app-accountset',
  templateUrl: './accountset.component.html',
  styleUrls: ['./accountset.component.scss']
})
export class AccountsetComponent implements OnInit {
  accounts: Account[] = [];
  coownershipAccounts: Account[] = [];

  constructor(
    private readonly _accountingService: AccountingService,
    private readonly _http: HttpClient,

  ) { }

  ngOnInit(): void {
    // this.accounts = this._accountingService.accounts;
    this._http.get<Account[]>("http://localhost:8080/account/all").subscribe(
      data => {
        this.accounts = data;
        this.accounts.sort((a, b) => a.accountNumber - b.accountNumber)
      }
    );
  }

  addToCoownershipList(accounts: Account) {
    this.accounts.sort((a, b) => a.accountNumber - b.accountNumber);
    this.coownershipAccounts.push(accounts);
  }




}
