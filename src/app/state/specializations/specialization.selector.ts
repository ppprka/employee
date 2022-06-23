
import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {SpecializationState} from "./specialization.reducer";

export const selectSpecializations = (state: AppState) => state.specializations;

export const selectAllSpecializations = createSelector(
  selectSpecializations,
  (state: SpecializationState) => state.specializations
);
