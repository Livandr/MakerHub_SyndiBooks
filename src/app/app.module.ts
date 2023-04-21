import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page404Component } from './components/page404/page404.component';
import { CustomerService } from './services/customer.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SupplierService } from './services/supplier.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountingService } from './services/accounting.service';
import { LoginService } from './services/login.service';

import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { LoginComponent } from './components/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    LoginComponent






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    LoginService,
    AccountingService,
    CustomerService,
    SupplierService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
