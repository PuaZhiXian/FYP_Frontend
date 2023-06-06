import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInUpComponent} from "./page/sign-in-up/sign-in-up.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':type',
        component: SignInUpComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInUpRoutingModule {
}
