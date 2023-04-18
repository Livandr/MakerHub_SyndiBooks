import { Validators } from "@angular/forms";
import { Account } from "./account";
import { CoOwnership } from "./co-ownership";
import { SupplierAccount } from "./supplier-account";


export interface InvoiceRegister {

    coOwnership: CoOwnership,
    invoiceDate: Date,
    invoiceNumber: number,
    invoiceDescription: string,
    amountExclVat: number,
    vat: number,
    amountInclVat: number,
    supplier: SupplierAccount,
    inputAccount: Account,
    dueDate: Date,
    additionalNotes: String

}

export const INVOICE_REGISTER_FORM = {

    'coOwnership': ['', Validators.required],
    'invoiceDate': ['', Validators.required],
    'invoiceNumber': ['', Validators.required],
    'invoiceDescription': ['', Validators.required],
    'amountExclVat': ['', Validators.required],
    'vat': [],
    'amountInclVat': ['', Validators.required],
    'supplier': ['', Validators.required],
    'inputAccount': ['', Validators.required],
    'dueDate': [],
    'additionalNotes': []
}