import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IProject, IProjectRole, IResponsibility, ISpecialization} from "../../../../shared/interfaces/project.interface";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import * as moment from "moment";
import {Router} from "@angular/router";
import {PROJECT_ROUTE} from "../../../../shared/constants/routing-path.const";
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

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit, OnChanges {

  @Input()
  public project!: IProject;

  public projectRoles$: Observable<IProjectRole[]>;
  public responsibilities$: Observable<IResponsibility[]>
  public specializations$: Observable<ISpecialization[]>
  @Output()
  public saveProject = new EventEmitter<IProject>();

  public projectForm: FormGroup;

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder, private router: Router) {
    this.projectForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      secondName: ['', [Validators.required]],
      teamSize: ['', [Validators.required]],
      tasksPerformed: ['', [Validators.required]],
      responsibilities: [[], [Validators.required]],
      projectRoles: [[], [Validators.required]],
      specializations: [[], [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.store.dispatch(getProjectsRoles());
    this.projectRoles$ = this.store.select(selectAllProjectRoles);
    this.store.dispatch(getResponsibilities());
    this.responsibilities$ = this.store.select(selectAllResponsibilities);
    this.store.dispatch(getSpecializations());
    this.specializations$ = this.store.select(selectAllSpecializations);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["project"] && changes["project"].currentValue) {
      this.projectForm.patchValue({
        id: this.project.id,
        name: this.project.name,
        startDate: this.parseDate(this.project.startDate.toString()),
        endDate: this.parseDate(this.project.endDate.toString()),
        secondName: this.project.secondName,
        teamSize: this.project.teamSize,
        tasksPerformed: this.project.tasksPerformed,
        responsibilities: this.project.responsibilities,
        projectRoles: this.project.projectRoles,
        specializations: this.project.specializations,
        description: this.project.description
      })

    }
  }

  public save(): void {
    if(this.projectForm.invalid) {
      this.projectForm.markAllAsTouched();
      return;
    }
    console.log(this.projectForm.getRawValue());
    this.saveProject.emit(this.projectForm.getRawValue());
  }

  public cancel(): void {
    window.location.reload();
  }

  public parseDate(date: string): Date {
     const d = new Date(date);
     const utcDate = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
     return utcDate;
  }
}
