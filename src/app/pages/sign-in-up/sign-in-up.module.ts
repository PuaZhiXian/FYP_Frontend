import {NgModule} from '@angular/core';

import {SignInUpRoutingModule} from './sign-in-up-routing.module';
import { SignInUpComponent } from './page/sign-in-up/sign-in-up.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import {CommonModule} from "@angular/common";
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { SetUpPasswordComponent } from './component/set-up-password/set-up-password.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import {NzModalModule} from "ng-zorro-antd/modal";
import {HeaderModule} from "../header/header.module";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";


@NgModule({
  imports: [SignInUpRoutingModule, ReactiveFormsModule, NzFormModule, NzInputModule, FormsModule, CommonModule, NzButtonModule, NzModalModule, HeaderModule, NzToolTipModule],
  declarations: [SignInUpComponent, SignInComponent, SignUpComponent, ForgetPasswordComponent, SetUpPasswordComponent, ResetPasswordComponent],
  exports: [SignInUpComponent]
})
export class SignInUpModule {
}
