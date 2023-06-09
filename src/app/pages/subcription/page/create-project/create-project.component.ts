import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";
import {ProjectService} from "../../../../service/project/project.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder,
              private router: Router,
              private message: NzMessageService,
              private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }


  submit() {
    if (this.validateForm.valid) {
      this.message.success('Project have successfully created');
      this.projectService.addProject(this.validateForm.value)
        .pipe(finalize(() => {
          this.router.navigate(['/', 'dashboard'])
        }))
        .subscribe((resp) => {

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
