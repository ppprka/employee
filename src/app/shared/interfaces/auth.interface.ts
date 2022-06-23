export interface AuthTokenI {
  skills: string[],
  languages: string[],
  firstName: string,
  lastName: string,
  email: string,
  institution: string,
  diplomaProfession: string,
  role: Roles[],
  department: string,
  id: string,
  expiresIn: string,
  accessToken: string,
}


export interface AuthCredsI {
  email: string,
  password: string
}
export interface Roles {
  name: string,
  id: string
}
