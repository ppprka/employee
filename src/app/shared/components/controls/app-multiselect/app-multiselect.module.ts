import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppMultiselectComponent} from "./app-multiselect.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MultiSelectModule} from "primeng/multiselect";



@NgModule({
  declarations: [AppMultiselectComponent],
  exports: [
    AppMultiselectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MultiSelectModule
  ]
})
export class AppMultiselectModule { }
