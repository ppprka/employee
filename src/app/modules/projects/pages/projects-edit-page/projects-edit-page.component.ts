import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {IProject, IProjectRequest} from "../../../../shared/interfaces/project.interface";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {editProject, getProject} from "../../../../state/project/project.actions";
import {selectProject} from "../../../../state/project/project.selector";

@Component({
  selector: 'app-projects-edit',
  templateUrl: './projects-edit-page.component.html',
  styleUrls: ['./projects-edit-page.component.css']
})
export class ProjectsEditPageComponent implements OnInit, OnChanges {

  public project: IProject;
  public id: string;


  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    ).subscribe(data => {
      this.id = data;
    });

  }

  ngOnInit(): void {
    this.store.dispatch(getProject({id: this.id.toString()}));
    this.store.select(selectProject).subscribe(
      data => {
        this.project = data
        this.changeBreadCrumb();
      }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['project'] && changes['project'].currentValue) {
      this.project = changes['project'].currentValue;
    }
  }
  public save(project: IProject): void {
    let projectRequest: IProjectRequest = {
      id: project?.id,
      description: project.description,
      endDate: project.endDate,
      startDate: project.startDate,
      name: project.name,
      secondName: project.secondName,
      tasksPerformed: project.tasksPerformed,
      teamSize: Number(project.teamSize),
      projectRoles: project.projectRoles.map(item => item.id),
      responsibilities: project.responsibilities.map(item => item.id),
      specializations: project.specializations.map(item => item.id)
    }
    this.store.dispatch(editProject({project: projectRequest}))
  }

  public changeBreadCrumb(): void {
    //@ts-ignore
    let crumb = document.getElementById(' ');
    if(crumb) {
      crumb.innerHTML = `${this?.project.name}`
    }
  }
}
