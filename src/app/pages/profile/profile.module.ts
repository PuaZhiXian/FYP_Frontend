import {NgModule} from '@angular/core';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './page/profile/profile.component';
import { PersonalInformationComponent } from './component/personal-information/personal-information.component';
import {CommonModule} from "@angular/common";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import { ChangePasswordComponent } from './component/change-password/change-password.component';


@NgModule({
  imports: [ProfileRoutingModule, CommonModule, NzFormModule, ReactiveFormsModule, NzButtonModule, NzInputModule],
  declarations: [
    ProfileComponent,
    PersonalInformationComponent,
    ChangePasswordComponent
  ],
  exports: [ProfileComponent]
})
export class ProfileModule {
}
