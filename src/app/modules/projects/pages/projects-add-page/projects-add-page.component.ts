import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IProject} from "../../../../shared/interfaces/project.interface";

@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add-page.component.html',
  styleUrls: ['./projects-add-page.component.css']
})
export class ProjectsAddPageComponent implements OnInit {

  @Output()
  public addProject = new EventEmitter<IProject>()

  constructor() { }

  ngOnInit(): void {
  }

  save(project: IProject) {
    this.addProject.emit(project);
  }

  cancel() {
    window.location.reload();
  }
}
