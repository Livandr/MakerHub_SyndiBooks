import { Transaction } from "./transaction";

export interface SupplierAccount {

    accountNumber: number,
    accountTitle: string,
    debitBalance: number,
    creditBalance: number,
    transactions: Transaction[],
}