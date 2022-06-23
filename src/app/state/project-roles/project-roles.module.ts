import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {ProjectRolesEffects} from "./project-roles.effects";
import {projectRolesReducer} from "./project-roles.reducer";

@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forRoot([ProjectRolesEffects]),
    StoreModule.forRoot(projectRolesReducer),
    StoreDevtoolsModule.instrument({
      name: "Pepe clap"
    })
  ]
})
export class ProjectRolesModule { }
