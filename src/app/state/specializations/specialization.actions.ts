import {createAction, props} from "@ngrx/store";
import {ISpecialization} from "../../shared/interfaces/project.interface";

export enum SpecializationsActionTypes {
  AddSpecialization = '[Crate/Edit Specializations] Add Specializations Request',
  AddSpecializationSuccess = '[Crate/Edit Specializations] Specializations Added Success',
  AddSpecializationError = '[Crate/Edit Specializations] Specializations Added Error',

  EditSpecialization = '[Crate/Edit Specializations] Update Specializations Request',
  EditSpecializationsSuccess = '[Crate/Edit Specializations] Specializations Updated Success',
  EditSpecializationError = '[Crate/Edit Specializations] Specializations Updated Error',

  DeleteSpecialization = '[Delete Specializations] Delete Specializations Request',
  DeleteSpecializationSuccess = '[Delete Specializations] Specializations Delete Success',
  DeleteSpecializationError = 'Delete Specializations] Specializations Deleted Error',

  LoadSpecializations = '[Load Specializations] Load Specializations Request',
  LoadSpecializationsSuccess = '[Load Specializations] Specializations Loaded Success',
  LoadSpecializationsError = '[Load Specializations] Specializations Loaded Error'
}

//LOAD PROJECTS
export const getSpecializations = createAction(
  SpecializationsActionTypes.LoadSpecializations
)
export const getSpecializationsSuccess = createAction(
  SpecializationsActionTypes.LoadSpecializationsSuccess,
  props<{ specializations: ISpecialization[] }>()
)
export const getSpecializationsError = createAction(
  SpecializationsActionTypes.LoadSpecializationsError,
  props<{ error: string }>()
)
