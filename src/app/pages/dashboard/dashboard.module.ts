import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {WelcomeModule} from "../welcome/welcome.module";
import {FormsModule} from "@angular/forms";
import {NzCodeEditorModule} from "ng-zorro-antd/code-editor";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzAutocompleteModule} from "ng-zorro-antd/auto-complete";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import { ProjectApiTableComponent } from './component/project-api-table/project-api-table.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProjectApiTableComponent
  ],
    imports: [
        DashboardRoutingModule,
        CommonModule,
        WelcomeModule,
        FormsModule,
        NzCodeEditorModule,
        NzButtonModule,
        NzInputModule,
        NzAutocompleteModule,
        NzTableModule,
        NzSkeletonModule
    ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
