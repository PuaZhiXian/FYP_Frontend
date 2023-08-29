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

  ngOnInit(): void {
    this.initForm();
  }

  redirect(link: string, email: string, organisation: string) {
    this.router.navigate(['/', 'sign', link], {
      queryParams: {email, organisation},
    });
  }

  submit() {
    if (this.validateForm.valid) {
      this.authorizationService.signup(this.validateForm.value)
        .subscribe((resp) => {
          if (resp.message) {
            console.log(resp.message)
          } else if (resp.error) {
            console.log(resp.error)
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
