import {NgModule} from '@angular/core';

import {ProjectRoutingModule} from './project-routing.module';
import { SingleProjectComponent } from './page/single-project/single-project.component';


@NgModule({
  imports: [ProjectRoutingModule],
  declarations: [
    SingleProjectComponent
  ],
  exports: [SingleProjectComponent]
})
export class ProjectModule {
}
