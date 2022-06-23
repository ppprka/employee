import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {ResponsibilitiesState} from "./responsibilities.reducer";

export const selectResponsibilities = (state: AppState) => state.responsibilities;

export const selectAllResponsibilities = createSelector(
  selectResponsibilities,
  (state: ResponsibilitiesState) => state.responsibilities
);
