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


@NgModule({
    imports: [SignInUpRoutingModule, ReactiveFormsModule, NzFormModule, NzInputModule, FormsModule, CommonModule, NzButtonModule],
  declarations: [SignInUpComponent, SignInComponent, SignUpComponent, ForgetPasswordComponent, SetUpPasswordComponent, ResetPasswordComponent],
  exports: [SignInUpComponent]
})
export class SignInUpModule {
}
