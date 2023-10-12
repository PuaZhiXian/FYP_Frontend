import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ProjectOverview} from "../../../../interface/project/project-overview";
import {ColumnItem} from "../../../../interface/table/column-item";
import {finalize} from "rxjs";
import {Router} from "@angular/router";
import {ProjectService} from "../../../../service/project/project.service";
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {IApiCollectionDetail} from "../../../../interface/api-collection/i-api-collection-detail";
import {ApiCollectionService} from "../../../../service/apiCollection/api-collection.service";
import {CommonService} from "../../../../service/common/common.service";

@Component({
  selector: 'project-api-table',
  templateUrl: './project-api-table.component.html',
  styleUrls: ['./project-api-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectApiTableComponent implements OnInit {

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private projectService: ProjectService,
              private apiCollectionService: ApiCollectionService,
              private ref: ChangeDetectorRef,
              private commonService: CommonService) {
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
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.projectData = resp;
        this.filteredProjectData = this.projectData;
      })
  }

  initApiCollection() {
    this.apiCollectionService.getAllApiCollection()
      .pipe((finalize(() => {
        this.loadingTable = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      })))
      .subscribe((resp) => {
        this.apiCollectionData = resp;
        this.filteredApiCollectionData = this.apiCollectionData;
      })
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
          sortFn: (a: ProjectOverview, b: ProjectOverview) => a.project_name.localeCompare(b.project_name),
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
          sortFn: (a: ProjectOverview, b: ProjectOverview) => a.createdAt.toISOString().localeCompare(b.createdAt.toISOString()),
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
          sortFn: (a: IApiCollectionDetail, b: IApiCollectionDetail) => (a.id - b.id),
          sortDirections: [],
          filterMultiple: false,
          listOfFilter: [],
          filterFn: null,
          width: '80px',
        },
        {
          name: 'API Collection Name',
          sortOrder: null,
          sortFn: (a: IApiCollectionDetail, b: IApiCollectionDetail) => a.api_collection_name.localeCompare(b.api_collection_name),
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
        return this.isMatch(items.project_name);
      });
    }
  }

  isMatch(str: string): boolean {
    return str.toLocaleLowerCase().includes(this.validateForm.value.searchKey.toLowerCase());
  }

  createNewProject() {
    this.router.navigate(['/', 'subscription'])
  }

  openProjectDetailPage(projectId: string) {
    this.router.navigate(['/', 'project', projectId])
  }

  subscribeNewProduct() {

  }

  copyToClipBoard(token: string) {
    this.commonService.copyToClipboard(token);
  }
}
