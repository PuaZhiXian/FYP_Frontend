import {Component, Input, OnInit} from '@angular/core';
import {ProjectOverview} from "../../../../interface/project/project-overview";
import {ColumnItem} from "../../../../interface/table/column-item";
import {finalize} from "rxjs";
import {Router} from "@angular/router";
import {ProjectService} from "../../../../service/project/project.service";
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {IApiCollectionDetail} from "../../../../interface/api-collection/i-api-collection-detail";

@Component({
  selector: 'project-api-table',
  templateUrl: './project-api-table.component.html',
  styleUrls: ['./project-api-table.component.scss']
})
export class ProjectApiTableComponent implements OnInit {

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private projectService: ProjectService) {
  }

  @Input() isProject: boolean = true;

  projectData: ProjectOverview[] = [];
  filteredProjectData: ProjectOverview[] = [];
  listOfColumns !: ColumnItem[];
  loadingTable: boolean = true;

  apiCollectionData: IApiCollectionDetail[] = [];
  filteredApiCollectionData: IApiCollectionDetail[] = [];

  validateForm!: UntypedFormGroup;

  ngOnInit(): void {
    this.initTable();
    if (this.isProject) {
      this.initProject();
      this.initForm();
      this.changeHandler();
    } else {
      this.initApiCollection();
    }
  }

  initProject() {
    this.projectService.getAllProject()
      .pipe(finalize(() => {
        this.loadingTable = false;
      }))
      .subscribe((resp) => {
        this.projectData = [
          {
            name: 'Project Copy 1',
            description: 'Description 1 - Copy',
            id: '002',
            creationDate: new Date(2023, 3, 9),
            token: 'token1as8d7f',
          },
          {
            name: 'Project Copy 2',
            description: 'Description 1 - Duplicate',
            id: '003',
            creationDate: new Date(2023, 5, 9),
            token: 'token8h1n2u3m',
          },
          {
            name: 'Project Replica',
            description: 'Copy of Description 1',
            id: '004',
            creationDate: new Date(2023, 3, 9),
            token: 'tokenkju89732',
          },
          {
            name: 'Duplicated Project',
            description: 'Description 1 Copy',
            id: '005',
            creationDate: new Date(2023, 10, 12),
            token: 'tokenb2m4n6g8',
          },
          {
            name: 'Project Iteration',
            description: 'Description 1 - Iteration',
            id: '006',
            creationDate: new Date(2023, 7, 9),
            token: 'token1j2k3l4',
          },
          {
            name: 'Project Redo',
            description: 'Redo of Description 1',
            id: '007',
            creationDate: new Date(2023, 5, 9),
            token: 'token4d7s6a1',
          },
          {
            name: 'Project Clone',
            description: 'Description 1 Cloned',
            id: '008',
            creationDate: new Date(2023, 10, 23),
            token: 'token1r2h3i4',
          },
          {
            name: 'Project Duplicate',
            description: 'Duplicate of Description 1',
            id: '009',
            creationDate: new Date(2023, 1, 9),
            token: 'token9v8b7n6',
          },
          {
            name: 'Project Reiteration',
            description: 'Description 1 - Reiteration',
            id: '010',
            creationDate: new Date(2023, 10, 9),
            token: 'token5f4d3s2',
          },
          {
            name: 'Project Reduplication',
            description: 'Reduplication of Description 1',
            id: '011',
            creationDate: new Date(2023, 10, 10),
            token: 'token2d3a4s5',
          },
          {
            name: 'Project Copy 2',
            description: 'Description 1 - Duplicate',
            id: '090',
            creationDate: new Date(2023, 5, 9),
            token: 'token8h1n2u3m',
          },
        ];
        this.filteredProjectData = this.projectData;
      })
  }

  initApiCollection() {
    this.loadingTable = false;
    this.apiCollectionData = [
      {
        no: '001',
        apiCollectionName: 'Api Collection 1',
        status: 'approved',
      },
      {
        no: '001',
        apiCollectionName: 'Api Collection 1',
        status: 'approved',
      }
    ];
    this.filteredApiCollectionData = this.apiCollectionData;
  }

  initTable() {
    if (this.isProject) {
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
    } else {
      this.listOfColumns = [
        {
          name: 'No',
          sortOrder: null,
          sortFn: (a: IApiCollectionDetail, b: IApiCollectionDetail) => a.no.localeCompare(b.no),
          sortDirections: [],
          filterMultiple: false,
          listOfFilter: [],
          filterFn: null,
          width: '80px',
        },
        {
          name: 'API Collection Name',
          sortOrder: null,
          sortFn: (a: IApiCollectionDetail, b: IApiCollectionDetail) => a.apiCollectionName.localeCompare(b.apiCollectionName),
          sortDirections: ['ascend', 'descend', null],
          filterMultiple: false,
          listOfFilter: [],
          filterFn: null,
          width: '800px'
        },
        {
          name: 'Status',
          sortOrder: null,
          sortFn: null,
          sortDirections: [],
          filterMultiple: false,
          listOfFilter: [],
          filterFn: null,
          width: null
        }
      ]
    }
  }

  initForm() {
    this.validateForm = this.fb.group({
      searchKey: [null, []]
    });
  }

  changeHandler() {
    this.validateForm.valueChanges.subscribe((value => {
      this.searching();
    }));
  }

  searching() {
    if (!this.validateForm.value.searchKey || this.validateForm.value.searchKey.length == 0) {
      this.filteredProjectData = this.projectData;
    } else {
      this.filteredProjectData = this.projectData.filter((items) => {
        return this.isMatch(items.name);
      });
    }
  }

  isMatch(str: string): boolean {
    return str.toLocaleLowerCase().includes(this.validateForm.value.searchKey.toLowerCase());
  }

  createNewProject() {
    this.router.navigate(['/', 'subcription'])
  }

  openProjectDetailPage() {
    console.log('enter project');
  }

  subscribeNewProject() {

  }
}
