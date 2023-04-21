import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { ACCOUNT_INSERT_FORM } from 'src/app/models/account-insert-form';
import { AccountingService } from 'src/app/services/accounting.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent {
  account!: Account;
  form: FormGroup;
  coownershipAccounts!: Account[];

  constructor(
    private readonly _accountingService: AccountingService,
    private _builder: FormBuilder,
    private readonly _activatedRouter: ActivatedRoute,
    private _router: Router
  ) {
    this.form = _builder.group(ACCOUNT_INSERT_FORM)
  }

  createAccount() {
    //si le form est valide
    if (this.form.valid) {
      this._accountingService.addNewAccount(this.form.value).subscribe({
        next: (newAccount) => {
          this._router.navigate(['/account/account-list', newAccount]);
          this.form.reset;
          this.coownershipAccounts.sort((a, b) => a.accountNumber - b.accountNumber);
          this.coownershipAccounts.push(newAccount)
        }
      })
    }
  }

}
