import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppInputComponent} from "./app-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";



@NgModule({
  declarations: [AppInputComponent],
  exports: [
    AppInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule
  ]
})
export class AppInputModule { }
