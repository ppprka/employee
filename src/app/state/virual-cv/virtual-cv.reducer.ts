import {createReducer, on} from "@ngrx/store";
import {IVirtualCV} from "../../shared/interfaces/virtual-cv.interface";
import {getVirtualCV, getVirtualCVError, getVirtualCVSuccess} from "./virtual-cv.actions";

export interface VirtualCVState {
  virtualCV: IVirtualCV[];
  currentVirtualCV?: IVirtualCV;
  deleteId: string,
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}


export const initialState: VirtualCVState = {
  virtualCV: [],
  currentVirtualCV: null,
  deleteId: '',
  error: null,
  status: 'pending',
};

export const virtualCVReducer = createReducer(
  initialState,
  on(getVirtualCV, (state) => ({...state, status: 'loading'})),
  on(getVirtualCVSuccess, (state, {virtualCV}) => ({
    ...state,
    virtualCV: virtualCV,
    error: null,
    status: 'success'
  })),
  on(getVirtualCVError, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error'
  }))
)
