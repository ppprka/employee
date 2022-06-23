import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {
  IProject,
  IProjectCV
} from "../../interfaces/project.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {getProjectsRoles} from "../../../state/project-roles/project-roles.actions";
import {selectAllProjectRoles, selectAllProjectRolesNames} from "../../../state/project-roles/project-roles.selector";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {getResponsibilities} from "../../../state/responsibilities/responsibilities.actions";
import {
  selectAllResponsibilities,
  selectAllResponsibilitiesNames
} from "../../../state/responsibilities/responsibilities.selector";
import {getSpecializations} from "../../../state/specializations/specialization.actions";
import {
  selectAllSpecializations,
  selectAllSpecializationsNames
} from "../../../state/specializations/specialization.selector";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit, OnChanges {

  @Input()
  public isCV: boolean;

  @Input()
  public projectCV!: IProjectCV;

  @Input()
  public project!: IProject;

  public projectRoles$: Observable<any[]>;
  public responsibilities$: Observable<any[]>
  public specializations$: Observable<any[]>

  @Output()
  public saveProject = new EventEmitter<IProject>();

  public projectForm: FormGroup;

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {
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
    this.store.dispatch(getResponsibilities());
    this.store.dispatch(getSpecializations());
    if (this.isCV) {
      this.projectRoles$ = this.store.select(selectAllProjectRolesNames);
      this.responsibilities$ = this.store.select(selectAllResponsibilitiesNames);
      this.specializations$ = this.store.select(selectAllSpecializationsNames);
    } else {
      this.projectRoles$ = this.store.select(selectAllProjectRoles);
      this.responsibilities$ = this.store.select(selectAllResponsibilities);
      this.specializations$ = this.store.select(selectAllSpecializations);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes["project"] && changes["project"].currentValue)
      || (changes["projectCV"] && changes["projectCV"].currentValue)) {
      if (!this.isCV) {
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
      } else {
        this.projectForm.patchValue({
          id: this.projectCV.id,
          name: this.projectCV.name,
          startDate: this.parseDate(this.projectCV.startDate.toString()),
          endDate: this.parseDate(this.projectCV.endDate.toString()),
          secondName: this.projectCV.secondName,
          teamSize: this.projectCV.teamSize,
          tasksPerformed: this.projectCV.tasksPerformed,
          responsibilities: this.projectCV.responsibilities,
          projectRoles: this.projectCV.projectRoles,
          specializations: this.projectCV.specializations,
          description: this.projectCV.description
        })
      }
    }
  }

  public save(): void {
    if (this.projectForm.invalid) {
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
