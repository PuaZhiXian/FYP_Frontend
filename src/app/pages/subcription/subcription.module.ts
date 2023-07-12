import {NgModule} from '@angular/core';

import {SubcriptionRoutingModule} from './subcription-routing.module';
import { CreateProjectComponent } from './page/create-project/create-project.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [SubcriptionRoutingModule, ReactiveFormsModule, NzFormModule, NzInputModule, NzCheckboxModule, NzButtonModule, CommonModule, FormsModule],
  declarations: [ CreateProjectComponent],
  exports: [CreateProjectComponent]
})
export class SubcriptionModule {
}
