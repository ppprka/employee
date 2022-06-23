import {IProjectRole} from "../../shared/interfaces/project.interface";
import {createReducer, on} from "@ngrx/store";
import {getProjectsRoles, getProjectsRolesError, getProjectsRolesSuccess} from "./project-roles.actions";

export interface ProjectRolesState {
  projectRoles: IProjectRole[];
  currentProjectRole?: IProjectRole;
  deleteId: string,
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}


export const initialState: ProjectRolesState = {
  projectRoles: [],
  currentProjectRole: null,
  deleteId: '',
  error: null,
  status: 'pending',
};

export const projectRolesReducer = createReducer(
  initialState,
  //GET PROJECTS
  on(getProjectsRoles, (state) => ({...state, status: 'loading'})),
  on(getProjectsRolesSuccess, (state, {projectRoles}) => ({
    ...state,
    projectRoles: projectRoles,
    error: null,
    status: 'success'
  })),
  on(getProjectsRolesError, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error'
  }))
)
