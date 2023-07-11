import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthorizationService} from "../../../../service/authorization/authorization.service";

@Component({
  selector: 'forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  temp: string = "";
  emailClass: string = '';

  constructor(private fb: UntypedFormBuilder,
              private router: Router,
              private authorizationService: AuthorizationService) {
  }

  initForm() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onfocus(type: string) {
    switch (type) {
      case "email":
        this.emailClass = 'label-float';
        break;
    }
  }

  onblur(type: string) {
    switch (type) {
      case "email":
        this.emailClass = '';
        break;
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  submit() {
    if (this.validateForm.valid) {
      this.authorizationService.sendResetEmail(this.validateForm.value['email'])
        .subscribe((resp) => {
          this.router.navigate(['/', 'sign', 'reset-password'])
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

}
