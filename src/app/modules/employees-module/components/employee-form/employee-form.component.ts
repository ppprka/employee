import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IProject, IProjectRole, IResponsibility, ISpecialization} from "../../../../shared/interfaces/project.interface";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import * as moment from "moment";
import {Router} from "@angular/router";
import {EMPLOYEES_ROUTE, PROJECT_ROUTE} from "../../../../shared/constants/routing-path.const";
import {getProjectsRoles} from "../../../../state/project-roles/project-roles.actions";
import {selectAllProjectRoles} from "../../../../state/project-roles/project-roles.selector";
import {Observable, tap} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {getResponsibilities} from "../../../../state/responsibilities/responsibilities.actions";
import {
  selectAllResponsibilities,
  selectResponsibilities
} from "../../../../state/responsibilities/responsibilities.selector";
import {getSpecializations} from "../../../../state/specializations/specialization.actions";
import {selectAllSpecializations, selectSpecializations} from "../../../../state/specializations/specialization.selector";
import {IEmployee} from "../../../../shared/interfaces/employee.interface";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit, OnChanges {

  @Input()
  public employee!: IEmployee;
  @Input()
  public hideButtons: boolean;

  @Output()
  public saveEmployee = new EventEmitter<IEmployee>();

  public employeeForm: FormGroup;

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder, private router: Router) {
    this.employeeForm = this.formBuilder.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      department: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    // this.store.dispatch(getProjectsRoles());
    // this.projectRoles$ = this.store.select(selectAllProjectRoles);
    // this.store.dispatch(getResponsibilities());
    // this.responsibilities$ = this.store.select(selectAllResponsibilities);
    // this.store.dispatch(getSpecializations());
    // this.specializations$ = this.store.select(selectAllSpecializations);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["employee"] && changes["employee"].currentValue) {
      this.employeeForm.patchValue({
        id: this.employee.id,
        firstName: this.employee.firstName,
        lastName: this.employee.lastName,
        email: this.employee.email,
        department: this.employee.department
      })

    }
  }

  public save(): void {
    if(this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }
    this.saveEmployee.emit(this.employeeForm.getRawValue());
  }

  public cancel(): void {
    this.router.navigate([EMPLOYEES_ROUTE.path])
  }

}
