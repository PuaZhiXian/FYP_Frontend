import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ColumnItem} from "../../../../interface/table/column-item";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {IAdminNotification} from "../../../../interface/notification/i-admin-notification";
import {NotificationService} from "../../../../service/notification/notification.service";
import {finalize} from "rxjs";
import {NzModalService} from 'ng-zorro-antd/modal';
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'notification-table',
  templateUrl: './notification-table.component.html',
  styleUrls: ['./notification-table.component.scss']
})
export class NotificationTableComponent implements OnInit {

  listOfColumns !: ColumnItem[];
  loadingTable: boolean = true;

  notificationList: IAdminNotification[] = [];
  filterNotificationList: IAdminNotification[] = [];

  deleteNotificationModalVisibility: boolean = false;

  htmlContent: string = '';
  createNotificationDrawerVisibility: boolean = false;
  validateForm!: UntypedFormGroup;
  notificationColor: string = 'green';
  loadingEditNotificationDrawer: boolean = true;
  submittedTry: boolean = false;

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private ref: ChangeDetectorRef,
              private notificationService: NotificationService,
              private modal: NzModalService,
              private message: NzMessageService) {
  }

  ngOnInit(): void {
    this.initNotification();
    this.initTable();
    this.initForm();
  }

  initNotification() {
    this.loadingTable = true;
    this.notificationService.getNotificationList()
      .pipe(finalize(() => {
        this.loadingTable = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.notificationList = resp;
        this.filterNotificationList = this.notificationList;
      })
  }

  initTable() {
    this.listOfColumns = [
      {
        name: 'Title',
        sortOrder: null,
        sortFn: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null,
      },
      {
        name: 'Description',
        sortOrder: null,
        sortFn: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null
      },
      {
        name: 'Start Date',
        sortOrder: null,
        sortFn: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null
      },
      {
        name: 'End Date',
        sortOrder: null,
        sortFn: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null
      },
      {
        name: 'Action',
        sortOrder: null,
        sortFn: null,
        sortDirections: [],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: '80px'
      }
    ];
  }

  searching(searchKey: string) {
    if (!searchKey || searchKey.length == 0) {
      this.filterNotificationList = this.notificationList;
    } else {
      this.filterNotificationList = this.notificationList.filter((items) => {
        return this.isMatch(items.title, searchKey) || this.isMatch(items.description, searchKey);
      });
    }
  }

  isMatch(sentence: string, word: string): boolean {
    return sentence.toLocaleLowerCase().includes(word.toLowerCase());
  }

  redirectToNotificationDetail(notificationId: number) {
    this.router.navigate(
      ['admin', 'notification'],
      {queryParams: {notificationId: notificationId}}
    );
  }

  deleteNotification(notificationId: number) {
    this.notificationService.deleteNotification(notificationId)
      .subscribe((resp) => {
        if (resp.message) {
          this.message.success(resp.message);
          this.initNotification();
        } else if (resp.error) {
          this.message.error(resp.error);
        }
      })
  }

  openDeleteNotificationModal(notificationId: number) {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this notification?',
      nzContent: '<b style="color: red;">This action is nonundoable</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteNotification(notificationId),
      nzCancelText: 'No'
    });
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

  createSaveNotification() {
    this.submittedTry = true;
    let tempStartDate: Date = this.validateForm.value.rangeDate[0];
    let tempEndDate: Date = this.validateForm.value.rangeDate[1];
    tempStartDate = new Date(tempStartDate.getFullYear(), tempStartDate.getMonth(), tempStartDate.getDate(), 8, 0, 0)
    tempEndDate = new Date(tempEndDate.getFullYear(), tempEndDate.getMonth(), tempEndDate.getDate(), 8, 0, 0)
    this.validateForm.patchValue({
      startDate: tempStartDate,
      endDate: tempEndDate,
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
            this.initNotification();
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

  openNotificationDrawerCreate() {
    this.initForm()
    this.createNotificationDrawerVisibility = true;
    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);
    let endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59)
    this.validateForm.patchValue(
      {rangeDate: [startDate, endDate]}
    )
    this.loadingEditNotificationDrawer = false;
  }

  closeNotificationDrawer() {
    this.createNotificationDrawerVisibility = false;
  }

  changeColor(color: string) {
    this.notificationColor = color;
  }

}
