import {NgModule} from '@angular/core';

import {GuideRoutingModule} from './guide-routing.module';
import { GuideComponent } from './page/guide/guide.component';
import {CommonModule} from "@angular/common";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";


@NgModule({
    imports: [GuideRoutingModule, CommonModule, NzSkeletonModule],
  declarations: [
    GuideComponent
  ],
  exports: [GuideComponent]
})
export class GuideModule {
}
