import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingComponent } from './accountset/accounting/accounting.component';
import { AccountingService } from '../services/accounting.service';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AccountsetComponent } from './accountset/accountset.component';
import { CoownershipComponent } from './accountset/coownership/coownership.component';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './widget/widget.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AccountingComponent,
    InvoiceCreateComponent,
    AccountsetComponent,
    CoownershipComponent,
    AccountComponent,
    DashboardComponent,
    WidgetComponent,
    InvoicesComponent,
    InvoiceCreateComponent,
    AccountsetComponent
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
