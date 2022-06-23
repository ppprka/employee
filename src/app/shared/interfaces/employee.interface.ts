export interface IEmployee {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  institution: string,
  diplomaProfession: string,
  department: string,
  skills: ISkill[],
  role: IRole,
  languages: ILanguage[]
}

export interface ISkill {
  name: string,
  category: {
    name: string,
    id: string
  },
  experience: number,
  lastUsed: number,
  level: {
    name: string,
    id: string
  },
  id: string
}

export interface ILanguage {
  id: string,
  name: string,
  everydayReadingLevel: {name: string, id: string},
  everydayWritingLevel: {name: string, id: string},
  everydaySpeakingLevel: {name: string, id: string},
  professionalReadingLevel: {name: string, id: string},
  professionalWritingLevel: {name: string, id: string},
  professionalSpeakingLevel: {name: string, id: string},
}

export interface IRole {
  name: string,
  id: string
}
