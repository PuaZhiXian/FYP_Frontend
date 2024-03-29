import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthorizationService} from "../../../../service/authorization/authorization.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {CookieService} from 'ngx-cookie-service';
import {VendorService} from "../../../../service/vendor/vendor.service";
import {HeaderComponent} from "../../../header/page/header/header.component";
import {catchError, finalize, of, switchMap} from "rxjs";

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
  isShowPassword: boolean = false;

  constructor(private fb: UntypedFormBuilder,
              private message: NzMessageService,
              private router: Router,
              private authorizationService: AuthorizationService,
              private vendorService: VendorService,
              private cookieService: CookieService) {
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

  redirect(link: string) {
    this.router.navigate(['/', 'sign', link])
  }

  getAbbreviation(userName: string) {
    const words = userName.split(' ');
    let abbreviation = '';

    for (const word of words) {
      if (word.length > 0) {
        abbreviation += word[0].toUpperCase();
      }
      if (abbreviation.length > 1) {
        break;
      }
    }
    return abbreviation;
  }


  submit() {
    if (this.validateForm.valid) {
      this.authorizationService.login(this.validateForm.value)
        .subscribe((resp) => {
          if (resp.message) {
            this.vendorService.getVendorProfile()
              .pipe(
                catchError(error => {
                  return of(null);
                })
              )
              .subscribe((info) => {
                if (info) {
                  this.cookieService.set('abbreName', this.getAbbreviation(info.username || ''), {
                    path: '/',
                  });
                }
              })
            this.router.navigate(['/', 'dashboard'])
            this.message.success(resp.message)
          } else if (resp.error) {
            this.message.error(resp.error)
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
