import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppDatepickerComponent} from "./app-datepicker.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";



@NgModule({
  declarations: [AppDatepickerComponent],
  exports: [
    AppDatepickerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule
  ]
})
export class AppDatepickerModule { }
