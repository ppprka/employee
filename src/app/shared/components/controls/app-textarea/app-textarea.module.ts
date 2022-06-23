import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTextareaComponent } from './app-textarea.component';
import {InputTextareaModule} from "primeng/inputtextarea";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppTextareaComponent
  ],
  exports: [
    AppTextareaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextareaModule
  ]
})
export class AppTextareaModule { }
