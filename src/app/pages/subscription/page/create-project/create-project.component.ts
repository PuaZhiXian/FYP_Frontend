import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";
import {ProjectService} from "../../../../service/project/project.service";
import {finalize} from "rxjs";
import {ISelectingApiCollection} from "../../../../interface/api-collection/i-selecting-api-collection";
import {ApiCollectionService} from "../../../../service/apiCollection/api-collection.service";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  apiCollection: ISelectingApiCollection[] = [];
  loadingForm: boolean = true;
  submittedTry: boolean = false;

  constructor(private fb: UntypedFormBuilder,
              private router: Router,
              private message: NzMessageService,
              private projectService: ProjectService,
              private apiCollectionService: ApiCollectionService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.initForm();
    this.initApiCollection();
  }

  initApiCollection() {
    this.apiCollectionService.getSubscribedApiCollection()
      .pipe(finalize(() => {
        this.loadingForm = false;
        this.ref.markForCheck();
        this.ref.detectChanges();
      }))
      .subscribe((resp) => {
        this.apiCollection = resp;
      })
  }

  initForm() {
    this.validateForm = this.fb.group({
      project_name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      apiCollection: [null, [Validators.required]]
    });
  }

  submit() {
    this.submittedTry = true;
    this.ref.markForCheck();
    this.ref.detectChanges();
    if (this.validateForm.valid) {
      this.projectService.addProject(this.validateForm.value)
        .pipe(finalize(() => {
          this.router.navigate(['/', 'dashboard'])
        }))
        .subscribe((resp) => {
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
      if (!this.validateForm.value['apiCollection'] || this.validateForm.value['apiCollection'].length === 0) {
        this.message.error('No API Collection is selected')
      }
    }
  }

  updateSelectedApiCollection(selectedId: any) {
    this.validateForm.patchValue({
      apiCollection: selectedId
    })
  }
}
