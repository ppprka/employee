import {IProject, IProjectRequest} from "../../shared/interfaces/project.interface";
import {
  addProject,
  addProjectError,
  addProjectSuccess,
  deleteProject,
  deleteProjectError,
  deleteProjectSuccess,
  editProject,
  editProjectError,
  editProjectSuccess,
  getProjects,
  getProjectsError,
  getProjectsSuccess
} from "./project.actions";
import {createReducer, on} from "@ngrx/store";


export interface ProjectState {
  projects: IProject[];
  currentProject?: IProjectRequest;
  deleteId: string,
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}


export const initialState: ProjectState = {
  projects: [],
  currentProject: null,
  deleteId: '',
  error: null,
  status: 'pending',
};

export const projectsReducer = createReducer(
  initialState,
  //GET PROJECTS
  on(getProjects, (state) => ({...state, status: 'loading'})),
  on(getProjectsSuccess, (state, {projects}) => ({
    ...state,
    projects: projects,
    error: null,
    status: 'success'
  })),
  on(getProjectsError, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error'
  })),
  //ADD PROJECT
  on(addProject, (state, {project}) => ({
    ...state,
    currentProject: project,
    status: 'pending'
  })),
  on(addProjectSuccess, (state, {project}) => ({
    ...state,
    currentProject: project,
    error: null,
    status: 'success'
  })),
  on(addProjectError, (state, {error}) => ({
    ...state,
    error:error,
    status: 'error'
  })),
  //EDIT PROJECT
  on(editProject, (state, {project}) => ({
    ...state,
    currentProject: project,
    status: 'pending'
  })),
  on(editProjectSuccess, (state, {project}) => ({
    ...state,
    currentProject: project,
    error: null,
    status: 'success'
  })),
  on(editProjectError, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error'
  })),
  //DELETE PROJECT
  on(deleteProject, (state, {id}) => ({
    ...state,
    deleteId: id,
    status: 'pending'
  })),
  on(deleteProjectSuccess, (state, {id}) => ({
    ...state,
    projects: state.projects.filter(item => item.id !== id),
    error: null,
    status: 'success'
  })),
  on(deleteProjectError, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error'
  }))
)
// export const projectReducer =  (
//   state: ProjectState = initialState,
//   action: ProjectUnion
// ) => {
//   switch (action.type) {
//     case ProjectActionTypes.AddProject:
//       return {
//         ...state,
//         projects: action.payload.project,
//       }
//     case ProjectActionTypes.AddProjectSuccess:
//       return { ...state, status: 'success' };
//     case ProjectActionTypes.AddProjectError:
//       return { ...state, status: 'error' };
//
//     case ProjectActionTypes.EditProject:
//       return { ...state, pending: 'pending' };
//     case ProjectActionTypes.EditProjectSuccess:
//       return {
//         ...state,
//         project: action.payload.project,
//       }
//     case ProjectActionTypes.EditProjectError:
//       return { ...state, status: 'success' };
//     case ProjectActionTypes.LoadProjects:
//       return { ...state, status: 'error' };
//     case ProjectActionTypes.LoadProjectsSuccess:
//       return {
//         ...state,
//         projects: action.payload.projects
//       }
//     case ProjectActionTypes.LoadProjectsError:
//       return { ...state, pending: false };
//
//     case ProjectActionTypes.DeleteProject:
//       return { ...state, pending: true };
//     case ProjectActionTypes.DeleteProjectSuccess:
//       return{
//         ...state,
//         id: action.payload.id
//       }
//     case ProjectActionTypes.DeleteProjectError:
//       return { ...state, pending: false };
//
//     default:
//       return state;
//   }
// };
