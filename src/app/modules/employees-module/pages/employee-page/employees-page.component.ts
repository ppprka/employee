import { Component, OnInit } from '@angular/core';
import {PROJECT_COLUMNS} from "../../../../shared/constants/project-column.const";
import {EMPLOYEES_COLUMNS} from "../../../../shared/constants/employee-column.const";
import {Observable, tap} from "rxjs";
import {IEmployee} from "../../../../shared/interfaces/employee.interface";
import {getProjects} from "../../../../state/project/project.actions";
import {selectAllProjects} from "../../../../state/project/project.selector";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import {selectAllEmployees} from "../../../../state/employee/employee.selector";
import {getEmployees} from "../../../../state/employee/employee.actions";
import {IProject, IProjectRequest} from "../../../../shared/interfaces/project.interface";
import {IVirtualCV} from "../../../../shared/interfaces/virtual-cv.interface";
import {getVirtualCV} from "../../../../state/virual-cv/virtual-cv.actions";
import {selectAllVirtualCV} from "../../../../state/virual-cv/virtual-cv.selector";

@Component({
  selector: 'app-employees',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent implements OnInit {

  public columns = EMPLOYEES_COLUMNS;
  public employees$: Observable<IEmployee[]>
  public virtualCV$: Observable<IVirtualCV[]>;
  public employee: IEmployee;

  public showBaseTable = true;
  public showEditTable = false;
  public showAddTable = false;
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(getEmployees());
    this.employees$ = this.store.select(selectAllEmployees);
    this.store.dispatch(getVirtualCV());
    this.virtualCV$ = this.store.select(selectAllVirtualCV);

  }

  public addEmployee(): void {
    this.showBaseTable = false;
    this.showAddTable = true;
  }

  public editEmployee(raw: IEmployee): void {
    this.employee = raw;
    this.showBaseTable = false;
    this.showEditTable = true;
  }

  public save(employeeToSave: IEmployee): void {
    // let project: IProjectRequest = {
    //   id: projectToSave?.id,
    //   description: projectToSave.description,
    //   endDate: projectToSave.endDate,
    //   startDate: projectToSave.startDate,
    //   name: projectToSave.name,
    //   secondName: projectToSave.secondName,
    //   tasksPerformed: projectToSave.tasksPerformed,
    //   teamSize: Number(projectToSave.teamSize),
    //   projectRoles: projectToSave.projectRoles.map(item => item.id),
    //   responsibilities: projectToSave.responsibilities.map(item => item.id),
    //   specializations: projectToSave.specializations.map(item => item.id)
    // }
    // if (project.id) {
    //   this.store.dispatch(editProject({project: project}))
    // } else {
    //   this.store.dispatch(addProject({project: project}))
    // }
  }
}
