import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {ProjectsPageService} from "../../shared/services/project-page/projects-page.service";
import {catchError, from, map, of, switchMap} from "rxjs";
import {getResponsibilities, getResponsibilitiesError, getResponsibilitiesSuccess} from "./responsibilities.actions";

@Injectable({providedIn: 'root'})
export class ResponsibilitiesEffects {
  constructor(private actions$: Actions, private store: Store<AppState>, private projectService: ProjectsPageService) {
  }

  getResponsibilities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getResponsibilities),
      switchMap(() =>
        from(this.projectService.getAllResponsibilities()).pipe(
          map((responsibilities) => getResponsibilitiesSuccess({responsibilities: responsibilities})),
          catchError((error) => of(getResponsibilitiesError({error})))
        )))
  );
}
