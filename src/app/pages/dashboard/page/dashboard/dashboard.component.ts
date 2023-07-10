import {Component, OnInit} from '@angular/core';
import {NzConfigService} from "ng-zorro-antd/core/config";
import {ProjectOverview} from "../../../../interface/project/project-overview";
import {ColumnItem} from "../../../../interface/table/column-item";
import {Router} from "@angular/router";
import {HeaderComponent} from "../../../header/page/header/header.component";
import {ProjectService} from "../../../../service/project/project.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchKey: string = '';

  constructor(private nzConfigService: NzConfigService,
              private router: Router,
              private projectService: ProjectService) {
  }

  dark = true
  programming_language = 'python'

  options = {
    'python': '',
    'java': ''
  }
  code = ''

  projects !: ProjectOverview[];
  filteredProjects: ProjectOverview[] = [];
  listOfColumns !: ColumnItem[];

  loadingProject: boolean = true;

  ngOnInit(): void {

    this.initProjects();
    this.initTable();
    HeaderComponent.logined = true;
  }

  codeEditor(){
    const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: this.dark ? 'vs-dark' : 'vs',
        readOnly: true,
        minimap: {enabled: false},
      }
    });
    this.code = 'sd'
  }

  initProjects() {
    this.projectService.getAllProject()
      .pipe(finalize(() => {
        this.loadingProject = false;
      }))
      .subscribe((resp) => {
        this.projects = [
          {
            name: 'Project Copy 1',
            description: 'Description 1 - Copy',
            id: '002',
            creationDate: new Date(2023,3,9),
            token: 'token1as8d7f',
          },
          {
            name: 'Project Copy 2',
            description: 'Description 1 - Duplicate',
            id: '003',
            creationDate: new Date(2023,5,9),
            token: 'token8h1n2u3m',
          },
          {
            name: 'Project Replica',
            description: 'Copy of Description 1',
            id: '004',
            creationDate: new Date(2023,3,9),
            token: 'tokenkju89732',
          },
          {
            name: 'Duplicated Project',
            description: 'Description 1 Copy',
            id: '005',
            creationDate: new Date(2023,10,12),
            token: 'tokenb2m4n6g8',
          },
          {
            name: 'Project Iteration',
            description: 'Description 1 - Iteration',
            id: '006',
            creationDate: new Date(2023,7,9),
            token: 'token1j2k3l4',
          },
          {
            name: 'Project Redo',
            description: 'Redo of Description 1',
            id: '007',
            creationDate: new Date(2023,5,9),
            token: 'token4d7s6a1',
          },
          {
            name: 'Project Clone',
            description: 'Description 1 Cloned',
            id: '008',
            creationDate: new Date(2023,10,23),
            token: 'token1r2h3i4',
          },
          {
            name: 'Project Duplicate',
            description: 'Duplicate of Description 1',
            id: '009',
            creationDate: new Date(2023,1,9),
            token: 'token9v8b7n6',
          },
          {
            name: 'Project Reiteration',
            description: 'Description 1 - Reiteration',
            id: '010',
            creationDate: new Date(2023,10,9),
            token: 'token5f4d3s2',
          },
          {
            name: 'Project Reduplication',
            description: 'Reduplication of Description 1',
            id: '011',
            creationDate: new Date(2023,10,10),
            token: 'token2d3a4s5',
          }
        ]
        ;
        this.filteredProjects = this.projects;
      })
  }

  initTable() {
    this.listOfColumns = [
      {
        name: 'Id',
        sortOrder: null,
        sortFn: (a: ProjectOverview, b: ProjectOverview) => a.id.localeCompare(b.id),
        sortDirections: [],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: '80px',
      },
      {
        name: 'Project Name',
        sortOrder: null,
        sortFn: (a: ProjectOverview, b: ProjectOverview) => a.name.localeCompare(b.name),
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null
      },
      {
        name: 'Project Description',
        sortOrder: null,
        sortFn: null,
        sortDirections: [],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null
      },
      {
        name: 'Project Creation Date',
        sortOrder: null,
        sortFn: (a: ProjectOverview, b: ProjectOverview) => a.creationDate.toISOString().localeCompare(b.creationDate.toISOString()),
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width: null
      },
      {
        name: 'Token',
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

  //Code Editor
  toggleDarkMode() {
    this.dark = !this.dark
    const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: this.dark ? 'vs-dark' : 'vs',
        readOnly: true,
        minimap: {enabled: false},
      }
    });
  }

  createNewProject() {
    this.router.navigate(['/', 'subcription'])
  }

  onChange(value: string): void {

  }

}
