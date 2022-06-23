import {createAction, props} from "@ngrx/store";
import {ISpecialization} from "../../shared/interfaces/project.interface";
import {IVirtualCV} from "../../shared/interfaces/virtual-cv.interface";

export enum VirtualCVActionTypes {
  // AddSpecialization = '[Crate/Edit Specializations] Add Specializations Request',
  // AddSpecializationSuccess = '[Crate/Edit Specializations] Specializations Added Success',
  // AddSpecializationError = '[Crate/Edit Specializations] Specializations Added Error',
  //
  // EditSpecialization = '[Crate/Edit Specializations] Update Specializations Request',
  // EditSpecializationsSuccess = '[Crate/Edit Specializations] Specializations Updated Success',
  // EditSpecializationError = '[Crate/Edit Specializations] Specializations Updated Error',
  //
  // DeleteSpecialization = '[Delete Specializations] Delete Specializations Request',
  // DeleteSpecializationSuccess = '[Delete Specializations] Specializations Delete Success',
  // DeleteSpecializationError = 'Delete Specializations] Specializations Deleted Error',

  LoadVirtualCV = '[Load VirtualCV] Load VirtualCV Request',
  LoadVirtualCVSuccess = '[Load VirtualCV] VirtualCV Loaded Success',
  LoadVirtualCVError = '[Load VirtualCV] VirtualCV Loaded Error'
}

//LOAD VirtualCV
export const getVirtualCV = createAction(
  VirtualCVActionTypes.LoadVirtualCV
)
export const getVirtualCVSuccess = createAction(
  VirtualCVActionTypes.LoadVirtualCVSuccess,
  props<{ virtualCV: IVirtualCV[] }>()
)
export const getVirtualCVError = createAction(
  VirtualCVActionTypes.LoadVirtualCVError,
  props<{ error: string }>()
)
