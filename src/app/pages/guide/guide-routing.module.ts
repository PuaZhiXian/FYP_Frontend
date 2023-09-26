import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuideComponent} from "./page/guide/guide.component";
import {AuthGuard} from "../../guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: GuideComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuideRoutingModule {
}
