import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UntypedFormBuilder} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {ColumnItem} from "../../../../interface/table/column-item";
import {IApiPayloadParameter} from "../../../../interface/api-collection/i-api-payload-parameter";

@Component({
  selector: 'response-table',
  templateUrl: './response-table.component.html',
  styleUrls: ['./response-table.component.scss']
})
export class ResponseTableComponent implements OnInit {

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private projectService: ProjectService,
              private message: NzMessageService,
              private ref: ChangeDetectorRef) {
  }

  @Input() projectId!: string | null;

  listOfColumns !: ColumnItem[];
  @Input()tableData!: IApiPayloadParameter[];

  ngOnInit(): void {
    this.initTable();
  }

  initTable() {
    this.listOfColumns = [
      {
        name: 'Parameter',
        sortOrder: null,
        sortFn: null,
        sortDirections: [],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null,
      },
      {
        name: 'Data Type',
        sortOrder: null,
        sortFn: null,
        sortDirections: [],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null
      },
      {
        name: 'Require',
        sortOrder: null,
        sortFn: null,
        sortDirections: [],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null
      },
      {
        name: 'Description',
        sortOrder: null,
        sortFn: null,
        sortDirections: [],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null
      },
      {
        name: 'Remark',
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
