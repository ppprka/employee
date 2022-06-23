import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {
  CORE_ROUTE,
  DASHBOARD_ROUTE,
  EMPLOYEES_ROUTE,
  PROJECT_ROUTE
} from "../../shared/constants/routing-path.const";

import {CoreComponent} from "./core.component";
import {AuthGuard} from "../../shared/services/auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'Home'},
    component: CoreComponent,
    children: [
      { path: DASHBOARD_ROUTE.path, canActivate: [AuthGuard], data: {breadcrumb: 'Dashboard'}, loadChildren: () => import('../dashboard-module/dashboard.module').then(m => m.DashboardModule)},
      { path: EMPLOYEES_ROUTE.path, canActivate: [AuthGuard], data: {breadcrumb: 'Employees'}, loadChildren: () => import('../employees-module/pages/employees.module').then(m => m.EmployeesModule)},
      { path: PROJECT_ROUTE.path,
        canActivate: [AuthGuard],
        data: {breadcrumb: 'Projects'},
        loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsModule),
        }
    ]},
  { path: '**', redirectTo: PROJECT_ROUTE.path },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
