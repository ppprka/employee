import { Component, OnInit } from '@angular/core';
import {EMPLOYEES_COLUMNS} from "../../../../shared/constants/employee-column.const";
import {Observable} from "rxjs";
import {IEmployee} from "../../../../shared/interfaces/employee.interface";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {Router} from "@angular/router";
import {selectAllEmployees} from "../../../../state/employee/employee.selector";
import {getEmployees} from "../../../../state/employee/employee.actions";
import {IVirtualCV} from "../../../../shared/interfaces/virtual-cv.interface";

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
  }

  public addEmployee(): void {
    this.showBaseTable = false;
    this.showAddTable = true;
  }

  public editEmployee(raw: IEmployee): void {
    this.employee = raw;
    this.showBaseTable = false;
    this.router.navigate(["/employees/edit",raw.id])
  }

}
