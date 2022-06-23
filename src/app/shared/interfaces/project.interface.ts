export interface IProject {
  description: string,
  endDate: Date,
  id: string,
  name: string,
  projectRoles: IProjectRole[],
  responsibilities: IResponsibility[],
  secondName: string,
  specializations: ISpecialization[],
  startDate: Date,
  tasksPerformed: string,
  teamSize: number,
}

export interface IResponsibility {
  name: string,
  id: string
}

export interface IProjectRole {
  name: string,
  id: string
}

export interface ISpecialization {
  name: string,
  id: string
}

export interface IProjectRequest {
  description: string,
  endDate: Date,
  id: string,
  name: string,
  projectRoles: string[],
  responsibilities: string[],
  secondName: string,
  specializations: string[],
  startDate: Date,
  tasksPerformed: string,
  teamSize: number
}
