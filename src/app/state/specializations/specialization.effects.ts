import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {ProjectsPageService} from "../../shared/services/project-page/projects-page.service";
import {catchError, from, map, of, switchMap} from "rxjs";
import {getSpecializations, getSpecializationsError, getSpecializationsSuccess} from "./specialization.actions";

@Injectable({providedIn: 'root'})
export class SpecializationEffects {
  constructor(private actions$: Actions, private store: Store<AppState>, private projectService: ProjectsPageService) {
  }

  getSpecializations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSpecializations),
      switchMap(() =>
        from(this.projectService.getAllSpecializations()).pipe(
          map((specializations) => getSpecializationsSuccess({specializations: specializations})),
          catchError((error) => of(getSpecializationsError({error})))
        )))
  );
}
