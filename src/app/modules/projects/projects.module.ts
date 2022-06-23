import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppDatepickerModule} from "../../shared/components/controls/app-datepicker/app-datepicker.module";
import {ProjectsPageComponent} from "./pages/projects-page/projects-page.component";
import {RouterModule, Routes} from "@angular/router";
import {ProjectsAddPageComponent} from "./pages/projects-add-page/projects-add-page.component";
import {ProjectsEditPageComponent} from "./pages/projects-edit-page/projects-edit-page.component";
import {
  PROJECT_ADD_ROUTE,
  PROJECT_EDIT_ROUTE,
} from "../../shared/constants/routing-path.const";
import {HttpClientModule} from "@angular/common/http";
import {BaseTableModule} from "../../shared/components/base-table/base-table.module";
import {TableModule} from "primeng/table";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {ProjectEffects} from "../../state/project/project.effects";
import {CalendarModule} from "primeng/calendar";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ChipsModule} from "primeng/chips";
import {projectsReducer} from "../../state/project/project.reducer";
import {projectRolesReducer} from "../../state/project-roles/project-roles.reducer";
import {ProjectRolesEffects} from "../../state/project-roles/project-roles.effects";
import {responsibilitiesReducer} from "../../state/responsibilities/responsibilities.reducer";
import {specializationsReducer} from "../../state/specializations/specialization.reducer";
import {ResponsibilitiesEffects} from "../../state/responsibilities/responsibilities.effects";
import {SpecializationEffects} from "../../state/specializations/specialization.effects";
import {ProjectFormModule} from "./components/project-form/project-form.module";


const routes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent,

  },
  {
  path: PROJECT_EDIT_ROUTE.path,
    data: {breadcrumb: 'Projects edit'},
    component: ProjectsEditPageComponent,
  },
  {
  path: PROJECT_ADD_ROUTE.path,
    data: {breadcrumb: 'Projects add'},
    component: ProjectsAddPageComponent
  }
]


@NgModule({
    declarations: [
        ProjectsPageComponent,
        ProjectsAddPageComponent,
        ProjectsEditPageComponent],
    exports: [
        ProjectsAddPageComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        BaseTableModule,
        AppDatepickerModule,
        RouterModule.forChild(routes),
        TableModule,
        StoreModule.forFeature('projects', projectsReducer),
        StoreModule.forFeature('projectRoles', projectRolesReducer),
        StoreModule.forFeature('responsibilities', responsibilitiesReducer),
        StoreModule.forFeature('specializations', specializationsReducer),
        EffectsModule.forFeature([ProjectEffects, ProjectRolesEffects, ResponsibilitiesEffects, SpecializationEffects]),
        CalendarModule,
        InputTextModule,
        InputTextareaModule,
        ChipsModule,
        ProjectFormModule
    ]
})
export class ProjectsModule { }
