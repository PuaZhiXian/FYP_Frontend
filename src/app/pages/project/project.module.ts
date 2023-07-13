import {NgModule} from '@angular/core';

import {ProjectRoutingModule} from './project-routing.module';
import { SingleProjectComponent } from './page/single-project/single-project.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import { SettingsComponent } from './component/settings/settings.component';
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [ProjectRoutingModule, NzButtonModule, CommonModule],
  declarations: [
    SingleProjectComponent,
    SettingsComponent
  ],
  exports: [SingleProjectComponent]
})
export class ProjectModule {
}
