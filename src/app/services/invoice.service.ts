import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Invoice } from '../models/invoice';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private INVOICES_URL = "http://localhost:8080/invoice/all";
  private INVOICE_DETAILS_URL = "http://localhost:8080/invoice/details/"
  private _invoiceChanged = new BehaviorSubject<undefined>(undefined);

  constructor(
    private readonly _http: HttpClient
  ) { }

  get $invoiceChanged() {
    return this._invoiceChanged.asObservable();
  }

  getAll(): Observable<Invoice[]> {
    return this._http.get<Invoice[]>(this.INVOICES_URL);

  }

  getDetails(invoiceID: number): Observable<Invoice> {
    return this._http.get<Invoice>(`${this.INVOICE_DETAILS_URL}/${invoiceID}`);

  }


}
