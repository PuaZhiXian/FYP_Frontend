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


@NgModule({
    imports: [ProjectRoutingModule, NzButtonModule, CommonModule, ReactiveFormsModule, NzFormModule, NzInputModule, NzSpinModule],
  declarations: [
    SingleProjectComponent,
    SettingsComponent
  ],
  exports: [SingleProjectComponent]
})
export class ProjectModule {
}
