import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UntypedFormBuilder} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {finalize} from "rxjs";
import {ColumnItem} from "../../../../interface/table/column-item";
import {IProjectTokenLog} from "../../../../interface/project/i-project-token-log";

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
              private ref: ChangeDetectorRef) {
  }

  @Input() projectName!: string;
  @Input() projectId!: string | null;

  currentSessionToken!: string;
  tokenLog: IProjectTokenLog[] = [];
  listOfColumns !: ColumnItem[];

  ngOnInit(): void {
    this.initTable()
    this.getTokenHistory();
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

  getTokenHistory() {
    this.projectService.getTokenHistory()
      .pipe(finalize(() => {
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.tokenLog = [
          {
            created: new Date("2023-05-10T11:23:00.000Z"),
            expiration: new Date("2023-05-18T11:23:00.000Z"),
            lastUsed: new Date("2023-05-17T14:23:00.000Z"),
          }
        ]
      })
  }

  copyToClipBoard() {
    navigator.clipboard.writeText(this.currentSessionToken);
  }

  initTable() {
    this.listOfColumns = [
      {
        name: 'Created',
        sortOrder: null,
        sortFn: null,
        sortDirections: [],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null,
      },
      {
        name: 'Expiration',
        sortOrder: null,
        sortFn: null,
        sortDirections: [],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null
      },
      {
        name: 'Last Used',
        sortOrder: null,
        sortFn: null,
        sortDirections: [],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null
      }
    ];
  }

}
