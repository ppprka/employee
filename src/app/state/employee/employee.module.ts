import { NgModule } from '@angular/core';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {EmployeeEffects} from "./employee.effects";
import {employeesReducer} from "./employee.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";


@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forRoot([EmployeeEffects]),
    StoreModule.forRoot(employeesReducer),
    StoreDevtoolsModule.instrument({
      name: "empl"
    })
  ]
})
export class EmployeeModule { }
