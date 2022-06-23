import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {VirtualCVState} from "./virtual-cv.reducer";



export const selectVirtualCV = (state: AppState) => state.virtualCV;

export const selectAllVirtualCV = createSelector(
  selectVirtualCV,
  (state: VirtualCVState) => state.virtualCV
);
