import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UntypedFormBuilder} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";
import {NzMessageService} from "ng-zorro-antd/message";

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

  ngOnInit(): void {

  }

  requestToken() {
    this.currentSessionToken = Array.from({length: 10}, () => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math.floor(Math.random() * 62)]).join('');;
  }

  getTokenHistory() {

  }

  copyToClipBoard() {
    navigator.clipboard.writeText(this.currentSessionToken);
  }

}
