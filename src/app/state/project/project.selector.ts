import {
  createSelector
} from '@ngrx/store';

import {ProjectState} from "./project.reducer";
import {AppState} from "../app.state";

export const selectProjects = (state: AppState) => state.projects;

export const selectAllProjects = createSelector(
  selectProjects,
  (state: ProjectState) => state.projects
);
