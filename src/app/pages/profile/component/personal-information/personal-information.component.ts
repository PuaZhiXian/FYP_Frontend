import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {IPersonalInformation} from "../../../../interface/user/i-personal-information";
import {AuthorizationService} from "../../../../service/authorization/authorization.service";
import {finalize} from "rxjs";
import {VendorService} from "../../../../service/vendor/vendor.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              public activatedRoute: ActivatedRoute,
              private ref: ChangeDetectorRef,
              private message: NzMessageService,
              private vendorService: VendorService) {
  }

  validateForm!: UntypedFormGroup;
  editMode: boolean = false;
  updating: boolean = false;

  personalInformation!: IPersonalInformation;
  loadingPersonalInformation: boolean = true;

  ngOnInit(): void {
    this.initPersonalInformation();
    this.initForm();
  }

  initForm() {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]]
    });
  }

  initPersonalInformation() {
    this.vendorService.getVendorProfile()
      .pipe((finalize(() => {
        this.loadingPersonalInformation = false;
        this.ref.markForCheck();
        this.ref.detectChanges();
      })))
      .subscribe((resp) => {
        this.personalInformation = resp
      })
  }

  editProject() {
    this.validateForm.patchValue({
      username: this.personalInformation.username
    })
    this.editMode = true;
  }

  savePersonalInformation() {
    if (this.validateForm.valid) {
      this.vendorService.updateVendorProfile(this.validateForm.value)
        .pipe(finalize(() => {
          this.editMode = false;
          this.loadingPersonalInformation = true;
          this.initPersonalInformation();
          this.ref.detectChanges();
          this.ref.markForCheck();
        }))
        .subscribe((resp) => {
          if (resp.message) {
            this.message.success(resp.message);
          } else if (resp.error) {
            this.message.error(resp.error);
          }
        })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }

  }
}
