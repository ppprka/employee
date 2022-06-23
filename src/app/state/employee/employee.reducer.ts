import {
  getEmployee, getEmployeeError,
  getEmployees,
  getEmployeesError,
  getEmployeesSuccess, getEmployeeSuccess,
} from "./employee.actions";
import {createReducer, on} from "@ngrx/store";
import {IEmployee} from "../../shared/interfaces/employee.interface";


export interface EmployeeState {
  employees: IEmployee[];
  id: string;
  currentEmployee?: IEmployee;
  deleteId: string,
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}


export const initialState: EmployeeState = {
  employees: [],
  id: '',
  currentEmployee: null,
  deleteId: '',
  error: null,
  status: 'pending',
};

export const employeesReducer = createReducer(
  initialState,
  //GET EMPLOYEES
  on(getEmployees, (state) => ({...state, status: 'loading'})),
  on(getEmployeesSuccess, (state, {employees}) => ({
    ...state,
    employees: employees,
    error: null,
    status: 'success'
  })),
  on(getEmployeesError, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error'
  })),
  on(getEmployee, (state, action) => ({
    ...state,
    id: action.id,
    status: 'loading'})),
  on(getEmployeeSuccess, (state, {employee}) => ({
    ...state,
    currentEmployee: employee,
    error: null,
    status: 'success'
  })),
  on(getEmployeeError, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error'
  }))
  // //ADD PROJECT
  // on(addProject, (state, {project}) => ({
  //   ...state,
  //   currentProject: project,
  //   status: 'pending'
  // })),
  // on(addProjectSuccess, (state, {project}) => ({
  //   ...state,
  //   currentProject: project,
  //   error: null,
  //   status: 'success'
  // })),
  // on(addProjectError, (state, {error}) => ({
  //   ...state,
  //   error:error,
  //   status: 'error'
  // })),
  // //EDIT PROJECT
  // on(editProject, (state, {project}) => ({
  //   ...state,
  //   currentProject: project,
  //   status: 'pending'
  // })),
  // on(editProjectSuccess, (state, {project}) => ({
  //   ...state,
  //   currentProject: project,
  //   error: null,
  //   status: 'success'
  // })),
  // on(editProjectError, (state, {error}) => ({
  //   ...state,
  //   error: error,
  //   status: 'error'
  // })),
  // //DELETE PROJECT
  // on(deleteProject, (state, {id}) => ({
  //   ...state,
  //   deleteId: id,
  //   status: 'pending'
  // })),
  // on(deleteProjectSuccess, (state, {id}) => ({
  //   ...state,
  //   projects: state.projects.filter(item => item.id !== id),
  //   error: null,
  //   status: 'success'
  // })),
  // on(deleteProjectError, (state, {error}) => ({
  //   ...state,
  //   error: error,
  //   status: 'error'
  // }))
)
