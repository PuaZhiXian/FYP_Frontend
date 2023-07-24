import {NgModule} from '@angular/core';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './page/profile/profile.component';
import { PersonalInformationComponent } from './component/personal-information/personal-information.component';
import {CommonModule} from "@angular/common";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
  imports: [ProfileRoutingModule, CommonModule, NzFormModule, ReactiveFormsModule, NzButtonModule],
  declarations: [
    ProfileComponent,
    PersonalInformationComponent
  ],
  exports: [ProfileComponent]
})
export class ProfileModule {
}
