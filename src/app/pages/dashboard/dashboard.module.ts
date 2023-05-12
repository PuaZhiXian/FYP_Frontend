import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {WelcomeModule} from "../welcome/welcome.module";
import {FormsModule} from "@angular/forms";
import {NzCodeEditorModule} from "ng-zorro-antd/code-editor";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    WelcomeModule,
    FormsModule,
    NzCodeEditorModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
