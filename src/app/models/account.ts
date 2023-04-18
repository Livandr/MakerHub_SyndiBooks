import { Transaction } from "./transaction";

export interface Account {

    accountNumber: number,
    accountTitle: string,
    debitBalance: number,
    creditBalance: number,
    transactions: Transaction[],
}