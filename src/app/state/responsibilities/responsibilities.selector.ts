import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {ResponsibilitiesState} from "./responsibilities.reducer";
import {ProjectRolesState} from "../project-roles/project-roles.reducer";
import {IProjectRoleName, IResponsibilityName} from "../../shared/interfaces/project.interface";
import {selectProjectRoles} from "../project-roles/project-roles.selector";

export const selectResponsibilities = (state: AppState) => state.responsibilities;

export const selectAllResponsibilities = createSelector(
  selectResponsibilities,
  (state: ResponsibilitiesState) => state.responsibilities
);

export const selectAllResponsibilitiesNames = createSelector(
  selectResponsibilities,
  (state: ResponsibilitiesState) => state.responsibilities.map(item => {
    let a : IResponsibilityName = {
      name: item.name
    }
    return a;
  })
);
