import {ILanguage} from "./employee.interface";
import {IProject} from "./project.interface";

export interface IVirtualCV {
  id: string,
  name: string,
  user: string,
  data: {
    education: {
      establishment: string,
      profession: string,
    },
    foreignLanguage: ILanguage[]
  },
  general: {
    firstName: string,
    lastName: string,
    name: string
  },
  projects: IProject[],
  resume: {
    content: string
  },
  skills: [{
    skillType: string,
      skillsOfType: [{
        skillName: string,
        experienceYears: number,
        level: string,
        lastUsedYear: number
      }]
  }]

}
