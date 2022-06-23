import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {catchError, from, map, of, switchMap} from "rxjs";
import {getProjectsRoles, getProjectsRolesError, getProjectsRolesSuccess} from "./project-roles.actions";
import {AppState} from "../app.state";
import {ApiService} from "../../shared/services/api/api.service";

@Injectable({providedIn: 'root'})
export class ProjectRolesEffects {
  constructor(private actions$: Actions, private store: Store<AppState>, private projectService: ApiService) {
  }

  getProjectRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProjectsRoles),
      switchMap(() =>
        from(this.projectService.getAllProjectRoles()).pipe(
          map((projectRoles) => getProjectsRolesSuccess({projectRoles: projectRoles})),
          catchError((error) => of(getProjectsRolesError({error})))
        )))
  );
}
