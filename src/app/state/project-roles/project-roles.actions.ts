import {createAction, props} from "@ngrx/store";
import {IProject, IProjectRole} from "../../shared/interfaces/project.interface";
import {ProjectActionTypes} from "../project/project.actions";

export enum ProjectRolesActionTypes {
  AddProjectRole = '[Crate/Edit ProjectRoles] Add ProjectRoles Request',
  AddProjectRoleSuccess = '[Crate/Edit ProjectRoles] ProjectRoles Added Success',
  AddProjectRoleError = '[Crate/Edit ProjectRoles] ProjectRoles Added Error',

  EditProjectRole = '[Crate/Edit ProjectRoles] Update ProjectRoles Request',
  EditProjectRoleSuccess = '[Crate/Edit ProjectRoles] ProjectRoles Updated Success',
  EditProjectRoleError = '[Crate/Edit ProjectRoles] ProjectRoles Updated Error',

  DeleteProjectRole = '[Delete ProjectRoles] Delete ProjectRoles Request',
  DeleteProjectRoleSuccess = '[Delete ProjectRoles] ProjectRoles Delete Success',
  DeleteProjectRoleError = 'Delete ProjectRoles] ProjectRoles Deleted Error',

  LoadProjectRoles = '[Load ProjectRoles] Load ProjectRoles Request',
  LoadProjectRolesSuccess = '[Load ProjectRoles] ProjectRoles Loaded Success',
  LoadProjectRolesError = '[Load ProjectRoles] ProjectRoles Loaded Error'
}

//LOAD PROJECTS
export const getProjectsRoles = createAction(
  ProjectRolesActionTypes.LoadProjectRoles
)
export const getProjectsRolesSuccess = createAction(
  ProjectRolesActionTypes.LoadProjectRolesSuccess,
  props<{ projectRoles: IProjectRole[] }>()
)
export const getProjectsRolesError = createAction(
  ProjectRolesActionTypes.LoadProjectRolesError,
  props<{ error: string }>()
)
