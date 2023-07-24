import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";

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

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required]],
      organisation: [null, [Validators.required]]
    });
  }

  editProject() {
    this.validateForm.patchValue({
      username: 'this.projectId',
      email: 'this.projectName',
      organisation: 'this.projectDescription'
    })
    this.editMode = true;
  }


}
