import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeesPageComponent} from "./employee-page/employees-page.component";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {RouterModule, Routes} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {BaseTableModule} from "../../../shared/components/base-table/base-table.module";
import {StoreModule} from "@ngrx/store";
import {employeesReducer} from "../../../state/employee/employee.reducer";
import {EffectsModule} from "@ngrx/effects";
import {EmployeeEffects} from "../../../state/employee/employee.effects";
import {EmployeesAddPageComponent} from "./employee-add-page/employees-add-page.component";
import {EmployeesEditPageComponent} from "./employee-edit-page/employees-edit-page.component";
import {EmployeeFormModule} from "../components/employee-form/employee-form.module";
import {TabMenuModule} from "primeng/tabmenu";
import {PanelMenuModule} from "primeng/panelmenu";
import {MenuModule} from "primeng/menu";
import {virtualCVReducer} from "../../../state/virual-cv/virtual-cv.reducer";
import {VirtualCvEffects} from "../../../state/virual-cv/virtual-cv.effects";
import {TableModule} from "primeng/table";
import {AccordionModule} from "primeng/accordion";
import {ProjectFormModule} from "../../projects/components/project-form/project-form.module";

const routes: Routes = [
  {
    path: '',
    component: EmployeesPageComponent
  }];

@NgModule({
  declarations: [
    EmployeesPageComponent,
    EmployeesAddPageComponent,
    EmployeesEditPageComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('virtualCV', virtualCVReducer),
    StoreModule.forFeature('employees', employeesReducer),
    EffectsModule.forFeature([EmployeeEffects, VirtualCvEffects]),
    ButtonModule,
    BaseTableModule,
    EmployeeFormModule,
    TabMenuModule,
    PanelMenuModule,
    MenuModule,
    TableModule,
    AccordionModule,
    ProjectFormModule
  ]
})
export class EmployeesModule { }
