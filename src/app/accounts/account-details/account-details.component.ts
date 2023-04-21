import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountingService } from 'src/app/services/accounting.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  loading: boolean = false;
  account!: Account;
  // accountID!: number;

  constructor(
    private readonly _accountingService: AccountingService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) {
  }

  ngOnInit(): void {
    const accountID = this._activatedRoute.snapshot.params['id'];

    this.loading = true;

    this._accountingService.getOne(accountID).subscribe({
      next: (account) => {
        this.account = account;
        this.loading = false;

      },
      error: (err) => {
        // redirection en cas d'erreur
        this._router.navigateByUrl('/account/list');
      }
    })
  }
}
