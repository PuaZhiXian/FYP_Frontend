import {NgModule} from '@angular/core';

import {GuideRoutingModule} from './guide-routing.module';
import { GuideComponent } from './page/guide/guide.component';
import {CommonModule} from "@angular/common";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {NzCollapseModule} from "ng-zorro-antd/collapse";


@NgModule({
    imports: [GuideRoutingModule, CommonModule, NzSkeletonModule, NzCollapseModule],
  declarations: [
    GuideComponent
  ],
  exports: [GuideComponent]
})
export class GuideModule {
}
