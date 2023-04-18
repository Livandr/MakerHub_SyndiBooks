import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/models/account';
import { AccountingService } from 'src/app/services/accounting.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent implements OnInit {

  selected: boolean = false;

  @Input()
  generalList: Account[] = [];

  @Input()
  accountsCooList: Account[] = [];

  @Output()
  addedAccounts = new EventEmitter<Account>();

  loading: boolean = false;
  accountSub!: Subscription;
  value: any;

  constructor(

    private readonly _http: HttpClient,
    private readonly _accountingService: AccountingService,
    private readonly _activatedRouter: ActivatedRoute,
    private _router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.generalList.sort((i, j) => i.accountNumber - j.accountNumber);
  }



  addAccount(account: Account) {
    this.addedAccounts.emit(account);
    this.accountsCooList.sort((a, b) => a.accountNumber - b.accountNumber);
    this.selected = true;
  }

  alreadySelected(account: Account): boolean {
    return this.accountsCooList.find(a => a.accountNumber === account.accountNumber) ? true : false;
  }


}
