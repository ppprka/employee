import {createAction, props} from "@ngrx/store";
import {IProjectRole, IResponsibility} from "../../shared/interfaces/project.interface";

export enum ResponsibilitiesActionTypes {
  AddResponsibility = '[Crate/Edit Responsibilities] Add Responsibilities Request',
  AddResponsibilitySuccess = '[Crate/Edit Responsibilities] Responsibilities Added Success',
  AddResponsibilityError = '[Crate/Edit Responsibilities] Responsibilities Added Error',

  EditResponsibility = '[Crate/Edit Responsibilities] Update Responsibilities Request',
  EditResponsibilitiesSuccess = '[Crate/Edit Responsibilities] Responsibilities Updated Success',
  EditResponsibilityError = '[Crate/Edit Responsibilities] Responsibilities Updated Error',

  DeleteResponsibility = '[Delete Responsibilities] Delete Responsibilities Request',
  DeleteResponsibilitySuccess = '[Delete Responsibilities] Responsibilities Delete Success',
  DeleteResponsibilityError = 'Delete Responsibilities] Responsibilities Deleted Error',

  LoadResponsibilities = '[Load Responsibilities] Load Responsibilities Request',
  LoadResponsibilitiesSuccess = '[Load Responsibilities] Responsibilities Loaded Success',
  LoadResponsibilitiesError = '[Load Responsibilities] Responsibilities Loaded Error'
}

//LOAD PROJECTS
export const getResponsibilities = createAction(
  ResponsibilitiesActionTypes.LoadResponsibilities
)
export const getResponsibilitiesSuccess = createAction(
  ResponsibilitiesActionTypes.LoadResponsibilitiesSuccess,
  props<{ responsibilities: IResponsibility[] }>()
)
export const getResponsibilitiesError = createAction(
  ResponsibilitiesActionTypes.LoadResponsibilitiesError,
  props<{ error: string }>()
)
