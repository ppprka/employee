import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AUTH_ROUTE, CORE_ROUTE} from "./shared/constants/routing-path.const";
import {AuthGuard} from "./shared/services/auth/auth.guard";

const routes: Routes = [
  { path: AUTH_ROUTE.path, loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  { path: CORE_ROUTE.path, canActivate: [AuthGuard], loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule)},
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
