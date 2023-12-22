import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {HeaderComponent} from "../../../header/page/header/header.component";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {VendorService} from "../../../../service/vendor/vendor.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzModalService} from "ng-zorro-antd/modal";
import {NzUploadChangeParam, NzUploadFile} from "ng-zorro-antd/upload";
import {finalize, Observable} from "rxjs";
import {IAdminApiCategory} from "../../../../interface/api-collection/i-admin-api-category";
import {ApiCollectionService} from "../../../../service/apiCollection/api-collection.service";
import {PreviewApiCollectionComponent} from "../../components/preview-api-collection/preview-api-collection.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-api-collection',
  templateUrl: './api-collection.component.html',
  styleUrls: ['./api-collection.component.scss']
})
export class ApiCollectionComponent implements OnInit {

  @ViewChild('PreviewApiCollectionComponentRef') previewApiCollectionComponentRef!: PreviewApiCollectionComponent
  createNewCategoryForm!: UntypedFormGroup;
  createNewCollectionForm!: UntypedFormGroup;
  apiCategoryList: IAdminApiCategory[] = [];
  filteredApiCategoryList: IAdminApiCategory[] = [];
  randomColorsArray: string[] = [
    'bg-red-500',
    'bg-orange-500',
    'bg-amber-500',
    'bg-lime-500',
    'bg-green-500',
    'bg-teal-500',
    'bg-cyan-500',
    'bg-pink-500',
    'bg-rose-500',
    'bg-violet-500',
  ];
  emptyIconUrl: string = 'data:image/png;base64,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';
  createNewCollectionModalVisibility: boolean = false;
  createNewCategoryModalVisibility: boolean = false;

  filterCategory: number[] = [];
  loading: boolean = true;

  alphabetArray: string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  selectedAlphabet: string = 'A';
  searchKey: string = '';
  createCategorySubmittedTry: boolean = false;
  createCollectionSubmittedTry: boolean = false;
  currentFile: NzUploadFile[] = [];

