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
  LoadVirtualCVError = '[Load VirtualCV] VirtualCV Loaded Error',

  LoadUsersVirtualCV = '[Load users VirtualCV] Load VirtualCV Request',
  LoadUsersVirtualCVSuccess = '[Load users VirtualCV] VirtualCV Loaded Success',
  LoadUsersVirtualCVError = '[Load users VirtualCV] VirtualCV Loaded Error',

  UpdateVirtualCV= '[Update virtualCV] request',
  UpdateVirtualCVSuccess = '[Update virtualCV] success',
  UpdateVirtualCVError = '[Update virtualCV] error'
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

export const getUsersVirtualCV = createAction(
  VirtualCVActionTypes.LoadUsersVirtualCV,
  props<{id: string}>()
)
export const getUsersVirtualCVSuccess = createAction(
  VirtualCVActionTypes.LoadUsersVirtualCVSuccess,
  props<{ virtualCV: IVirtualCV[] }>()
)
export const getUsersVirtualCVError = createAction(
  VirtualCVActionTypes.LoadUsersVirtualCVError,
  props<{ error: string }>()
)

export const updateVirtualCV = createAction(
  VirtualCVActionTypes.UpdateVirtualCV,
  props<{virtualCV: IVirtualCV}>()
)
export const updateVirtualCVSuccess = createAction(
  VirtualCVActionTypes.UpdateVirtualCVSuccess,
  props<{ virtualCV: IVirtualCV}>()
)
export const updateVirtualCVError = createAction(
  VirtualCVActionTypes.UpdateVirtualCVError,
  props<{ error: string }>()
)
