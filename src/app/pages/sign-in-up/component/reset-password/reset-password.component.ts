import {Component, OnInit} from '@angular/core';
import {FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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

  constructor(private fb: UntypedFormBuilder,
              private router: Router) {
  }

  initForm() {
    this.validateForm = this.fb.group({
      password: [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      repassword: [null, [Validators.required]]
    },{validators: this.checkIfMatchingPasswords('password', 'repassword')});
  }

  onfocus(type: string) {
    switch (type) {
      case "password":
        this.passwordClass = 'label-float';
        break;
      case "repassword":
        this.repasswordClass = 'label-float';
        break;
    }
  }

  onblur(type: string) {
    switch (type) {
      case "password":
        this.passwordClass = '';
        break;
      case "repassword":
        this.repasswordClass = 'label-float';
        break;
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  submit() {
    if (this.validateForm.valid) {
      this.router.navigate(['/', 'sign', 'sign-in']);
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
}
