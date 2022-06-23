import {ISpecialization} from "../../shared/interfaces/project.interface";
import {createReducer, on} from "@ngrx/store";
import {getSpecializations, getSpecializationsError, getSpecializationsSuccess} from "./specialization.actions";

export interface SpecializationState {
  specializations: ISpecialization[];
  currentSpecialization?: ISpecialization;
  deleteId: string,
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}


export const initialState: SpecializationState = {
  specializations: [],
  currentSpecialization: null,
  deleteId: '',
  error: null,
  status: 'pending',
};

export const specializationsReducer = createReducer(
  initialState,
  on(getSpecializations, (state) => ({...state, status: 'loading'})),
  on(getSpecializationsSuccess, (state, {specializations}) => ({
    ...state,
    specializations: specializations,
    error: null,
    status: 'success'
  })),
  on(getSpecializationsError, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error'
  }))
)
