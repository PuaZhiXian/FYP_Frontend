import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {AuthGuard} from "../../guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    component : DashboardComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
