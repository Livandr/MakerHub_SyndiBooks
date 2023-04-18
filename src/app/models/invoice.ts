import { Account } from "./account";
import { CoOwnership } from "./co-ownership";
import { SupplierAccount } from "./supplier-account";

export interface Invoice {

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