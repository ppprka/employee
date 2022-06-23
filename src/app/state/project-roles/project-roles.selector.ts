import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {ProjectRolesState} from "./project-roles.reducer";

export const selectProjectRoles = (state: AppState) => state.projectRoles;

export const selectAllProjectRoles = createSelector(
  selectProjectRoles,
  (state: ProjectRolesState) => state.projectRoles
);
