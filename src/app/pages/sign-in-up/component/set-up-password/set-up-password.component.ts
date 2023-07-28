import {Component, OnInit} from '@angular/core';
import {FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorizationService} from "../../../../service/authorization/authorization.service";

@Component({
  selector: 'set-up-password',
  templateUrl: './set-up-password.component.html',
  styleUrls: ['./set-up-password.component.scss']
})
export class SetUpPasswordComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  temp: string = "";
  repasswordClass: string = '';
  passwordClass: string = '';
  passwordVisible: boolean = false;
  email: string = "";
  organisation: string = "";

  constructor(private fb: UntypedFormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private authorizationService: AuthorizationService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.organisation = params['organisation'];
    });
  }

  initForm() {
    this.validateForm = this.fb.group({
      password: [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      repassword: [null, [Validators.required]]
    }, {validators: this.checkIfMatchingPasswords('password', 'repassword')});
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
        this.repasswordClass = '';
        break;
    }
  }


  submit() {
    if (this.validateForm.valid) {
      if (this.validateForm.value.password === this.validateForm.value.repassword) {
        this.authorizationService.insertNewUser(this.email, this.organisation, this.validateForm.value.password)
        .subscribe((resp) => {
          this.router.navigate(['/', 'sign', 'sign-in']);
        });
      }
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
