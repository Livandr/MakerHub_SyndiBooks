import { Transaction } from "./transaction";

export interface Account {
    accountId: number,
    accountNumber: number,
    accountTitle: string,
    type: string,
    debitBalance: number,
    creditBalance: number,
    solde: number
    // transactions: Transaction[],
}