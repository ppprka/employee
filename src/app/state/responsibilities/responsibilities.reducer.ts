import {IResponsibility} from "../../shared/interfaces/project.interface";
import {createReducer, on} from "@ngrx/store";
import {getResponsibilities, getResponsibilitiesError, getResponsibilitiesSuccess} from "./responsibilities.actions";

export interface ResponsibilitiesState {
  responsibilities: IResponsibility[];
  currentResponsibility?: IResponsibility;
  deleteId: string,
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}


export const initialState: ResponsibilitiesState = {
  responsibilities: [],
  currentResponsibility: null,
  deleteId: '',
  error: null,
  status: 'pending',
};

export const responsibilitiesReducer = createReducer(
  initialState,
  //GET PROJECTS
  on(getResponsibilities, (state) => ({...state, status: 'loading'})),
  on(getResponsibilitiesSuccess, (state, {responsibilities}) => ({
    ...state,
    responsibilities: responsibilities,
    error: null,
    status: 'success'
  })),
  on(getResponsibilitiesError, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error'
  }))
)
