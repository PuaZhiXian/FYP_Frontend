import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {finalize} from "rxjs";
import {UntypedFormBuilder} from "@angular/forms";
import {VendorService} from "../../../../service/vendor/vendor.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzModalService} from "ng-zorro-antd/modal";
import {HeaderComponent} from "../../../header/page/header/header.component";
import {IAdminUserDetails} from "../../../../interface/user/i-admin-user-details";
import {ApiCollectionService} from "../../../../service/apiCollection/api-collection.service";

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
    HeaderComponent.headerIndicator = '';
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
}
