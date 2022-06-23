import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {catchError, from, map, of, switchMap, tap} from "rxjs";
import {
  getUsersVirtualCV, getUsersVirtualCVError,
  getUsersVirtualCVSuccess,
  getVirtualCV,
  getVirtualCVError,
  getVirtualCVSuccess, updateVirtualCV, updateVirtualCVError, updateVirtualCVSuccess
} from "./virtual-cv.actions";
import {ApiService} from "../../shared/services/api/api.service";

@Injectable({providedIn: 'root'})
export class VirtualCvEffects {
  constructor(private actions$: Actions, private store: Store<AppState>, private projectService: ApiService) {
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

  getUsersVirtualCV$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsersVirtualCV),
      switchMap((action) =>
        from(this.projectService.getUsersVirtualCVs(action.id)).pipe(
          map((virtualCV) => getUsersVirtualCVSuccess({virtualCV: virtualCV})),
          catchError((error) => of(getUsersVirtualCVError({error})))
        )))
  );

  updateVirtualCV$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateVirtualCV),
      switchMap((action) =>
        from(this.projectService.updateVirtualCV(action.virtualCV)).pipe(
          map((virtualCV) => updateVirtualCVSuccess({virtualCV: virtualCV})),
          catchError((error) => of(updateVirtualCVError({error})))
        )))
  );
}
