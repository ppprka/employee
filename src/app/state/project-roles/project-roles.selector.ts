import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {ProjectRolesState} from "./project-roles.reducer";
import {IProjectRoleName} from "../../shared/interfaces/project.interface";

export const selectProjectRoles = (state: AppState) => state.projectRoles;

export const selectAllProjectRoles = createSelector(
  selectProjectRoles,
  (state: ProjectRolesState) => state.projectRoles
);

export const selectAllProjectRolesNames = createSelector(
  selectProjectRoles,
  (state: ProjectRolesState) => state.projectRoles.map(item => {
    let a : IProjectRoleName = {
      name: item.name
    }
    return a;
  })
);
