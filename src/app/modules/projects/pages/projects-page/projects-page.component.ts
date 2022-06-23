import {Component, OnInit} from '@angular/core';

import {PROJECT_COLUMNS} from "../../../../shared/constants/project-column.const";
import {Store} from "@ngrx/store";
import {addProject, editProject, getProjects} from "../../../../state/project/project.actions";
import {selectAllProjects} from "../../../../state/project/project.selector";
import {Observable, tap} from "rxjs";
import {IProject, IProjectRequest, IProjectRole} from "../../../../shared/interfaces/project.interface";
import {Router} from "@angular/router";
import {AppState} from "../../../../state/app.state";
import {selectAllProjectRoles} from "../../../../state/project-roles/project-roles.selector";
import {getProjectsRoles} from "../../../../state/project-roles/project-roles.actions";


@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  public columns = PROJECT_COLUMNS;
  public projects$: Observable<IProject[]>;
  public projectRoles$: Observable<IProjectRole[]>
  public project: IProject;
  public showBaseTable = true;
  public showEditTable = false;
  public showAddTable = false;


  constructor(private store: Store<AppState>, private router: Router) {
  }

  ngOnInit(): void {
    this.store.dispatch(getProjects());
    this.projects$ = this.store.select(selectAllProjects).pipe(tap(projects => console.log(projects)));
    console.log('Тут')
    this.store.dispatch(getProjectsRoles());
    this.projectRoles$ = this.store.select(selectAllProjectRoles).pipe(tap(roles => console.log(roles)))
  }

  public editProject(raw: IProject): void {
    this.project = raw;
    console.log(this.project)
    this.showBaseTable = false;
    this.showEditTable = true;
  }

  public addProject(): void {
    this.showBaseTable = false;
    this.showAddTable = true;
  }

  public save(projectToSave: IProject): void {
    let project: IProjectRequest = {
      id: projectToSave?.id,
      description: projectToSave.description,
      endDate: projectToSave.endDate,
      startDate: projectToSave.startDate,
      name: projectToSave.name,
      secondName: projectToSave.secondName,
      tasksPerformed: projectToSave.tasksPerformed,
      teamSize: Number(projectToSave.teamSize),
      projectRoles: projectToSave.projectRoles.map(item => item.id),
      responsibilities: projectToSave.responsibilities.map(item => item.id),
      specializations: projectToSave.specializations.map(item => item.id)
    }
    if (project.id) {
      this.store.dispatch(editProject({project: project}))
    } else {
      this.store.dispatch(addProject({project: project}))
    }
  }
}
