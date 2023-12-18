import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ColumnItem} from "../../../../interface/table/column-item";
import {Router} from "@angular/router";
import {VendorService} from "../../../../service/vendor/vendor.service";
import {finalize} from "rxjs";
import {IAdminUser} from "../../../../interface/user/i-admin-user";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {

  listOfColumns !: ColumnItem[];
  loadingTable: boolean = true;

  validateForm!: UntypedFormGroup;
  addUserModalValidateForm!: UntypedFormGroup;
  showToken: boolean = false;

  userList: IAdminUser[] = [];
  filterUserList: IAdminUser[] = [];

  addUserModalVisibility: boolean = false;
  submittedTry: boolean = false;

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private ref: ChangeDetectorRef,
              private vendorService: VendorService,
              private message: NzMessageService,
              private modal: NzModalService,) {
  }

  ngOnInit(): void {
    this.initUserList();
    this.initTable();
  }

  initUserList() {
    this.vendorService.getUserList()
      .pipe(finalize(() => {
        this.loadingTable = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.userList = resp;
        this.filterUserList = this.userList;
      })
  }

  initTable() {
    this.listOfColumns = [
      {
        name: 'Username',
        sortOrder: null,
        sortFn: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null,
      },
      {
        name: 'Email',
        sortOrder: null,
        sortFn: null,
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null
      },
      {
        name: 'Status',
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
        width: '150px'
      }
    ];
  }

  initAddUserModalForm() {
    this.addUserModalValidateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      organisation: [null, [Validators.required]],
    });
  }

  searching(searchKey: string) {
    if (!searchKey || searchKey.length == 0) {
      this.filterUserList = this.userList;
    } else {
      this.filterUserList = this.userList.filter((items) => {
        return this.isMatch(items.username, searchKey) || this.isMatch(items.email, searchKey);
      });
    }
  }

  isMatch(sentence: string, word: string): boolean {
    return sentence.toLocaleLowerCase().includes(word.toLowerCase());
  }

  addUserModalOpen() {
    this.initAddUserModalForm();
    this.addUserModalVisibility = true;
  }

  addUserModalCancel() {
    this.addUserModalVisibility = false;
  }

  addUserSendEmail() {
    this.submittedTry = true;
    this.ref.markForCheck();
    this.ref.detectChanges();
    if (this.addUserModalValidateForm.valid) {
      console.log('success call api')
      /*this.vendorService.addUserSendEmail(this.addUserModalValidateForm.value)
        .subscribe((resp) => {
          if (resp.message) {
            this.message.success(resp.message);
            this.addUserModalCancel()
            this.initUserList();
          } else if (resp.error) {
            this.message.error(resp.error);
          }
        })*/
    } else {
      console.log('error call api')
      Object.values(this.addUserModalValidateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  sendActivationEmail(email: string) {
    this.vendorService.sendActivationEmail(email)
      .subscribe(resp => {
        if (resp.message) {
          this.message.success(resp.message);
          this.initUserList();
        } else if (resp.error) {
          this.message.error(resp.error);
        }
      })
  }

  conformingBlockUser(vendorId: number, username: string) {
    this.modal.confirm({
      nzTitle: 'Are you sure block user "' + username + '" ?',
      nzContent: '<b style="color: red;">User will not able to use any API</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.blockUser(vendorId),
      nzCancelText: 'No'
    });
  }

  blockUser(vendorId: number) {
    this.vendorService.blockUser(vendorId)
      .subscribe((resp) => {
        if (resp.message) {
          this.message.success(resp.message);
          this.initUserList();
        } else if (resp.error) {
          this.message.error(resp.error);
        }
      })
  }

  unblockUser(vendorId: number) {
    this.vendorService.unblockUser(vendorId)
      .subscribe((resp) => {
        if (resp.message) {
          this.message.success(resp.message);
          this.initUserList();
        } else if (resp.error) {
          this.message.error(resp.error);
        }
      })
  }

  openUserDetailPage(vendorId: number) {
    this.router.navigate(['admin', 'user', 'detail', vendorId])
  }
}
