import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {ProjectsPageService} from "../../shared/services/project-page/projects-page.service";
import {catchError, from, map, of, switchMap} from "rxjs";
import {getVirtualCV, getVirtualCVError, getVirtualCVSuccess} from "./virtual-cv.actions";

@Injectable({providedIn: 'root'})
export class VirtualCvEffects {
  constructor(private actions$: Actions, private store: Store<AppState>, private projectService: ProjectsPageService) {
  }

  getVirtualCV$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVirtualCV),
      switchMap(() =>
        from(this.projectService.getAllVirtualCVs()).pipe(
          map((virtualCV) => getVirtualCVSuccess({virtualCV: virtualCV})),
          catchError((error) => of(getVirtualCVError({error})))
        )))
  );
}
