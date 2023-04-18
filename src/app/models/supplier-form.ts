import { Validators } from "@angular/forms";

export interface SupplierForm {

    bceNumber: string,
    supplierName: string,
    streetName: string,
    streetNumber: string,
    streetBoxNumber: string,
    postalCode: number,
    city: string,
    phone: string,
    email: string,
    bankDetailIBAN: string,
    bankDetailBIC: string,

}


export const SUPPLIER_FORM = {

    'bceNumber': [],
    'supplierName': ['', [Validators.required, Validators.pattern('[A-Za-z ]+')]],
    'streetName': [],
    'streetNumber': [],
    'streetBoxNumber': [],
    'postalCode': [],
    'city': [],
    'phone': [],
    'email': ['', Validators.email],
    'bankDetailIBAN': [],
    'bankDetailBIC': [],
}