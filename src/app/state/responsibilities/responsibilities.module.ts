import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {responsibilitiesReducer} from "./responsibilities.reducer";
import {ResponsibilitiesEffects} from "./responsibilities.effects";

@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forRoot([ResponsibilitiesEffects]),
    StoreModule.forRoot(responsibilitiesReducer),
    StoreDevtoolsModule.instrument({
      name: "NgRx"
    })
  ]
})
export class ResponsibilitiesModule { }
