import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customer', loadChildren: () => import('./entity-customer/customer.module').then(m => m.CustomerModule) },
  { path: 'supplier', loadChildren: () => import('./entity-supplier/supplier.module').then(m => m.SupplierModule) },
  { path: 'account', loadChildren: () => import('./accounts/accounting.module').then(m => m.AccountingModule) },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
