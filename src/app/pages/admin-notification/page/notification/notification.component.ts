import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IAdminCalendarEvent} from "../../../../interface/calendar/i-admin-calendar-event";
import {NotificationService} from "../../../../service/notification/notification.service";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";
import {finalize} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AdminHeaderComponent} from "../../../admin-header/page/header/admin-header.component";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  htmlContent: string = '';
  createNotificationDrawerVisibility: boolean = false;
  editNotification: boolean = false;
  validateForm!: UntypedFormGroup;
  notificationColor: string = 'green';

  redirectNotificationId?: number;

  eventList: IAdminCalendarEvent[][][] = []
  loadingEditNotificationDrawer: boolean = true;
  submittedTry: boolean = false;
  date = new Date();
  currYear: number = this.date.getFullYear();
  currMonth: number = this.date.getMonth();
  eventId: string = '';

  constructor(private notificationService: NotificationService,
              private fb: UntypedFormBuilder,
              private message: NzMessageService,
              private ref: ChangeDetectorRef,
              private activeRoute: ActivatedRoute,
              private modal: NzModalService) {
  }

  ngOnInit(): void {
    AdminHeaderComponent.headerIndicator = 'notification';
    this.initForm();
    this.initNotificationEvent();
    this.activeRoute.queryParams
      .subscribe((resp) => {
        this.redirectNotificationId = resp['notificationId'];

        if (this.redirectNotificationId !== undefined) {
          this.openNotificationDrawerEdit(this.redirectNotificationId + "");
        }
      })
  }

  initForm() {
    this.validateForm = this.fb.group({
      id: [null, []],
      title: [null, [Validators.required]],
      description: [null, []],
      announcement_text: [null, [Validators.required]],
      rangeDate: [null, []],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      color: [null, [Validators.required]],
    });
  }

  initNotificationEvent() {
    if (this.currYear !== undefined && this.currMonth !== undefined) {
      this.notificationService.getNotificationEventList(this.currYear, this.currMonth)
        .subscribe((resp) => {
          this.eventList = resp
        })
    }
  }

  createSaveNotification() {
    this.submittedTry = true;
    this.ref.markForCheck();
    this.ref.detectChanges();
    this.validateForm.patchValue({
      startDate: this.validateForm.value.rangeDate[0],
      endDate: this.validateForm.value.rangeDate[1],
      color: this.notificationColor,
      announcement_text: this.htmlContent
    })
    if (this.validateForm.valid) {
      this.notificationService.createSaveNotification(this.validateForm.value)
        .subscribe((resp) => {
          if (resp.message) {
            this.message.success(resp.message);
            this.createNotificationDrawerVisibility = false;
            this.loadingEditNotificationDrawer = true;
            this.initNotificationEvent();
          } else {
            this.message.error(resp.error || '')
          }
        })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
      let announcementTextControl = this.validateForm.controls['announcement_text']
      if (announcementTextControl.invalid) {
        announcementTextControl.markAsDirty()
        announcementTextControl.updateValueAndValidity({onlySelf: true})
        this.message.error('Cannot empty announcement text')
      }
    }
  }

  openNotificationDrawerCreate(date: Date) {
    this.htmlContent = '';
    this.submittedTry = false;
    this.editNotification = false;
    this.initForm()
    this.ref.markForCheck();
    this.ref.detectChanges();
    this.createNotificationDrawerVisibility = true;
    let startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0)
    let endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0)
    this.validateForm.patchValue(
      {rangeDate: [startDate, endDate]}
    )
    this.loadingEditNotificationDrawer = false;
  }

  openNotificationDrawerEdit(eventId: string) {
    this.eventId = eventId;
    this.htmlContent = '';
    this.submittedTry = false;
    this.initForm()
    this.editNotification = true;
    this.createNotificationDrawerVisibility = true;
    this.notificationService.getSingleNotification(eventId)
      .pipe(finalize(() => {
        this.loadingEditNotificationDrawer = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.validateForm.patchValue({
          id: resp.id,
          title: resp.title,
          description: resp.description,
          announcement_text: resp.announcement_text,
          rangeDate: [resp.startDate, resp.endDate],
          startDate: resp.startDate,
          endDate: resp.endDate,
        });
        this.notificationColor = resp.color;
        this.htmlContent = resp.announcement_text || '';
      })
  }

  closeNotificationDrawer() {
    this.createNotificationDrawerVisibility = false;
  }

  changeColor(color: string) {
    this.notificationColor = color;
  }

  openDeleteNotificationModal() {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this notification?',
      nzContent: '<b style="color: red;">This action is nonundoable</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteNotification(),
      nzCancelText: 'No'
    });
  }

  deleteNotification() {
    this.notificationService.deleteNotification(this.eventId)
      .subscribe((resp) => {
        if (resp.message) {
          this.message.success(resp.message);
          this.closeNotificationDrawer();
          this.initForm();
          this.initNotificationEvent();
        } else if (resp.error) {
          this.message.error(resp.error);
        }
      })
  }

}
