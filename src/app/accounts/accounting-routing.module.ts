import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsetComponent } from './accountset/accountset.component';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';

const routes: Routes = [

  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'account', component: AccountComponent },
  { path: 'account-list', component: AccountsetComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'charges', component: InvoicesComponent },
  { path: 'invoice-create', component: InvoiceCreateComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
