import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {Router} from "@angular/router";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {finalize} from "rxjs";
import {NzModalService} from "ng-zorro-antd/modal";

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
              private ref: ChangeDetectorRef,
              private modal: NzModalService) {
  }

  @Input() projectName!: string;
  @Input() projectDescription!: string;
  @Input() projectId!: string | null;

  @Output() callInitProject = new EventEmitter<boolean>();

  validateForm!: UntypedFormGroup;
  editMode: boolean = false;
  updating: boolean = false;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.validateForm = this.fb.group({
      id: [null, [Validators.required]],
      project_name: [null, [Validators.required]],
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

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this project?',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteProject(),
      nzCancelText: 'No'
    });
  }

  editProject() {
    this.validateForm.patchValue({
      id: this.projectId,
      project_name: this.projectName,
      description: this.projectDescription
    })
    this.editMode = true;
  }

  reset() {
    this.validateForm.patchValue({
      id: this.projectId,
      project_name: this.projectName,
      description: this.projectDescription
    })
  }

  saveProject() {
    this.updating = true;
    this.ref.detectChanges();
    this.ref.markForCheck();

    this.projectService.saveProjectChange(this.validateForm.value, this.projectId + "")
      .pipe(finalize(() => {
        this.updating = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        if (resp.message) {
          this.callInitProject.emit(true)
          this.editMode = false;
          this.message.success(resp.message);
        } else if (resp.error) {
          this.message.error(resp.error);
        }
      })
  }
}
