import {IRoutingPath} from "../interfaces/routing-path.interface";

export const AUTH_ROUTE: IRoutingPath = {
  path: 'auth',
  fullPath: '/auth'
};

export const CORE_ROUTE: IRoutingPath = {
  path: '',
  fullPath: '/'
};


export const DASHBOARD_ROUTE: IRoutingPath = {
  path: 'dashboard',
  fullPath: '/dashboard'
};

export const EMPLOYEES_ROUTE: IRoutingPath = {
  path: 'employees',
  fullPath: '/employees'
};

export const PROJECT_ROUTE: IRoutingPath = {
  path: 'projects',
  fullPath: '/projects'
};

export const PROJECT_ADD_ROUTE: IRoutingPath = {
  path: 'add',
  fullPath: '/add'
};

export const PROJECT_EDIT_ROUTE: IRoutingPath = {
  path: 'edit',
  fullPath: '/edit'
};

export const BACKEND_URL = 'https://innowise-cv-generator.herokuapp.com/'
