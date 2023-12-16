import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {UserTableComponent} from './component/user-table/user-table.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzTableModule} from "ng-zorro-antd/table";
import {CommonModule} from "@angular/common";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzCardModule} from "ng-zorro-antd/card";
import {NotificationTableComponent} from './component/notification-table/notification-table.component';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {UIModule} from "../UI/UI.module";
import {HeaderModule} from "../admin-header/header.module";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NotificationModule} from "../admin-notification/notification.module";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";

@NgModule({
  imports: [DashboardRoutingModule, HeaderModule, NzButtonModule, NzFormModule, ReactiveFormsModule, NzInputModule, NzTableModule, CommonModule, NzSkeletonModule, NzModalModule, NzCardModule, NzMessageModule, NzToolTipModule, UIModule, HeaderModule, NzDrawerModule, NotificationModule, NzDatePickerModule],
  declarations: [DashboardComponent, UserTableComponent, NotificationTableComponent],
  exports: [DashboardComponent, UserTableComponent, UserTableComponent]
})
export class DashboardModule {
}
