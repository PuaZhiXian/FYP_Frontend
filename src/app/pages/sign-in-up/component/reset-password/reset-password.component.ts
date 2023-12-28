import {Component, OnInit} from '@angular/core';
import {FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorizationService} from "../../../../service/authorization/authorization.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  temp: string = "";
  repasswordClass: string = '';
  passwordClass: string = '';
  token!: string | null
  passwordStrength = new Map<string, boolean>([
    ['Have at least one letter', false],
    ['Have at least one capital letter', false],
    ['Have at least one small letter', false],
    ['Have at least one number', false],
    ['Be at least 8 characters', false],
    ['Have at least one special character', false],
  ]);
  isShowPassword: boolean = false;
  isShowConfirmPassword: boolean = false;

  constructor(private fb: UntypedFormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private authorizationService: AuthorizationService,
              private message: NzMessageService) {
  }

  initForm() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.token = params['token'];
    });
    this.validateForm = this.fb.group({
      password: [null, [Validators.required, Validators.pattern('(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=[\\]{};\':"\\\\|,.<>/?]).{8,}')]],
      repassword: [null, [Validators.required]]
    }, {validators: this.checkIfMatchingPasswords('password', 'repassword')});
  }

  ngOnInit(): void {
    this.initForm();
    this.changeHandler();
  }

  submit() {
    if (this.validateForm.valid) {
      this.authorizationService.resetPassword(this.token + "", this.validateForm.value['password'])
        .subscribe((resp) => {
          if (resp.message) {
            this.message.success(resp.message)
            this.router.navigate(['/', 'sign', 'sign-in']);
          } else if (resp.error) {
            this.message.error(resp.error)
          }
        });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
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

  changeHandler() {
    this.validateForm.get('password')?.valueChanges.subscribe((value => {
      this.passwordStrength.set('Have at least one letter', /[a-zA-Z]/.test(value))
      this.passwordStrength.set('Have at least one capital letter', /[A-Z]/.test(value))
      this.passwordStrength.set('Have at least one small letter', /[a-z]/.test(value))
      this.passwordStrength.set('Have at least one number', /\d/.test(value))
      this.passwordStrength.set('Be at least 8 characters', /.{8,}/.test(value))
      this.passwordStrength.set('Have at least one special character', /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value))
    }));
  }
}
