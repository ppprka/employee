import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from "@angular/core";
import {catchError, exhaustMap, from, map, of, switchMap} from "rxjs";

import {Store} from "@ngrx/store";
import {
  addProject,
  addProjectError,
  addProjectSuccess,
  deleteProject,
  deleteProjectError,
  deleteProjectSuccess,
  editProject,
  editProjectError,
  editProjectSuccess, getProject, getProjectError,
  getProjects,
  getProjectsError,
  getProjectsSuccess, getProjectSuccess
} from "./project.actions";
import {AppState} from "../app.state";
import {ApiService} from "../../shared/services/api/api.service";


@Injectable({providedIn: 'root'})
export class ProjectEffects {
  constructor(private actions$: Actions, private store: Store<AppState>, private projectService: ApiService) {
  }

  getProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjects),
      switchMap(() =>
        from(this.projectService.getAllProjects()).pipe(
          map((projects) => getProjectsSuccess({projects: projects})),
          catchError((error) => of(getProjectsError({error})))
        )))
  );

  addProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addProject),
      exhaustMap(action =>
        this.projectService.addProject(action.project).pipe(
          map((project) => addProjectSuccess({project: project})),
          catchError((error) => of(addProjectError({error})))
        )))
  );

  editProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editProject),
      exhaustMap(action =>
        this.projectService.editProject(action.project).pipe(
          map((project) => editProjectSuccess({project: project})),
          catchError((error) => of(editProjectError({error})))
        )))
  );

  deleteProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProject),
      exhaustMap(action =>
        this.projectService.deleteProject(action.id).pipe(
          map((id) => deleteProjectSuccess({id: id})),
          catchError((error) => of(deleteProjectError({error})))
        )))
  );

  getProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProject),
      switchMap((action) =>
        from(this.projectService.getProject(action.id)).pipe(
          map((project) => getProjectSuccess({project: project})),
          catchError((error) => of(getProjectError({error})))
        )))
  );
}
