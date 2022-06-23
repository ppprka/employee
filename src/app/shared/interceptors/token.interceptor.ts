import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";
import {AUTH_ROUTE} from "../constants/routing-path.const";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem("access_token");
    if (idToken && this.authService.isLoggedIn()) {
      const cloned = request.clone({
        headers: request.headers.set("Authorization",
          "Bearer " + idToken)
      });
      return next.handle(cloned);
    } else if (!this.authService.isLoggedIn()) {
      return next.handle(request);
    }
    else {
      this.authService.logout();
      this.router.navigate([AUTH_ROUTE.path])
      return EMPTY;
    }
  }
}
