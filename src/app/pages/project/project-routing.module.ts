import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SingleProjectComponent} from "./page/single-project/single-project.component";
import {AuthGuard} from "../../guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':projectId',
        component: SingleProjectComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {
}
