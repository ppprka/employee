import {createReducer, on} from "@ngrx/store";
import {IVirtualCV} from "../../shared/interfaces/virtual-cv.interface";
import {
  getUsersVirtualCV, getUsersVirtualCVError,
  getUsersVirtualCVSuccess,
  getVirtualCV,
  getVirtualCVError,
  getVirtualCVSuccess, updateVirtualCV, updateVirtualCVError, updateVirtualCVSuccess
} from "./virtual-cv.actions";

export interface VirtualCVState {
  virtualCV: IVirtualCV[];
  id: string;
  currentVirtualCV?: IVirtualCV;
  deleteId: string,
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}


export const initialState: VirtualCVState = {
  virtualCV: [],
  id: '',
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
  })),
  on(getUsersVirtualCV, (state, action) => ({
    ...state,
    id: action.id,
    status: 'loading'
  })),
  on(getUsersVirtualCVSuccess, (state, {virtualCV}) => ({
    ...state,
    virtualCV: virtualCV,
    error: null,
    status: 'success'
  })),
  on(getUsersVirtualCVError, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error'
  })),
  on(updateVirtualCV, (state, action) => ({
    ...state,
    currentVirtualCV: action.virtualCV,
    status: 'loading'
  })),
  on(updateVirtualCVSuccess, (state, action) => ({
    ...state,
    currentVirtualCV: action.virtualCV,
    status: 'success'
  })),
  on(updateVirtualCVError, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error'
  }))
)
