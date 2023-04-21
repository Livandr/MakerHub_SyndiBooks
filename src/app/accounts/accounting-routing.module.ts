import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsetComponent } from './accountset/accountset.component';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { ChargesComponent } from './charges/charges.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { SupplierAccountComponent } from './supplier-account/supplier-account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { BalanceComponent } from './balance/balance.component';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AccountDashboardComponent },
  { path: 'details', component: AccountDetailsComponent },
  { path: 'account-list', component: AccountsetComponent },
  { path: 'create', component: AccountCreateComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'charges', component: ChargesComponent },
  { path: 'suppliers', component: SupplierAccountComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
