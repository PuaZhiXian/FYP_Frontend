import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzAutocompleteModule} from "ng-zorro-antd/auto-complete";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {ProjectApiTableComponent} from './component/project-api-table/project-api-table.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {AnnouncementComponent} from './component/announcement/announcement.component';
import {HeaderModule} from "../header/header.module";
import {NzModalModule} from "ng-zorro-antd/modal";
import {UIModule} from "../UI/UI.module";
import {NzCarouselModule} from "ng-zorro-antd/carousel";


@NgModule({
  declarations: [
    DashboardComponent,
    ProjectApiTableComponent,
    AnnouncementComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzAutocompleteModule,
    NzTableModule,
    NzSkeletonModule,
    NzFormModule,
    ReactiveFormsModule,
    HeaderModule,
    NzModalModule,
    UIModule,
    NzCarouselModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
