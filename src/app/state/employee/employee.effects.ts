import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {Injectable} from "@angular/core";
import {catchError, exhaustMap, from, map, mergeMap, of, switchMap, tap} from "rxjs";
import {ProjectsPageService} from "../../shared/services/project-page/projects-page.service";
import {Store} from "@ngrx/store";
import {getEmployees, getEmployeesError, getEmployeesSuccess} from "./employee.actions";
import {AppState} from "../app.state";


@Injectable({providedIn: 'root'})
export class EmployeeEffects {
  constructor(private actions$: Actions, private store: Store<AppState>, private projectService: ProjectsPageService) {
  }

  getProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEmployees),
      switchMap(() =>
        from(this.projectService.getAllEmployees()).pipe(
          map((employees) => getEmployeesSuccess({employees: employees})),
          catchError((error) => of(getEmployeesError({error})))
        )))
  );

  // addProject$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(addProject),
  //     exhaustMap(action =>
  //       this.projectService.addProject(action.project).pipe(
  //         map((project) => addProjectSuccess({project: project})),
  //         catchError((error) => of(addProjectError({error})))
  //       )))
  // );
  //
  // editProject$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(editProject),
  //     exhaustMap(action =>
  //       this.projectService.editProject(action.project).pipe(
  //         map((project) => editProjectSuccess({project: project})),
  //         catchError((error) => of(editProjectError({error})))
  //       )))
  // );
  //
  // deleteProject$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(deleteProject),
  //     exhaustMap(action =>
  //       this.projectService.deleteProject(action.id).pipe(
  //         map((id) => deleteProjectSuccess({id: id})),
  //         catchError((error) => of(deleteProjectError({error})))
  //       )))
  // );
}
