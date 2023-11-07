import {NgModule} from '@angular/core';

import {ErrorHandlerPageRoutingModule} from './error-handler-page-routing.module';
import {CommonModule} from "@angular/common";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import {NzResultModule} from "ng-zorro-antd/result";
import {HeaderModule} from "../header/header.module";


@NgModule({
  imports: [ErrorHandlerPageRoutingModule, CommonModule, NzFormModule, ReactiveFormsModule, NzButtonModule, NzInputModule, NzResultModule, HeaderModule],
  declarations: [
    NotFoundPageComponent
  ],
  exports: [NotFoundPageComponent]
})
export class ErrorHandlerPageModule {
}
