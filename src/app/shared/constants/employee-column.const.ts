import {IEmployeeColumn, IProjectColumn} from "../interfaces/columns.interface";

export const EMPLOYEE_NAME: IEmployeeColumn = {
  columnName: 'First Name',
  name: 'firstName'
}
export const EMPLOYEE_LAST_NAME: IEmployeeColumn = {
  columnName: 'Last Name',
  name: 'lastName'
}
export const EMPLOYEE_EMAIL: IEmployeeColumn = {
  columnName: 'Email',
  name: 'email'
}
export const EMPLOYEE_DEPARTMENT: IEmployeeColumn = {
  columnName: 'Department',
  name: 'department'
}


export const EMPLOYEES_COLUMNS: IProjectColumn[] = [
  EMPLOYEE_NAME,
  EMPLOYEE_LAST_NAME,
  EMPLOYEE_EMAIL,
  EMPLOYEE_DEPARTMENT
]
