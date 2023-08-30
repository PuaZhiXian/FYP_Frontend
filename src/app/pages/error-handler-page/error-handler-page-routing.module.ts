import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundPageComponent} from "./page/not-found-page/not-found-page.component";

const routes: Routes = [
  {
    path: 'not-found',
    component:NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorHandlerPageRoutingModule {
}
