import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {finalize} from "rxjs";

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private projectService: ProjectService,
              private message: NzMessageService,
              private ref: ChangeDetectorRef) {
  }

  @Input() projectName!: string;
  @Input() projectDescription!: string;
  @Input() projectId!: string | null;

  validateForm!: UntypedFormGroup;
  editMode: boolean = false;
  updating: boolean = false;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.validateForm = this.fb.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  deleteProject() {
    this.projectService.deleteProject(this.projectId + '')
      .subscribe((resp) => {
        if (resp.message) {
          this.message.success(resp.message);
          this.router.navigate(['/', 'dashboard']);
        } else if (resp.error) {
          this.message.error(resp.error);
        }
      })
  }

  editProject() {
    this.validateForm.patchValue({
      id: this.projectId,
      name: this.projectName,
      description: this.projectDescription
    })
    this.editMode = true;
  }

  reset() {
    this.validateForm.patchValue({
      id: this.projectId,
      name: this.projectName,
      description: this.projectDescription
    })
  }

  saveProject() {
    this.updating = true;
    this.ref.detectChanges();
    this.ref.markForCheck();

    this.projectService.addProject(this.validateForm.value)
      .pipe(finalize(() => {
        this.updating = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.editMode = false;
        this.message.success('Project have successfully saved');
      })
  }
}
