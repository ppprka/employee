import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectFormComponent} from "./project-form.component";
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
  declarations: [ProjectFormComponent],
  exports: [
    ProjectFormComponent
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
export class ProjectFormModule { }
