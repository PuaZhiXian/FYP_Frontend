import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";
import {IPersonalInformation} from "../../../../interface/user/i-personal-information";

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              public activatedRoute: ActivatedRoute,
              private projectService: ProjectService,
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
    this.editMode = false;
    this.ref.detectChanges();
    this.ref.markForCheck();
  }

}
