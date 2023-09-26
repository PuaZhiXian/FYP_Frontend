import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApiDocumentationComponent} from "./page/api-documentation/api-documentation.component";
import {AuthGuard} from "../../guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: ApiDocumentationComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
