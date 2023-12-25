import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UntypedFormBuilder} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {finalize} from "rxjs";
import {ColumnItem} from "../../../../interface/table/column-item";
import {IProjectTokenLog} from "../../../../interface/project/i-project-token-log";
import {CommonService} from "../../../../service/common/common.service";

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
              private commonService: CommonService) {
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
    this.projectService.getProjectToken()
      .pipe(finalize(() => {
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.currentSessionToken = Array.from({length: 10}, () => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math.floor(Math.random() * 62)]).join('');
      });
  }

  copyToClipBoard() {
    this.commonService.copyToClipboard(this.currentSessionToken);
  }
}
