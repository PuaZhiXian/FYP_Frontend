import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {IHeaderList} from "../../../../interface/header/i-header-list";
import {FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {AuthorizationService} from "../../../../service/authorization/authorization.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {

  static logined: boolean = true;
  static headerIndicator: string = '';
  headerList!: IHeaderList[];
  profileModalVisibility: boolean = false;
  profileModalValidateForm!: UntypedFormGroup;
  editingProfile: boolean = false;

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private authorizationService: AuthorizationService,
              private message: NzMessageService) {
  }

  get staticLogined() {
    return AdminHeaderComponent.logined;
  }

  get headerIndicator() {
    return AdminHeaderComponent.headerIndicator;
  }

  ngOnInit() {
    this.initHeaderList();
  }

  initHeaderList() {
    this.headerList = [
      {
        link: '/dashboard',
        nameKey: 'dashboard',
        selected: true
      },
      {
        link: '/dev',
        nameKey: 'dev.style.guide',
        selected: false
      },
    ]
  }

  redirect(url: string) {
    this.router.navigate(['/', 'admin', url]);
  }

  initProfileModalForm() {
    this.profileModalValidateForm = this.fb.group({
      password: [null, [Validators.required]],
      newPassword: [null, [Validators.required, Validators.pattern('(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=[\\]{};\':"\\\\|,.<>/?]).{8,}')]],
      rePassword: [null, [Validators.required]],
    }, {validators: this.checkIfMatchingPasswords('newPassword', 'rePassword')});
  }

  profileModalCancel() {
    this.profileModalVisibility = false;
    this.editMode(false);
  }

  profileModalOpen() {
    this.initProfileModalForm();
    this.profileModalVisibility = true;
  }

  checkIfMatchingPasswords(passwordKey: string, repassword: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[repassword];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  changePassword() {

  }

  editMode(onOff: boolean) {
    this.editingProfile = onOff;
  }

  logout() {
    this.authorizationService.logout()
      .subscribe((resp) => {
        if (resp.message) {
          this.message.success(resp.message + "");
          this.router.navigate(['sign', 'sign-in']);
        } else if (resp.error) {
          this.message.error(resp.error);
        }
      })
  }

}
