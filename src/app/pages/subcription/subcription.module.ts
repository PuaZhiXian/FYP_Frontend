import {NgModule} from '@angular/core';

import {SubcriptionRoutingModule} from './subcription-routing.module';
import { CreateProjectComponent } from './page/create-project/create-project.component';


@NgModule({
    imports: [SubcriptionRoutingModule],
  declarations: [ CreateProjectComponent],
  exports: [CreateProjectComponent]
})
export class SubcriptionModule {
}
