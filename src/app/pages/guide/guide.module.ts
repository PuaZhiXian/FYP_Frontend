import {NgModule} from '@angular/core';

import {GuideRoutingModule} from './guide-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {CommonModule} from "@angular/common";
import {NzCardModule} from "ng-zorro-antd/card";
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
