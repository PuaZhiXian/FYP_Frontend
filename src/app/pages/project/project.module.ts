import {NgModule} from '@angular/core';

import {ProjectRoutingModule} from './project-routing.module';
import { SingleProjectComponent } from './page/single-project/single-project.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import { SettingsComponent } from './component/settings/settings.component';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSpinModule} from "ng-zorro-antd/spin";
import { StatisticsComponent } from './component/statistics/statistics.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import { CredentialComponent } from './component/credential/credential.component';


@NgModule({
  imports: [ProjectRoutingModule, NzButtonModule, CommonModule, ReactiveFormsModule, NzFormModule, NzInputModule, NzSpinModule, NzTableModule, NzSkeletonModule],
  declarations: [
    SingleProjectComponent,
    SettingsComponent,
    StatisticsComponent,
    CredentialComponent
  ],
  exports: [SingleProjectComponent]
})
export class ProjectModule {
}
