import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeFormComponent} from "./employee-form.component";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {ChipsModule} from "primeng/chips";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ReactiveFormsModule} from "@angular/forms";
import {MultiSelectModule} from "primeng/multiselect";
import {AppInputModule} from "../../../../shared/components/controls/app-input-text/app-input.module";
import {AppMultiselectModule} from "../../../../shared/components/controls/app-multiselect/app-multiselect.module";
import {AppTextareaModule} from "../../../../shared/components/controls/app-textarea/app-textarea.module";
import {AppDatepickerModule} from "../../../../shared/components/controls/app-datepicker/app-datepicker.module";



@NgModule({
  declarations: [EmployeeFormComponent],
  exports: [
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CalendarModule,
    ChipsModule,
    InputTextareaModule,
    ReactiveFormsModule,
    MultiSelectModule,
    AppInputModule,
    AppMultiselectModule,
    AppTextareaModule,
    AppDatepickerModule
  ]
})
export class EmployeeFormModule { }
