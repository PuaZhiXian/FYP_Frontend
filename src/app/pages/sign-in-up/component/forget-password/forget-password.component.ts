import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {IMessage} from 'src/app/interface/authorization/i-message';
import {AuthorizationService} from "../../../../service/authorization/authorization.service";
import {NzMessageService} from "ng-zorro-antd/message";

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
              private message: NzMessageService,
              private authorizationService: AuthorizationService) {
  }

  initForm() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  submit() {
    if (this.validateForm.valid) {
      const email = this.validateForm.value['email'];
      this.authorizationService.sendResetEmail(email)
        .subscribe((resp: IMessage) => {
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

}
