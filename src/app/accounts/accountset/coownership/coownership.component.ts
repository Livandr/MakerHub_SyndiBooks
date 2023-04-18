import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-coownership',
  templateUrl: './coownership.component.html',
  styleUrls: ['./coownership.component.scss']
})
export class CoownershipComponent {

  completed: boolean = false;

  @Input()
  accountsCooList: Account[] = []



  removeAccount(account: Account) {
    const index = this.accountsCooList.indexOf(account);
    this.accountsCooList.splice(index, 1);
  }

}
