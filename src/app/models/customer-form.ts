import { Validators } from "@angular/forms";

export interface CustomerForm {

    id: number,
    bce: string,
    coOwnershipName: string,
    streetName: string,
    streetNumber: string,
    postalCode: number,
    city: string,
    bankDetailIBAN: string,
    bankDetailBIC: string,
}

export const CUSTOMER_FORM = {


    bce: [],
    coOwnershipName: [, Validators.required],
    streetName: [],
    streetNumber: [],
    postalCode: [],
    city: [],
    bankDetailIBAN: [],
    bankDetailBIC: [],
}