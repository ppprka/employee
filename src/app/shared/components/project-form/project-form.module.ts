import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectFormComponent} from "./project-form.component";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {ChipsModule} from "primeng/chips";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ReactiveFormsModule} from "@angular/forms";
import {MultiSelectModule} from "primeng/multiselect";
import {AppInputModule} from "../controls/app-input-text/app-input.module";
import {AppMultiselectModule} from "../controls/app-multiselect/app-multiselect.module";
import {AppTextareaModule} from "../controls/app-textarea/app-textarea.module";
import {AppDatepickerModule} from "../controls/app-datepicker/app-datepicker.module";
import {StoreModule} from "@ngrx/store";
import {projectsReducer} from "../../../state/project/project.reducer";
import {projectRolesReducer} from "../../../state/project-roles/project-roles.reducer";
import {responsibilitiesReducer} from "../../../state/responsibilities/responsibilities.reducer";
import {specializationsReducer} from "../../../state/specializations/specialization.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ProjectEffects} from "../../../state/project/project.effects";
import {ProjectRolesEffects} from "../../../state/project-roles/project-roles.effects";
import {ResponsibilitiesEffects} from "../../../state/responsibilities/responsibilities.effects";
import {SpecializationEffects} from "../../../state/specializations/specialization.effects";



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
    StoreModule.forFeature('projects', projectsReducer),
    StoreModule.forFeature('projectRoles', projectRolesReducer),
    StoreModule.forFeature('responsibilities', responsibilitiesReducer),
    StoreModule.forFeature('specializations', specializationsReducer),
    EffectsModule.forFeature([ProjectEffects, ProjectRolesEffects, ResponsibilitiesEffects, SpecializationEffects]),
    AppInputModule,
    AppMultiselectModule,
    AppTextareaModule,
    AppDatepickerModule
  ]
})
export class ProjectFormModule { }
