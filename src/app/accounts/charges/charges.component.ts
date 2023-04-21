import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, elementAt } from 'rxjs';
import { Account } from 'src/app/models/account';
import { ChargeAccount } from 'src/app/models/charge-account';
import { AccountingService } from 'src/app/services/accounting.service';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss']
})
export class ChargesComponent implements OnInit {

  chargesAndProductsAccounts: Account[] = [];
  chargesAndProductsSub!: Subscription;
  loading: boolean = false;
  totalDebitAmounts: number = 0;
  totalCreditAmounts: number = 0;



  constructor(

    private readonly _accountingService: AccountingService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {

    this.loading = true;

    this._accountingService.getChargesAndProducts().subscribe({
      //succès de la requête
      next: (chargesAndProductsAccounts) => {
        this.chargesAndProductsAccounts = chargesAndProductsAccounts;
        this.loading = false;
        this.totalDebits();
        this.totalCredits();
      }
    })


  }


  OnSelectedAccount(accountNumber: Account) {
    this._router.navigateByUrl('account/details/' + accountNumber);
  }

  //Mise à jour de la liste des requêtes et gestion des erreurs
  refreshChargesAndProducts(): void {

    this.loading = true;

    this._accountingService.getChargesAndProducts().subscribe({
      //succès de la requête
      next: (chargesAndProductsAccounts) => {
        this.chargesAndProductsAccounts = chargesAndProductsAccounts;
        this.loading = false;
      }
    })
  }

  //Calcul du total des charges et des produits

  totalDebits() {
    this.chargesAndProductsAccounts.forEach(element => {
      this.totalDebitAmounts += element.debitBalance;
    });
  }

  totalCredits() {
    this.chargesAndProductsAccounts.forEach(element => {
      this.totalCreditAmounts += element.creditBalance;
    });
  }
}
