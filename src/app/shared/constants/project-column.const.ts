import {IProjectColumn} from "../interfaces/columns.interface";


export const PROJECT_NAME: IProjectColumn = {
  columnName: 'Name',
  name: 'name'
}
export const PROJECT_SECOND_NAME: IProjectColumn = {
  columnName: 'Second Name',
  name: 'secondName'
}
export const PROJECT_START_DATE: IProjectColumn = {
  columnName: 'Start date',
  name: 'startDate'
}
export const PROJECT_END_DATE: IProjectColumn = {
  columnName: 'End date',
  name: 'endDate'
}
export const PROJECT_TEAM_SIZE: IProjectColumn = {
  columnName: 'Team Size',
  name: 'teamSize'
}
export const PROJECT_TASKS_PERFORMED: IProjectColumn = {
  columnName: 'Tasks Performed',
  name: 'tasksPerformed'
}
export const PROJECT_DESCRIPTION: IProjectColumn = {
  columnName: 'Description',
  name: 'description'
}

export const PROJECT_COLUMNS: IProjectColumn[] = [
  PROJECT_NAME,
  PROJECT_SECOND_NAME,
  PROJECT_START_DATE,
  PROJECT_END_DATE,
  PROJECT_TEAM_SIZE,
  PROJECT_TASKS_PERFORMED,
  PROJECT_DESCRIPTION

]
