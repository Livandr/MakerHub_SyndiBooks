import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/models/account';
import { AccountingService } from 'src/app/services/accounting.service';

@Component({
  selector: 'app-supplier-account',
  templateUrl: './supplier-account.component.html',
  styleUrls: ['./supplier-account.component.scss']
})
export class SupplierAccountComponent implements OnInit {

  supplierAccounts: Account[] = [];
  suppliersAccountSub!: Subscription;
  loading: boolean = false;
  solde = 0;
  totalSold = 0;
  totalDebitAmounts: number = 0;
  totalCreditAmounts: number = 0;

  constructor(
    private readonly _accountingService: AccountingService,

  ) { }


  ngOnInit(): void {
    this.loading = true;

    this._accountingService.getSuppliers().subscribe({
      next: (supplierAccounts) => {
        this.supplierAccounts = supplierAccounts;
        this.loading = false;
        this.supplierAccounts.sort((a, b) => a.accountNumber - b.accountNumber);
        this.soldSupplierAccount();
        this.totalDebits();
        this.totalCredits();
        this.totalSolds();
      }
    })
  }

  refreshSupplierAccounts(): void {
    this.supplierAccounts.sort((a, b) => a.accountNumber - b.accountNumber);
    this.loading = true;

    this._accountingService.getSuppliers().subscribe({

      next: (supplierAccounts) => {
        this.supplierAccounts = supplierAccounts;
        this.loading = false;
      }
    })
  }

  //Calcul des soldes des comptes fournisseur

  soldSupplierAccount() {
    this.supplierAccounts.forEach(Element => {
      Element.solde = Element.debitBalance - Element.creditBalance;
    })
  }

  //Calcul du total des soldes fournisseur

  totalSolds() {
    this.supplierAccounts.forEach(element => {
      this.totalSold += element.solde;
    })
  }

  //Calcul du total des montants au débit et au crédit

  totalDebits() {
    this.supplierAccounts.forEach(element => {
      this.totalDebitAmounts += element.debitBalance;
    })
  }

  totalCredits() {
    this.supplierAccounts.forEach(element => {
      this.totalCreditAmounts += element.creditBalance;
    })
  }


}
