import { MinLengthValidator, Validators } from "@angular/forms";
export interface LoginForm {

    username: string,
    password: string
}

export const LOGIN_FORM = {
    'username': ['', [Validators.required]],
    'password': ['', [Validators.required, Validators.minLength(4)]]
}