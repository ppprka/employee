import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseTableComponent} from "./base-table.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    BaseTableComponent
  ],
  exports: [
    BaseTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule
  ]
})
export class BaseTableModule { }
