import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {AppDatepickerModule} from "../../shared/components/controls/app-datepicker/app-datepicker.module";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [{
  path: '',
  component: AuthComponent
}];

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AppDatepickerModule,
    ButtonModule,
    RippleModule,
    CheckboxModule,
    InputTextModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AuthModule { }
