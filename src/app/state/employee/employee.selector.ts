import {
  createSelector
} from '@ngrx/store';

import {EmployeeState} from "./employee.reducer";
import {AppState} from "../app.state";

export const selectEmployees = (state: AppState) => state.employees;

export const selectAllEmployees = createSelector(
  selectEmployees,
  (state: EmployeeState) => state.employees
);
