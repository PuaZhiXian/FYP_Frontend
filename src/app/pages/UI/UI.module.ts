import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {EmailInputComponent} from './components/field-tester-template/email-input.component';
import {CommonModule} from "@angular/common";
import {TextInputComponent} from './components/text-input/text-input.component';


@NgModule({
  declarations: [
    SearchBarComponent,
    EmailInputComponent,
    TextInputComponent
  ],
  exports: [
    SearchBarComponent,
    EmailInputComponent,
    TextInputComponent
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
