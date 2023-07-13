import {NgModule} from '@angular/core';

import {ProjectRoutingModule} from './project-routing.module';
import { SingleProjectComponent } from './page/single-project/single-project.component';
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
    imports: [ProjectRoutingModule, NzButtonModule],
  declarations: [
    SingleProjectComponent
  ],
  exports: [SingleProjectComponent]
})
export class ProjectModule {
}
