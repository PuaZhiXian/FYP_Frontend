import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthorizationService} from "../../../../service/authorization/authorization.service";
import {ILoginResponse} from "../../../../interface/authorization/i-login-response";

//import {DataService} from '../../../../data.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  temp: string = "";
  emailClass: string = '';
  passwordClass: string = '';

  errorMessageModalVisible: boolean = false;
  isInvalidPassword: boolean = false;

  constructor(private fb: UntypedFormBuilder,
              private router: Router,
              private authorizationService: AuthorizationService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  onfocus(type: string) {
    switch (type) {
      case "email":
        this.emailClass = 'label-float';
        break;
      case "password":
        this.passwordClass = 'label-float';
    }
  }

  onblur(type: string) {
    switch (type) {
      case "email":
        this.emailClass = '';
        break;
      case "password":
        this.passwordClass = '';
    }
  }

  redirect(link: string) {
    this.router.navigate(['/', 'sign', link])
  }

  submit() {
    if (this.validateForm.valid) {
      this.authorizationService.login(this.validateForm.value)
        .subscribe((resp: ILoginResponse) => {
          if (resp.token) {
            this.router.navigate(['/', 'dashboard']);
          } else if (resp.error) {
            this.errorMessageModalVisible = true;
            this.isInvalidPassword = resp.error == 'Invalid password !'
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

  handleCancel() {
    this.errorMessageModalVisible = false;
  }
}
