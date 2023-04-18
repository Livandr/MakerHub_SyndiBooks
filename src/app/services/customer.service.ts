import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CoOwnership } from '../models/co-ownership';
import { CustomerForm } from '../models/customer-form';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private CUSTOMER_URL = "http://localhost:8080/customer/list";
  private _customerChanged = new BehaviorSubject<undefined>(undefined);
  private apiUrl: string = 'http://localhost:8080/customer';

  constructor(private readonly _httpClient: HttpClient) { }

  get $customerChanged() {
    return this._customerChanged.asObservable();
  }

  getAll(): Observable<CoOwnership[]> {
    return this._httpClient.get<CoOwnership[]>(this.CUSTOMER_URL);
  }

  getOne(id: number): Observable<CoOwnership> {
    return this._httpClient.get<CoOwnership>(`${this.apiUrl}/${id}`);
  }

  create(form: CustomerForm): Observable<never> {
    return this._httpClient.post<never>("http://localhost:8080/customer/add", form)
      .pipe(
        tap((data) => this._customerChanged.next(undefined))
      )
  }

  update(id: number, data: any) {
    return this._httpClient.put<CoOwnership>(`${this.apiUrl}/${id}`, data);
  }


  delete(customer: CoOwnership): Observable<any> {
    const url = `${this.apiUrl}/${customer.id}`;

    return this._httpClient.delete<CoOwnership>(url);
  }
}
