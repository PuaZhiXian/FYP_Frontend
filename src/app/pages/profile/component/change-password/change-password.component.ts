import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {IPersonalInformation} from "../../../../interface/user/i-personal-information";
import {NzMessageService} from "ng-zorro-antd/message";
import {VendorService} from "../../../../service/vendor/vendor.service";
import {finalize} from "rxjs";
import {AuthorizationService} from "../../../../service/authorization/authorization.service";

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              public activatedRoute: ActivatedRoute,
              private ref: ChangeDetectorRef,
              private message: NzMessageService,
              private vendorService: VendorService,
              private authorizationService: AuthorizationService) {
  }

  validateForm!: UntypedFormGroup;
  editMode: boolean = false;

  personalInformation!: IPersonalInformation;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.validateForm = this.fb.group({
      password: [null, [Validators.required]],
      newPassword: [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      rePassword: [null, [Validators.required]],
    }, {validators: this.checkIfMatchingPasswords('newPassword', 'rePassword')});
  }

  checkIfMatchingPasswords(passwordKey: string, rePassword: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[rePassword];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  resetPassword() {
    if (this.validateForm.valid) {
      this.vendorService.changePassword(this.validateForm.value['password'], this.validateForm.value['newPassword'])
        .pipe(finalize(() => {
          this.ref.markForCheck();
          this.ref.detectChanges();
          this.logout();
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

  logout() {
    this.authorizationService.logout()
      .subscribe((resp) => {
        if (resp.message) {
          this.router.navigate(['sign', 'sign-in']);
        }
      })
  }

}
