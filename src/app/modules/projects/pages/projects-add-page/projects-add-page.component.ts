import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IProject, IProjectRequest} from "../../../../shared/interfaces/project.interface";
import {addProject, editProject, getProject} from "../../../../state/project/project.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add-page.component.html',
  styleUrls: ['./projects-add-page.component.css']
})
export class ProjectsAddPageComponent implements OnInit {

  @Output()
  public addProject = new EventEmitter<IProject>()


  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  save(project: IProject) {
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
    this.store.dispatch(addProject({project: projectRequest}))
  }

  cancel() {
    window.location.reload();
  }
}
