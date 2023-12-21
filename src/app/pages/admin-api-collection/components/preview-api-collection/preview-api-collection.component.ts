import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import hljs from "highlight.js";
import {ISelect} from "../../../../interface/common/i-select";
import {IApiCategory} from "../../../../interface/api-collection/i-api-category";
import {Temp} from "./temp";
import {finalize} from "rxjs";
import {NzConfigService} from "ng-zorro-antd/core/config";
import {ApiCollectionService} from "../../../../service/apiCollection/api-collection.service";

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
              private apiCollectionService: ApiCollectionService) {
  }

  ngOnInit(): void {
    this.initProgrammingLanguageOptions()
  }

  initPreview() {
    //TODO - call preview collection by id
    this.pageNumber = 0;
    this.singleCategory = Temp.singleCategory
    console.log(this.apiCollectionId)
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
    this.previewModalVisibility = false;
    this.previewModalVisibilityChange.emit(false);
  }

  openPreviewModal() {
    this.previewModalVisibility = true;
  }

  confirmCreateCollection() {
    //TODO -- api to confirm collection create -- unpublish to publish
    console.log('TODO -- api to confirm collection create -- unpublish to publish')
    this.closePreviewModal();
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

  init() {
    hljs.highlightAll();
  }
}
