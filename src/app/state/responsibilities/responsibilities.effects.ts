import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {catchError, from, map, of, switchMap} from "rxjs";
import {getResponsibilities, getResponsibilitiesError, getResponsibilitiesSuccess} from "./responsibilities.actions";
import {ApiService} from "../../shared/services/api/api.service";

@Injectable({providedIn: 'root'})
export class ResponsibilitiesEffects {
  constructor(private actions$: Actions, private store: Store<AppState>, private projectService: ApiService) {
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
