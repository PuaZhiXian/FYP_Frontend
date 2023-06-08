import {Component, OnInit} from '@angular/core';
import {NzConfigService} from "ng-zorro-antd/core/config";
import {ProjectOverview} from "../../../../interface/project/project-overview";
import {ColumnItem} from "../../../../interface/table/column-item";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchKey: string = '';

  constructor(private nzConfigService: NzConfigService) {
  }

  dark = true
  programming_language = 'python'
  loading = true

  options = {
    'python': '',
    'java': ''
  }
  code = ''

  projects !: ProjectOverview[];
  filteredProjects: ProjectOverview[] = [];
  listOfColumns !: ColumnItem[];

  ngOnInit(): void {
    const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: this.dark ? 'vs-dark' : 'vs',
        readOnly: true,
        minimap: {enabled: false},
      }
    });
    this.loading = false
    this.code = 'sd'
    console.log(this.options)

    this.initProjects();
    this.initTable();
    this.filteredProjects = this.projects;
  }

  initProjects() {
    this.projects = [
      {
        name: 'Project Name 1',
        description: 'Project Description 1',
        id: 'P01',
        creationDate: new Date(2023, 5, 7),
        token: 'I89NJASND923',
      },
      {
        name: 'Project Name 2',
        description: 'Project Description 2',
        id: 'P02',
        creationDate: new Date(2023, 4, 20),
        token: 'WENS23FND92G',
      },
      {
        name: 'Project Name 3',
        description: 'Project Description 3',
        id: 'P03',
        creationDate: new Date(2023, 1, 13),
        token: 'IES214SNDRG3',
      }
    ]
  }

  initTable() {
    this.listOfColumns = [
      {
        name: 'No',
        sortOrder: null,
        sortFn: (a: ProjectOverview, b: ProjectOverview) => a.id.localeCompare(b.id),
        sortDirections: [],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width : '80px',
      },
      {
        name: 'Project Name',
        sortOrder: null,
        sortFn: (a: ProjectOverview, b: ProjectOverview) => a.name.localeCompare(b.name),
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width : null
      },
      {
        name: 'Project Description',
        sortOrder: null,
        sortFn: null,
        sortDirections: [],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width : null
      },
      {
        name: 'Project Creation Date',
        sortOrder: null,
        sortFn: (a: ProjectOverview, b: ProjectOverview) => a.creationDate.toISOString().localeCompare(b.creationDate.toISOString()),
        sortDirections: ['ascend', 'descend', null],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width : null
      },
      {
        name: 'Token',
        sortOrder: null,
        sortFn: null,
        sortDirections: [],
        filterMultiple: false,
        listOfFilter: [],
        filterFn: null,
        width : null
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
    console.log('adding new porject')
  }

  onChange(value: string): void {

  }

}
