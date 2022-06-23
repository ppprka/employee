import {ILanguage} from "./employee.interface";
import {IProject, IProjectCV} from "./project.interface";

export interface IVirtualCV {
  id: string;
  name: string;
  user: string;
  data: {
    education: {
      establishment: string;
      profession: string;
    };
    foreignLanguage: ILanguage[];
    projects: IProjectCV[]
  };
  general: {
    firstName: string;
    lastName: string;
    name: string
  };
  resume: {
    content: string
  };
  skills: [{
    skillType: string;
      skillsOfType: [{
        skillName: string;
        experienceYears: number;
        level: string;
        lastUsedYear: number
      }]
  }]

}
