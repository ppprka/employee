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

export interface IProjectCV {
  description: string,
  endDate: Date,
  id: string,
  name: string,
  projectRoles: IProjectRoleName[],
  responsibilities: IResponsibilityName[],
  secondName: string,
  specializations: string[],
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

export interface IResponsibilityName {
  name: string,
}

export interface IProjectRoleName {
  name: string,
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
