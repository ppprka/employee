import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {Injectable} from "@angular/core";
import {catchError, exhaustMap, from, map, mergeMap, of, switchMap, tap} from "rxjs";
import {ProjectsPageService} from "../../shared/services/project-page/projects-page.service";
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
  editProjectSuccess,
  getProjects,
  getProjectsError,
  getProjectsSuccess
} from "./project.actions";
import {AppState} from "../app.state";


@Injectable({providedIn: 'root'})
export class ProjectEffects {
  constructor(private actions$: Actions, private store: Store<AppState>, private projectService: ProjectsPageService) {
  }

  getProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjects),
      switchMap(() =>
        from(this.projectService.getAllProjects()).pipe(
          tap(projects => console.log(projects)),
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
}
