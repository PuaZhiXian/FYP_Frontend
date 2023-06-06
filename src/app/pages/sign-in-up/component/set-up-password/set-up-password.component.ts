import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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

  constructor(private fb: UntypedFormBuilder,
              private router: Router) {
  }

  initForm() {
    this.validateForm = this.fb.group({
      password: [null, [Validators.required]],
      repassword: [null, [Validators.required]]
    });
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

}
