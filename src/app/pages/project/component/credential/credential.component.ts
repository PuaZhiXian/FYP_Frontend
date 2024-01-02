import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UntypedFormBuilder} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {finalize} from "rxjs";
import {ColumnItem} from "../../../../interface/table/column-item";
import {IProjectTokenLog} from "../../../../interface/project/i-project-token-log";
import {CommonService} from "../../../../service/common/common.service";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.scss']
})
export class CredentialComponent implements OnInit {

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private projectService: ProjectService,
              private message: NzMessageService,
              private ref: ChangeDetectorRef,
              private commonService: CommonService,
              private modal: NzModalService) {
  }

  @Input() projectName!: string;
  @Input() projectId!: string | null;

  currentSessionToken!: string;
  tokenLog: IProjectTokenLog[] = [];
  listOfColumns !: ColumnItem[];
  loadingToken: boolean = true;

  ngOnInit(): void {

  }

  requestToken() {
    this.projectService.getProjectToken(this.projectId || '')
      .pipe(finalize(() => {
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        if (resp.message) {
          this.currentSessionToken = resp.message
        } else {
          this.modal.error({
            nzTitle: 'Request Failed',
            nzContent: resp.error
          });
        }
      });
  }

  copyToClipBoard() {
    this.commonService.copyToClipboard(this.currentSessionToken);
  }
}
