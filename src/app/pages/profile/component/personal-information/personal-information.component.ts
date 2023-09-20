import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {IPersonalInformation} from "../../../../interface/user/i-personal-information";
import {AuthorizationService} from "../../../../service/authorization/authorization.service";
import {finalize} from "rxjs";
import {VendorRestService} from "../../../../restService/vendor/vendor.rest.service";

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              public activatedRoute: ActivatedRoute,
              private authorizationService: AuthorizationService,
              private ref: ChangeDetectorRef,
              private vendorRestService: VendorRestService) {
  }

  validateForm!: UntypedFormGroup;
  editMode: boolean = false;
  updating: boolean = false;

  personalInformation!: IPersonalInformation;
  loadingPersonalInformation: boolean = true;

  ngOnInit(): void {
    this.initPersonalInformation();
    this.initForm();
  }

  initForm() {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]]
    });
  }

  initPersonalInformation() {
    this.vendorRestService.getVendorProfile()
      .pipe((finalize(() => {
        this.loadingPersonalInformation = false;
        this.ref.markForCheck();
        this.ref.detectChanges();
      })))
      .subscribe((resp) => {
        this.personalInformation = resp
      })
  }

  editProject() {
    this.validateForm.patchValue({
      username: this.personalInformation.username
    })
    this.editMode = true;
  }

  savePersonalInformation() {
    this.authorizationService.getPersonalInformation()
      .pipe(finalize(() => {
        this.editMode = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {

      })
  }
}
