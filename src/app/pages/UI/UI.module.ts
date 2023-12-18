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


@NgModule({
  declarations: [
    SearchBarComponent,
    TemplateComponent,
    TextInputComponent,
    EmailInputComponent,
    AbstractNgModelComponent
  ],
  exports: [
    SearchBarComponent,
    TemplateComponent,
    TextInputComponent,
    EmailInputComponent
  ],
  imports: [
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class UIModule {
}
