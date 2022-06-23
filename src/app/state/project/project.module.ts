import { NgModule } from '@angular/core';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {ProjectEffects} from "./project.effects";
import {projectsReducer} from "./project.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";


@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forRoot([ProjectEffects]),
    StoreModule.forRoot(projectsReducer),
    StoreDevtoolsModule.instrument({
      name: "NgRx"
    })
  ]
})
export class ProjectModule { }
