import {NgModule} from '@angular/core';

import {GuideRoutingModule} from './guide-routing.module';
import { GuideComponent } from './page/guide/guide.component';


@NgModule({
  imports: [GuideRoutingModule],
  declarations: [
    GuideComponent
  ],
  exports: [GuideComponent]
})
export class GuideModule {
}
