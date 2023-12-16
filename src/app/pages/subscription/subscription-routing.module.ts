import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateProjectComponent} from "./page/create-project/create-project.component";
import {AuthGuard} from "../../guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: CreateProjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule {
}
