import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Supplier } from '../models/supplier';
import { HttpClient } from '@angular/common/http';
import { SupplierForm } from '../models/supplier-form';

@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    private SUPPLIER_URL = "http://localhost:8080/supplier/list";
    private _supplierChanged = new BehaviorSubject<undefined>(undefined);
    private apiURL = 'http://localhost:8080/supplier/details';

    constructor(private readonly _http: HttpClient) { }



    get $supplierChanged() {
        return this._supplierChanged.asObservable();
    }

    getAll(): Observable<Supplier[]> {
        return this._http.get<Supplier[]>(this.SUPPLIER_URL);

    }

    getOne(id: number): Observable<Supplier> {
        return this._http.get<Supplier>(`${this.apiURL}/${id}`);
    }

    create(form: SupplierForm): Observable<never> {
        return this._http.post<never>("http://localhost:8080/supplier/add", form)
            .pipe(
                tap((data) => this._supplierChanged.next(undefined))
            )
    }



    // update(supplierId: number, data: any): Observable<Supplier> {
    //     return this._http.put<Supplier>(`${this.apiURL}/${supplierId}`, data);
    // }


    delete(supplier: Supplier): Observable<any> {
        const url = `${this.apiURL}/${supplier.id}`;

        return this._http.delete<Supplier>(url);
    }




}



