import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UntypedFormBuilder} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'api-collection',
  templateUrl: './api-collection.component.html',
  styleUrls: ['./api-collection.component.scss']
})
export class ApiCollectionComponent implements OnInit {

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private projectService: ProjectService,
              private message: NzMessageService,
              private ref: ChangeDetectorRef) {
  }

  @Input() projectId!: string | null;

  ngOnInit(): void {

  }

}
