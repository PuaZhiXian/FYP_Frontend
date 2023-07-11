import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthorizationService} from "../../../../service/authorization/authorization.service";

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  temp: string = "";
  emailClass: string = '';
  passwordClass: string = '';

  constructor(private fb: UntypedFormBuilder,
              private router: Router,
              private authorizationService: AuthorizationService) {
  }

  initForm() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      organisation: [null, [Validators.required]]
    });
  }

  onfocus(type: string) {
    switch (type) {
      case "email":
        this.emailClass = 'label-float';
        break;
      case "organisation":
        this.passwordClass = 'label-float';
    }
  }

  onblur(type: string) {
    switch (type) {
      case "email":
        this.emailClass = '';
        break;
      case "organisation":
        this.passwordClass = '';
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  redirect(link: string) {
    this.router.navigate(['/', 'sign', link])
  }

  submit() {
    if (this.validateForm.valid) {
      this.authorizationService.signup(this.validateForm.value['email'], this.validateForm.value['organisation'])
        .subscribe((resp) => {
          this.redirect('set-up-password');
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
