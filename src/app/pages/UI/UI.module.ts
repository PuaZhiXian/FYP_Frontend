import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {TemplateComponent} from './components/field-tester-template/template.component';
import {CommonModule} from "@angular/common";
import {TextInputComponent} from './components/text-input/text-input.component';
import {EmailInputComponent} from "./components/email-input/email-input.component";
import {AbstractNgModelComponent} from "./abstractFieldInput";
import {TextareaInputComponent} from './components/textarea-input/textarea-input.component';
import {RangeDateInputv2Component} from './components/range-date-inputv2/range-date-inputv2.component';
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";


@NgModule({
  declarations: [
    SearchBarComponent,
    TemplateComponent,
    TextInputComponent,
    EmailInputComponent,
    AbstractNgModelComponent,
    TextareaInputComponent,
    RangeDateInputv2Component
  ],
  exports: [
    SearchBarComponent,
    TemplateComponent,
    TextInputComponent,
    EmailInputComponent,
    TextareaInputComponent,
    RangeDateInputv2Component
  ],
  imports: [
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    CommonModule,
    NzDatePickerModule
  ]
})
export class UIModule {
}
