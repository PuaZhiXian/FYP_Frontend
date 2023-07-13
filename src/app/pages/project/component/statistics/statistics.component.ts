import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UntypedFormBuilder} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {ColumnItem} from "../../../../interface/table/column-item";
import {IProjectStatistics} from "../../../../interface/project/i-project-statistics";
import {finalize} from "rxjs";

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private projectService: ProjectService,
              private message: NzMessageService,
              private ref: ChangeDetectorRef) {
  }

  @Input() projectId!: string | null;

  listOfColumns !: ColumnItem[];
  loadingTable: boolean = true;
  tableData: IProjectStatistics[] = [];

  ngOnInit(): void {
    this.initTable()
    this.initStatistics();
  }

  initStatistics() {
    this.projectService.getProjectStatistics(this.projectId + "")
      .pipe(finalize(() => {
        this.loadingTable = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.tableData = [
          {
            "timestamp": new Date("2019-06-28T08:15:42.000Z"),
            "api": "api name 1",
            "method": "GET",
            "responseSize": 250,
            "responseTime": 150,
            "status": "200"
          },
          {
            "timestamp": new Date("2020-11-15T14:27:56.000Z"),
            "api": "api name 2",
            "method": "POST",
            "responseSize": 320,
            "responseTime": 180,
            "status": "201"
          },
          {
            "timestamp": new Date("2018-09-01T19:50:23.000Z"),
            "api": "api name 3",
            "method": "GET",
            "responseSize": 120,
            "responseTime": 90,
            "status": "200"
          },
          {
            "timestamp": new Date("2021-05-10T10:35:17.000Z"),
            "api": "api name 4",
            "method": "PUT",
            "responseSize": 180,
            "responseTime": 120,
            "status": "200"
          },
          {
            "timestamp": new Date("2022-03-07T07:58:04.000Z"),
            "api": "api name 5",
            "method": "GET",
            "responseSize": 420,
            "responseTime": 200,
            "status": "200"
          },
          {
            "timestamp": new Date("2023-01-18T15:40:53.000Z"),
            "api": "api name 6",
            "method": "POST",
            "responseSize": 280,
            "responseTime": 160,
            "status": "201"
          },
          {
            "timestamp": new Date("2020-07-26T09:52:35.000Z"),
            "api": "api name 7",
            "method": "GET",
            "responseSize": 200,
            "responseTime": 100,
            "status": "200"
          },
          {
            "timestamp": new Date("2022-08-12T12:05:12.000Z"),
            "api": "api name 8",
            "method": "PUT",
            "responseSize": 150,
            "responseTime": 80,
            "status": "200"
          },
          {
            "timestamp": new Date("2021-03-05T17:18:29.000Z"),
            "api": "api name 9",
            "method": "GET",
            "responseSize": 300,
            "responseTime": 180,
            "status": "200"
          },
          {
            "timestamp": new Date("2019-12-02T21:31:07.000Z"),
            "api": "api name 10",
            "method": "POST",
            "responseSize": 400,
            "responseTime": 220,
            "status": "201"
          }
        ]
      })
  }

  initTable() {
    this.listOfColumns = [
      {
        name: 'Timestamp',
        sortOrder: null,
        sortFn: (a: IProjectStatistics, b: IProjectStatistics) => a.timestamp.toISOString().localeCompare(b.timestamp.toISOString()),
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null,
      },
      {
        name: 'API',
        sortOrder: null,
        sortFn: (a: IProjectStatistics, b: IProjectStatistics) => a.api.localeCompare(b.api),
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null
      },
      {
        name: 'Method',
        sortOrder: null,
        sortFn: (a: IProjectStatistics, b: IProjectStatistics) => a.method.localeCompare(b.method),
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: '120px'
      },
      {
        name: 'Response Size/KB',
        sortOrder: null,
        sortFn: (a: IProjectStatistics, b: IProjectStatistics) => (a.responseSize - b.responseSize),
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null
      },
      {
        name: 'Reponse Time/ms',
        sortOrder: null,
        sortFn: (a: IProjectStatistics, b: IProjectStatistics) => (a.responseTime - b.responseTime),
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null
      },
      {
        name: 'Status',
        sortOrder: null,
        sortFn: (a: IProjectStatistics, b: IProjectStatistics) => a.status.localeCompare(b.status),
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: '120px'
      }
    ];
  }


}
