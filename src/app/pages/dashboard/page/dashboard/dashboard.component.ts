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
        this.projects = resp;
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
