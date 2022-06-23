import {createAction, props} from "@ngrx/store";
import {IEmployee} from "../../shared/interfaces/employee.interface";


export enum EmployeeActionTypes {
  // AddEmployee = '[Crate/Edit Employee] Add Employee Request',
  // AddEmployeeSuccess = '[Crate/Edit Employee] Employee Added Success',
  // AddEmployeeError = '[Crate/Edit Employee] Employee Added Error',
  //
  // EditEmployee = '[Crate/Edit Employee] Update Employee Request',
  // EditEmployeeSuccess = '[Crate/Edit Employee] Employee Updated Success',
  // EditEmployeeError = '[Crate/Edit Employee] Employee Updated Error',
  //
  // DeleteEmployee = '[Delete Employee] Delete Employee Request',
  // DeleteEmployeeSuccess = '[Delete Employee] Employee Delete Success',
  // DeleteEmployeeError = 'Delete Employee] Employee Deleted Error',

  LoadEmployees = '[Load Employees] Load Employee Request',
  LoadEmployeesSuccess = '[Load Employees] Employees Loaded Success',
  LoadEmployeesError = '[Load Employees] Employees Loaded Error'
}
//LOAD Employees
export const getEmployees = createAction(
  EmployeeActionTypes.LoadEmployees
)
export const getEmployeesSuccess = createAction(
  EmployeeActionTypes.LoadEmployeesSuccess,
  props<{employees:IEmployee[]}>()
)
export const getEmployeesError = createAction(
  EmployeeActionTypes.LoadEmployeesError,
  props<{error: string}>()
)
//ADD Employee
// export const addEmployee = createAction(
//   EmployeeActionTypes.AddEmployee,
//   props<{Employee: IEmployeeRequest}>()
// )
// export const addEmployeeSuccess = createAction(
//   EmployeeActionTypes.AddEmployeeSuccess,
//   props<{Employee: IEmployeeRequest}>()
// )
// export const addEmployeeError = createAction(
//   EmployeeActionTypes.AddEmployeeError,
//   props<{error: string}>()
// )
// //EDIT Employee
// export const editEmployee = createAction(
//   EmployeeActionTypes.EditEmployee,
//   props<{Employee: IEmployeeRequest}>()
// )
// export const editEmployeeSuccess = createAction(
//   EmployeeActionTypes.EditEmployeeSuccess,
//   props<{Employee: IEmployeeRequest}>()
// )
// export const editEmployeeError = createAction(
//   EmployeeActionTypes.EditEmployeeError,
//   props<{error: string}>()
// )
// //DELETE Employee
// export const deleteEmployee = createAction(
//   EmployeeActionTypes.DeleteEmployee,
//   props<{id: string}>()
// )
// export const deleteEmployeeSuccess = createAction(
//   EmployeeActionTypes.DeleteEmployeeSuccess,
//   props<{id: string}>()
// )
// export const deleteEmployeeError = createAction(
//   EmployeeActionTypes.DeleteEmployeeError,
//   props<{error: string}>()
// )

