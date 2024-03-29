import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {finalize} from "rxjs";
import {UntypedFormBuilder} from "@angular/forms";
import {VendorService} from "../../../../service/vendor/vendor.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzModalService} from "ng-zorro-antd/modal";
import {IAdminUserDetails} from "../../../../interface/user/i-admin-user-details";
import {ApiCollectionService} from "../../../../service/apiCollection/api-collection.service";
import {AdminHeaderComponent} from "../../../admin-header/page/header/admin-header.component";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  vendorId!: string;
  loadingUser: boolean = true;
  userDetail!: IAdminUserDetails;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: UntypedFormBuilder,
              private ref: ChangeDetectorRef,
              private vendorService: VendorService,
              private message: NzMessageService,
              private modal: NzModalService,
              private apiCollectionService: ApiCollectionService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.vendorId = params.get('id') || '';
    });
    this.initVendorDetail();
    AdminHeaderComponent.headerIndicator = 'user';
  }

  initVendorDetail() {
    this.vendorService.getOneUser(this.vendorId)
      .pipe(finalize(() => {
        this.loadingUser = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.userDetail = resp;
      })
  }

  get getAbbreviation() {
    const words = this.userDetail.username.split(' ');
    let abbreviation = '';

    for (const word of words) {
      if (word.length > 0) {
        abbreviation += word[0].toUpperCase();
      }
      if (abbreviation.length > 1) {
        break;
      }
    }
    return abbreviation;
  }
}
