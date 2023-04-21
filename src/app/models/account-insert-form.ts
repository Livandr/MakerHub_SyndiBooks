import { Validators } from "@angular/forms";

export interface AccountInsertForm {

    accountNumber: number,
    accountTitle: string,
    type: string,
    debitBalance: number,
    creditBalance: number,



}

export const ACCOUNT_INSERT_FORM = {


    'accountNumber': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.min(1), Validators.max(7)]],
    'accountTitle': ['', [Validators.minLength(2), Validators.maxLength(20)]],
    'debitBalance': [''],
    'creditBalance': [''],
}