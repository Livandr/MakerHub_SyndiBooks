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
export class AccountingComponent {

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


  ) { }


  addAccount(account: Account) {
    this.addedAccounts.emit(account);
    this.accountsCooList.sort((a, b) => a.accountNumber - b.accountNumber);
    this.selected = true;
  }

  alreadySelected(account: Account): boolean {
    return this.accountsCooList.find(a => a.accountNumber === account.accountNumber) ? true : false;
  }


}
