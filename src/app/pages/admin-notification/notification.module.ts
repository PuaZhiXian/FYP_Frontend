import {NgModule} from '@angular/core';
import {NotificationRoutingModule} from "./notification-routing.module";
import {NotificationComponent} from './page/notification/notification.component';
import {AngularEditorModule} from "@kolkov/angular-editor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzCalendarModule} from "ng-zorro-antd/calendar";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {CommonModule} from "@angular/common";
import {NzButtonModule} from "ng-zorro-antd/button";
import {CalendarComponent} from './component/calendar/calendar.component';
import {RichTextEditorComponent} from './component/rich-text-editor/rich-text-editor.component';
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzMessageModule} from "ng-zorro-antd/message";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {NotificationAlertComponent} from './component/notification-alert/notification-alert.component';
import {HeaderModule} from "../admin-header/header.module";


@NgModule({
  declarations: [
    NotificationComponent,
    CalendarComponent,
    RichTextEditorComponent,
    NotificationAlertComponent
  ],
  exports: [
    NotificationComponent
  ],
  imports: [
    NotificationRoutingModule,
    HeaderModule,
    AngularEditorModule,
    FormsModule,
    NzCalendarModule,
    NzBadgeModule,
    CommonModule,
    NzButtonModule,
    NzDrawerModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzDatePickerModule,
    NzMessageModule,
    NzSkeletonModule,
    HeaderModule,
  ]
})
export class NotificationModule {
}
