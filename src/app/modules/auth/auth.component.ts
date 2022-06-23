import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth/auth.service";
import {AuthCredsI, AuthTokenI} from "../../shared/interfaces/auth.interface";
import {map} from "rxjs";
import * as moment from "moment";
import {HttpErrorResponse} from "@angular/common/http";
import {CORE_ROUTE, PROJECT_ROUTE} from "../../shared/constants/routing-path.const";


@Component({
  selector: 'app-auth-module',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public authForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  handleLogin() {
    let loginCreds = <AuthCredsI>this.authForm.getRawValue();
    this.authService.login(loginCreds).pipe(map((data: any) => data)).subscribe(
      (response: AuthTokenI) => {
        this.authService.setSession(response);
        this.authForm.reset();
        this.router.navigate([PROJECT_ROUTE.path]);
      },
      (error: HttpErrorResponse) => {
        alert(`User with such username and password does not exist`)
      }
    )
  }



}
