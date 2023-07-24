import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {IPersonalInformation} from "../../../../interface/user/i-personal-information";
import {AuthorizationService} from "../../../../service/authorization/authorization.service";
import {finalize} from "rxjs";

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
              private ref: ChangeDetectorRef) {
  }

  validateForm!: UntypedFormGroup;
  editMode: boolean = false;
  updating: boolean = false;

  personalInformation!: IPersonalInformation;

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
    this.personalInformation = {
      email: "xxx@domain.com",
      organisation: "Company Meow",
      username: "Meow meow"
    }
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
