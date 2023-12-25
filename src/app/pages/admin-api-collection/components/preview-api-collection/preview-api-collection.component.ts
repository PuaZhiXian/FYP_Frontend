import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import hljs from "highlight.js";
import {ISelect} from "../../../../interface/common/i-select";
import {IApiCategory} from "../../../../interface/api-collection/i-api-category";
import {Temp} from "./temp";
import {finalize} from "rxjs";
import {NzConfigService} from "ng-zorro-antd/core/config";
import {ApiCollectionService} from "../../../../service/apiCollection/api-collection.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'preview-api-collection',
  templateUrl: './preview-api-collection.component.html',
  styleUrls: ['./preview-api-collection.component.scss']
})
export class PreviewApiCollectionComponent implements OnInit {


  @Input() previewModalVisibility: boolean = false;
  @Output() previewModalVisibilityChange = new EventEmitter<boolean>();
  @Input() apiCollectionId !: string;
  pageNumber: number = 0;

  singleCategory: IApiCategory = Temp.singleCategory;
  programmingLanguageOptions: ISelect[] = [];
  programmingLanguage: string = '';

  switchingLang = false;
  loadingProgrammingOption: boolean = true;

  constructor(private nzConfigService: NzConfigService,
              private ref: ChangeDetectorRef,
              private apiCollectionService: ApiCollectionService,
              private modal: NzModalService,
              private message: NzMessageService) {
  }

  ngOnInit(): void {
    this.initProgrammingLanguageOptions()
  }

  initPreview() {
    //TODO - call preview collection by id
    console.log(this.apiCollectionId)
    this.pageNumber = 0;
    this.singleCategory = Temp.singleCategory
    this.apiCollectionService.getSingleAPICollection(this.apiCollectionId)
      .subscribe((resp) => {
        this.singleCategory = resp
      })
  }

  initProgrammingLanguageOptions() {
    this.apiCollectionService.getLanguageOption()
      .pipe((finalize(() => {
        this.loadingProgrammingOption = false;
        this.ref.markForCheck();
        this.ref.detectChanges();
      })))
      .subscribe((resp) => {
        this.programmingLanguageOptions = resp;
        this.programmingLanguage = this.programmingLanguageOptions[0].value;
      })
  }

  closePreviewModal() {

    this.modal.confirm({
      nzTitle: 'Are you sure quit create api collection ?',
      nzContent: '<b style="color: red;">This action is make all collection deleted</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.apiCollectionService.deleteCollection(Number(this.apiCollectionId))
          .subscribe((resp) => {
            if (resp.message) {
              this.previewModalVisibility = false;
              this.previewModalVisibilityChange.emit(false);
            } else {
              this.message.error(resp.error || "")
            }
          })
        //TODO call delete unpublish api collection
      },
      nzCancelText: 'No'
    });
  }

  openPreviewModal() {
    this.previewModalVisibility = true;
  }

  confirmCreateCollection() {
    //TODO -- api to confirm collection create -- unpublish to publish
    this.apiCollectionService.publishAPICollection(this.apiCollectionId)
      .subscribe((resp) => {
        if (resp.message) {
          this.message.success(resp.message)
          this.previewModalVisibility = false;
          this.previewModalVisibilityChange.emit(false);
        } else {
          this.message.error(resp.error || '')
        }
      })
  }

  switchLanguage(programmingLanguage: string) {
    this.initPreview()
    /*this.switchingLang = true;
    this.updatingCodeEditor = true;
    this.ref.detectChanges();
    this.ref.markForCheck();
    this.programmingLanguage = programmingLanguage;
    this.initDocumentation();
    this.initGeneralDocumentation();
    this.ref.detectChanges();
    this.ref.markForCheck();*/
  }

  initHighlightJS() {
    hljs.highlightAll();
  }
}
