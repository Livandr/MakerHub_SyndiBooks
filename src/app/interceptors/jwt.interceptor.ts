import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";



@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private readonly _loginService: LoginService
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        const user = this._loginService.user;

        if (user) {
            const authRequest = request.clone({
                headers: request.headers.set("Authorization", user.token)
            })
            return next.handle(authRequest);
        }
        return next.handle(request);
    }


}