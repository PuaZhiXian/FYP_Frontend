import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProjectOverview} from "../../../../interface/project/project-overview";
import {ColumnItem} from "../../../../interface/table/column-item";
import {finalize} from "rxjs";
import {Router} from "@angular/router";
import {ProjectService} from "../../../../service/project/project.service";
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {IApiCollectionDetail} from "../../../../interface/api-collection/i-api-collection-detail";
import {ApiCollectionService} from "../../../../service/apiCollection/api-collection.service";
import {CommonService} from "../../../../service/common/common.service";
import {VendorService} from "../../../../service/vendor/vendor.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {AuthorizationService} from "../../../../service/authorization/authorization.service";

@Component({
  selector: 'project-api-table',
  templateUrl: './project-api-table.component.html',
  styleUrls: ['./project-api-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectApiTableComponent implements OnInit {

  isShowPassword: boolean = false;

  tokenModelVisibility: boolean = false;

  projectData: ProjectOverview[] = [];
  filteredProjectData: ProjectOverview[] = [];
  listOfColumns !: ColumnItem[];
  loadingTable: boolean = true;

  apiCollectionData: IApiCollectionDetail[] = [];
  filteredApiCollectionData: IApiCollectionDetail[] = [];

  validateForm!: UntypedFormGroup;
  showToken: boolean = false;

  get passwordValidation() {
    return this.validateForm.controls['password'].invalid && this.validateForm.controls['password'].dirty;
  }

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private projectService: ProjectService,
              private apiCollectionService: ApiCollectionService,
              private ref: ChangeDetectorRef,
              private commonService: CommonService,
              private vendorService: VendorService,
              private message: NzMessageService,
              private authorizationService: AuthorizationService) {
  }

  ngOnInit(): void {
    this.initTable();
    this.initProject();
    this.initForm();
  }

  initForm() {
    this.validateForm = this.fb.group({
      password: [null, []]
    })
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
    this.listOfColumns = [
      {
        name: 'No',
        sortOrder: null,
        sortFn: null,
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
        sortFn: (a: ProjectOverview, b: ProjectOverview) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
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

  searching(searchKey: string) {
    if (!searchKey || searchKey.length == 0) {
      this.filteredProjectData = this.projectData;
    } else {
      this.filteredProjectData = this.projectData.filter((items) => {
        return this.isMatch(items.project_name, searchKey);
      });
    }
  }

  isMatch(sentence: string, word: string): boolean {
    return sentence.toLocaleLowerCase().includes(word.toLowerCase());
  }

  createNewProject() {
    this.router.navigate(['/', 'subscription'])
  }

  openProjectDetailPage(projectId: string) {
    this.router.navigate(['/', 'project', projectId])
  }

  copyToClipBoard(token: string) {
    this.commonService.copyToClipboard(token);
  }

  retrieveToken(projectOverview: ProjectOverview) {
    if (this.validateForm.value.password) {
      this.vendorService.getVendorProfile()
        .pipe((finalize(() => {
          this.validateForm.reset();
          this.ref.markForCheck();
          this.ref.detectChanges();
        })))
        .subscribe((resp) => {
          let email = resp.email;
          this.authorizationService.login({
            email: email,
            password: this.validateForm.value.password,
            organisation: ''
          }).subscribe((resp) => {
            if (resp.message) {
              projectOverview.view = true;
              this.showToken = true;
              this.ref.markForCheck();
              this.ref.detectChanges();
            } else if (resp.error) {
              this.message.error(resp.error)
              this.showToken = false;
            }
          })
        })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  handleCloseModel(projectOverview: ProjectOverview) {
    this.tokenModelVisibility = false;
    projectOverview.view = false;
    this.showToken = false;
    this.isShowPassword = false;
    this.initForm();
  }
}
