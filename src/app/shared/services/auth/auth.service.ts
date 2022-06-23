import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthCredsI, AuthTokenI} from "../../interfaces/auth.interface";
import {BACKEND_URL} from "../../constants/routing-path.const";
import {Observable} from "rxjs";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(creds: AuthCredsI): Observable<AuthTokenI> {
    return this.http.post<AuthTokenI>("https://innowise-cv-generator.herokuapp.com/auth/login", creds);
  }

  setSession(token: AuthTokenI) {
    const setExpired = moment().add(token.expiresIn, 'millisecond');
    localStorage.setItem('access_token', token.accessToken)
    localStorage.setItem('id_token', token.id);
    localStorage.setItem('expires_at', JSON.stringify(setExpired.valueOf()));
    localStorage.setItem('firstName', token.firstName);
    localStorage.setItem('lastName', token.lastName)
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
