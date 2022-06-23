import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {SpecializationEffects} from "./specialization.effects";
import {specializationsReducer} from "./specialization.reducer";

@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forRoot([SpecializationEffects]),
    StoreModule.forRoot(specializationsReducer),
    StoreDevtoolsModule.instrument({
      name: "NgRx"
    })
  ]
})
export class SpecializationModule { }
