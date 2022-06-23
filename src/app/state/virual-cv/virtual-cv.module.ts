import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {VirtualCvEffects} from "./virtual-cv.effects";
import {virtualCVReducer} from "./virtual-cv.reducer";

@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forRoot([VirtualCvEffects]),
    StoreModule.forRoot(virtualCVReducer),
    StoreDevtoolsModule.instrument({
      name: "virtualCV"
    })
  ]
})
export class VirtualCvModule { }
