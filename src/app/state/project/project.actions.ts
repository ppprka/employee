import {Action, createAction, props} from "@ngrx/store";
import {IProject, IProjectRequest} from "../../shared/interfaces/project.interface";
import {Update} from "@ngrx/entity";


export enum ProjectActionTypes {
  AddProject = '[Crate/Edit Project] Add Project Request',
  AddProjectSuccess = '[Crate/Edit Project] Project Added Success',
  AddProjectError = '[Crate/Edit Project] Project Added Error',

  EditProject = '[Crate/Edit Project] Update Project Request',
  EditProjectSuccess = '[Crate/Edit Project] Project Updated Success',
  EditProjectError = '[Crate/Edit Project] Project Updated Error',

  DeleteProject = '[Delete Project] Delete Project Request',
  DeleteProjectSuccess = '[Delete Project] Project Delete Success',
  DeleteProjectError = 'Delete Project] Project Deleted Error',

  LoadProjects = '[Load Projects] Load Project Request',
  LoadProjectsSuccess = '[Load Projects] Projects Loaded Success',
  LoadProjectsError = '[Load Projects] Projects Loaded Error'
}
//LOAD PROJECTS
export const getProjects = createAction(
  ProjectActionTypes.LoadProjects
)
export const getProjectsSuccess = createAction(
  ProjectActionTypes.LoadProjectsSuccess,
  props<{projects:IProject[]}>()
)
export const getProjectsError = createAction(
  ProjectActionTypes.LoadProjectsError,
  props<{error: string}>()
)
//ADD PROJECT
export const addProject = createAction(
  ProjectActionTypes.AddProject,
  props<{project: IProjectRequest}>()
)
export const addProjectSuccess = createAction(
  ProjectActionTypes.AddProjectSuccess,
  props<{project: IProjectRequest}>()
)
export const addProjectError = createAction(
  ProjectActionTypes.AddProjectError,
  props<{error: string}>()
)
//EDIT PROJECT
export const editProject = createAction(
  ProjectActionTypes.EditProject,
  props<{project: IProjectRequest}>()
)
export const editProjectSuccess = createAction(
  ProjectActionTypes.EditProjectSuccess,
  props<{project: IProjectRequest}>()
)
export const editProjectError = createAction(
  ProjectActionTypes.EditProjectError,
  props<{error: string}>()
)
//DELETE PROJECT
export const deleteProject = createAction(
  ProjectActionTypes.DeleteProject,
  props<{id: string}>()
)
export const deleteProjectSuccess = createAction(
  ProjectActionTypes.DeleteProjectSuccess,
  props<{id: string}>()
)
export const deleteProjectError = createAction(
  ProjectActionTypes.DeleteProjectError,
  props<{error: string}>()
)
