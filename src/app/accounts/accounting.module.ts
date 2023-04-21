import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingComponent } from './accountset/accounting/accounting.component';
import { AccountingService } from '../services/accounting.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AccountsetComponent } from './accountset/accountset.component';
import { CoownershipComponent } from './accountset/coownership/coownership.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChargesComponent } from './charges/charges.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { SupplierAccountComponent } from './supplier-account/supplier-account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { BalanceComponent } from './balance/balance.component';



@NgModule({
  declarations: [
    AccountDashboardComponent,
    AccountingComponent,
    AccountsetComponent,
    CoownershipComponent,
    AccountDashboardComponent,

    AccountsetComponent,
    ChargesComponent,
    AccountCreateComponent,
    SupplierAccountComponent,
    AccountDetailsComponent,
    BalanceComponent
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    HttpClientModule,
    NgScrollbarModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    AccountingService
  ]
})
export class AccountingModule { }
