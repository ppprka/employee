import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProject, IProjectRole} from "../../../../shared/interfaces/project.interface";

@Component({
  selector: 'app-projects-edit',
  templateUrl: './projects-edit-page.component.html',
  styleUrls: ['./projects-edit-page.component.css']
})
export class ProjectsEditPageComponent implements OnInit {

  @Input()
  public project!: IProject;

  @Output()
  public editProject = new EventEmitter<IProject>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.project)
  }

  save(project: IProject) {
    this.editProject.emit(project);
  }

}