  previewModalVisibility: boolean = false;
  previewApiCollectionId!: string;
  fileList: NzUploadFile[] = [];
  file!: File;

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private ref: ChangeDetectorRef,
              private vendorService: VendorService,
              private message: NzMessageService,
              private modal: NzModalService,
              private apiCollectionService: ApiCollectionService,
  ) {
  }

  ngOnInit(): void {
    HeaderComponent.headerIndicator = 'api';
    this.initApiCategoryList();
  }

  beforeUpload = (file: NzUploadFile, fileList: NzUploadFile[]): boolean | Observable<boolean> => {
    // Perform any checks or modifications here before uploading
    if (this.currentFile.length > 0) {
      return false;
    }
    this.fileList = this.fileList.concat(file);
    return false;
  }

  handleChange({file, fileList}: NzUploadChangeParam): void {
    this.currentFile = fileList;
    const status = file.status;
    if (status !== 'uploading') {
      // console.log(file, fileList);
    }
    if (status === 'done') {
      this.message.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.message.error(`${file.name} file upload failed.`);
    }
  }

  initApiCategoryList() {
    this.apiCollectionService.getAPICategoryList(this.selectedAlphabet)
      .pipe(finalize(() => {
        this.loading = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.apiCategoryList = resp;
        this.filteredApiCategoryList = resp;
      })
  }

  initCreateNewCategoryForm() {
    this.createNewCategoryForm = this.fb.group({
      category_name: [null, [Validators.required]],
      image_url: [null, [Validators.required]],
    });
  }

  initCreateNewCollectionForm() {
    this.createNewCollectionForm = this.fb.group({
      api_collection_name: [null, [Validators.required]],
      short_description: [null, [Validators.required]],
      long_description: [null, [Validators.required]],
      api_category_id: [null, [Validators.required]],
    });
  }

  searching(searchKey: string) {
    this.searchKey = searchKey;
    if (!searchKey || searchKey.length == 0) {
      this.filteredApiCategoryList = this.apiCategoryList;
    } else {
      this.filteredApiCategoryList = [];
      this.apiCategoryList.forEach(items => {
        let temp = {...items};
        temp.api_collections = items.api_collections.filter((api) => {
          return this.isMatch(api.api_collection_name, searchKey);
        })
        this.filteredApiCategoryList.push(temp);
      })
    }

    if (this.filterCategory.length > 0) {
      this.filteredApiCategoryList = this.filteredApiCategoryList.filter((items) => {
        return this.filterCategory.indexOf(items.id) !== -1;
      })
    }
  }

  isMatch(sentence: string, word: string): boolean {
    return sentence.toLocaleLowerCase().includes(word.toLowerCase());
  }

  addFilter(categoryId: number) {
    this.filterCategory.push(categoryId);
    this.searching(this.searchKey);
  }

  removeFilter(categoryId: number) {
    this.filterCategory = this.filterCategory.filter((item) => {
      return item !== categoryId;
    })
    this.searching(this.searchKey);
  }

  openCreateNewCategoryModal() {
    this.initCreateNewCategoryForm();
    this.createNewCategoryModalVisibility = true;
  }

  closeCreateNewCategoryModal() {
    this.createNewCategoryModalVisibility = false;
  }

  createNewApiCategory() {
    this.createCategorySubmittedTry = true;
    if (this.createNewCategoryForm.valid) {
      this.apiCollectionService.createNewApiCategory(this.createNewCategoryForm.value)
        .subscribe((resp) => {
          if (resp.message) {
            this.message.success(resp.message);
            this.closeCreateNewCategoryModal();
          } else {
            this.message.error(resp.error || '');
          }
        })
    } else {
      Object.values(this.createNewCategoryForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  openCreateNewCollectionModal(id: number) {
    this.initCreateNewCollectionForm();
    this.createNewCollectionForm.patchValue({api_category_id: id})
    this.createNewCollectionModalVisibility = true;
  }

  closeCreateNewCollectionModal() {
    this.createNewCollectionModalVisibility = false;
  }

  createNewCollection() {
    this.createCollectionSubmittedTry = true;
    this.closeCreateNewCollectionModal();
    if (this.fileList.length > 0) {
      //TODO: --> 2nd batch change it to upload file instead, currently is read content from file and send to backend
      let fileContent: string = '';
      const reader = new FileReader();
      // Define the onload event handler
      reader.onload = (loadEvent) => {
        fileContent = reader.result as string
        this.apiCollectionService.uploadAPICollection(fileContent)
          .subscribe((resp) => {
            if (resp.message) {
              this.previewApiCollectionId = resp.message;
              this.previewModalVisibility = true;
              this.ref.markForCheck();
              this.ref.detectChanges();
              this.previewApiCollectionComponentRef.initPreview();
            } else {
              this.message.error(resp.error || '')
            }
          })
      };
      reader.readAsText(this.fileList[0] as any);
    } else {
      this.message.error('At least 1 file needed')
    }
  }

  changeByAlphabet(alphabet: string) {
    this.selectedAlphabet = alphabet;
    this.loading = true;
    this.initApiCategoryList();
  }

  confirmDeleteCollection(apiCollectionId: number, apiCollectionName: string) {
    this.modal.confirm({
      nzTitle: 'Are you sure delete "' + apiCollectionName + '" ?',
      nzContent: '<b style="color: red;">This action is irreversible</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteCollection(apiCollectionId),
      nzCancelText: 'No'
    });
  }

  deleteCollection(apiCollectionId: number) {
    this.apiCollectionService.deleteCollection(apiCollectionId)
      .subscribe((resp) => {
        if (resp.message) {
          this.message.success(resp.message)
          this.initApiCategoryList();
        } else {
          this.message.error(resp.error || "")
        }
      })
  }

  confirmDeleteCategory(categoryId: number, categoryName: string) {
    this.modal.confirm({
      nzTitle: 'Are you sure delete "' + categoryName + '" ?',
      nzContent: '<b style="color: red;">This action is irreversible</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteCategory(categoryId),
      nzCancelText: 'No'
    });
  }

  deleteCategory(apiCollectionId: number) {
    this.apiCollectionService.deleteCategory(apiCollectionId)
      .subscribe((resp) => {
        if (resp.message) {
          this.message.success(resp.message)
          this.initApiCategoryList();
        } else {
          this.message.error(resp.error || "")
        }
      })
  }

}
