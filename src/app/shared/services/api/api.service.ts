import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {BACKEND_URL} from "../../constants/routing-path.const";
import {
  IProject,
  IProjectRequest,
  IProjectRole,
  IResponsibility,
  ISpecialization
} from "../../interfaces/project.interface";
import {IEmployee} from "../../interfaces/employee.interface";
import {IVirtualCV} from "../../interfaces/virtual-cv.interface";

@Injectable({
  providedIn: 'root'
})
export class ProjectsPageService {

  constructor(private http: HttpClient) {
  }

  //PROJECT
  public getAllProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${BACKEND_URL}projects`);
  }
  public addProject(project: IProjectRequest): Observable<IProjectRequest> {
    console.log("обавление проекта")
    return this.http.post<IProjectRequest>(`${BACKEND_URL}projects`, project);
  }
  public editProject(project: IProjectRequest): Observable<IProjectRequest> {
    return this.http.put<IProjectRequest>(`${BACKEND_URL}projects`, project)
  }
  public deleteProject(id: string): Observable<any> {
    return this.http.post<any>(`${BACKEND_URL}...`, id)
  }

  public getProject(id: string): Observable<IProject> {
    return this.http.get<IProject[]>(`${BACKEND_URL}projects?id=${id}`).pipe(map((projects) => projects[0]))
  }

  //PROJECT ROLE
  public getAllProjectRoles(): Observable<IProjectRole[]> {
    return this.http.get<IProjectRole[]>(`${BACKEND_URL}project-roles`);
  }
  public addProjectRole(name: string): Observable<IProjectRole> {
    return this.http.post<IProjectRole>(`${BACKEND_URL}project-roles`, name);
  }
  public editProjectRole(project: IProjectRole): Observable<IProjectRole> {
    return this.http.put<IProjectRole>(`${BACKEND_URL}project-roles`, project)
  }
  public deleteProjectRole(id: string): Observable<any> {
    return this.http.post<any>(`${BACKEND_URL}...`, id)
  }

  //RESPONSIBILITIES
  public getAllResponsibilities(): Observable<IResponsibility[]> {
    return this.http.get<IResponsibility[]>(`${BACKEND_URL}responsibilities`);
  }
  public addResponsibility(name: string): Observable<IResponsibility> {
    return this.http.post<IResponsibility>(`${BACKEND_URL}responsibilities`, name);
  }
  public editResponsibility(responsibility: IResponsibility): Observable<IResponsibility> {
    return this.http.put<IResponsibility>(`${BACKEND_URL}responsibilities`, responsibility)
  }
  public deleteResponsibility(id: string): Observable<any> {
    return this.http.post<any>(`${BACKEND_URL}...`, id)
  }

  //SPECIALIZATIONS
  public getAllSpecializations(): Observable<ISpecialization[]> {
    return this.http.get<ISpecialization[]>(`${BACKEND_URL}specializations`);
  }
  public addSpecialization(name: string): Observable<ISpecialization> {
    return this.http.post<ISpecialization>(`${BACKEND_URL}specializations`, name);
  }
  public editSpecialization(specialization: ISpecialization): Observable<ISpecialization> {
    return this.http.put<ISpecialization>(`${BACKEND_URL}specializations`, specialization)
  }
  public deleteSpecialization(id: string): Observable<any> {
    return this.http.post<any>(`${BACKEND_URL}...`, id)
  }

  //EMPLOYEE
  public getAllEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${BACKEND_URL}users`);
  }

  public getEmployee(id: string): Observable<IEmployee> {
    return this.http.get<IEmployee[]>(`${BACKEND_URL}users?id=${id}`).pipe(map((employees) => employees[0]))
  }

  //VIRTUALCV
  public getAllVirtualCVs(): Observable<IVirtualCV[]> {
    return this.http.get<IVirtualCV[]>(`${BACKEND_URL}virtual-cv`)
  }

  public getUsersVirtualCVs(id: string): Observable<IVirtualCV[]> {
    return this.http.get<IVirtualCV[]>(`${BACKEND_URL}virtual-cv?user=${id}`);
  }
}
