import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsModule} from "../projects/projects.module";
import {CoreRoutingModule} from "./core.routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
import {CoreComponent} from "./core.component";
import {MenubarModule} from "primeng/menubar";
import {MenuModule} from "primeng/menu";
import {SharedModule} from "primeng/api";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: CoreComponent
  }
]

@NgModule({
  declarations: [
    BreadcrumbComponent,
    CoreComponent
  ],
  imports: [
    MenubarModule,
    MenuModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CoreRoutingModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],

})
export class CoreModule { }
