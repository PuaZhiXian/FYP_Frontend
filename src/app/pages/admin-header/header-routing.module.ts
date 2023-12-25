import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminHeaderComponent} from "./page/header/admin-header.component";

const routes: Routes = [
  {path: '', component: AdminHeaderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule {
}
