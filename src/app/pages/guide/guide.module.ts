import {NgModule} from '@angular/core';

import {GuideRoutingModule} from './guide-routing.module';
import { GuideComponent } from './page/guide/guide.component';
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [GuideRoutingModule, CommonModule],
  declarations: [
    GuideComponent
  ],
  exports: [GuideComponent]
})
export class GuideModule {
}
