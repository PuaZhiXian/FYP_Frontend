import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef, OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {IApiCategory} from "../../../../interface/api-collection/i-api-category";
import {NzConfigService} from "ng-zorro-antd/core/config";
import {IApiDocumentationObject} from "../../../../interface/api-collection/i-api-documentation-object";
import {IHttpStatusCodeSummary} from "../../../../interface/api-collection/i-http-status-code-summary";
import {ISelect} from "../../../../interface/common/i-select";
import {ClientConstant} from "../../../../constant/temp/temp-constant";
import {ApiCollectionService} from "../../../../service/apiCollection/api-collection.service";
import {NzSelectComponent} from "ng-zorro-antd/select";
import {finalize} from "rxjs";
import {HeaderComponent} from "../../../header/page/header/header.component";

@Component({
  selector: 'app-api-documentation',
  templateUrl: './api-documentation.component.html',
  styleUrls: ['./api-documentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiDocumentationComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('smallSelect', {read: NzSelectComponent}) mySelect!: NzSelectComponent;

  general: string[] = ["Introduction", "Authentication", "Errors"]
  documentation: IApiCategory[] = [];
  activatedHeading: string = '';
  code: string = '';
  authorizationCode: string = '';

  programmingLanguage: string = '';
  loadingCodeEditor: boolean = true;
  programmingLanguageOptions: ISelect[] = [];
  errorObject: IApiDocumentationObject[] = [];
  httpStatusCodeSummaries: IHttpStatusCodeSummary[] = [];
  errorTypes: IHttpStatusCodeSummary[] = [];
  updatingCodeEditor: boolean = true;

  loadingDocumentation: boolean = true;
  loadingProgrammingOption: boolean = true;
  switchingLang: boolean = false;

  @ViewChild('content') content!: ElementRef;

  constructor(private nzConfigService: NzConfigService,
              private ref: ChangeDetectorRef,
              private apiCollectionService: ApiCollectionService) {
  }

  ngOnDestroy(): void {
    HeaderComponent.headerIndicator = '';
  }

  ngOnInit(): void {
    HeaderComponent.headerIndicator = 'product';
    this.initProgrammingLanguageOptions();
    this.initErrorSection();
  }

  ngAfterViewInit(): void {
    this._setWidth();
  }

  initGeneralDocumentation() {
    switch (this.programmingLanguage) {
      case 'ruby':
        this.code = ClientConstant.authorizationCode_RUBY;
        this.authorizationCode = ClientConstant.authorizationCode_RUBY;
        break;
      case 'python':
        this.code = ClientConstant.authorizationCode_PYTHON;
        this.authorizationCode = ClientConstant.authorizationCode_PYTHON;
        break;
      case 'php':
        this.code = ClientConstant.authorizationCode_PHP;
        this.authorizationCode = ClientConstant.authorizationCode_PHP;
        break;
      case 'java':
        this.code = ClientConstant.authorizationCode_JAVA;
        this.authorizationCode = ClientConstant.authorizationCode_JAVA;
        break;
      case 'javascript':
        this.code = ClientConstant.authorizationCode_NODE;
        this.authorizationCode = ClientConstant.authorizationCode_NODE;
        break;
      case 'go':
        this.code = ClientConstant.authorizationCode_GO;
        this.authorizationCode = ClientConstant.authorizationCode_GO;
        break;
      case 'http':
        this.code = ClientConstant.authorizationCode_HTTP;
        this.authorizationCode = ClientConstant.authorizationCode_HTTP;
        break;
    }
    this.updatingCodeEditor = false;
  }

  initProgrammingLanguageOptions() {
    this.apiCollectionService.getLanguageOption()
      .pipe((finalize(() => {
        this.loadingProgrammingOption = false;
        this.ref.markForCheck();
        this.ref.detectChanges();
        this.initDocumentation();
        this.initGeneralDocumentation()
      })))
      .subscribe((resp) => {
        this.programmingLanguageOptions = resp;
        this.programmingLanguage = this.programmingLanguageOptions[0].value;
      })
  }

  initDocumentation() {
    this.apiCollectionService.getApiDocumentation(this.programmingLanguage)
      .pipe(finalize(() => {
        this.loadingDocumentation = false;
        this.switchingLang = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.documentation = resp;
      })
  }

  initErrorSection() {
    this.apiCollectionService.getErrorObject()
      .pipe(finalize(() => {
      }))
      .subscribe((resp) => {
        this.errorObject = resp;
      })

    this.apiCollectionService.getHttpStatusCode()
      .pipe(finalize(() => {
      }))
      .subscribe((resp) => {
        this.httpStatusCodeSummaries = resp;
      })

    this.apiCollectionService.getErrorType()
      .pipe(finalize(() => {
      }))
      .subscribe((resp) => {
        this.errorTypes = resp;
      })
  }

  switchLanguage(programmingLanguage: string) {
    this.switchingLang = true;
    this.updatingCodeEditor = true;
    this.ref.detectChanges();
    this.ref.markForCheck();
    this.programmingLanguage = programmingLanguage;
    this.initDocumentation();
    this.initGeneralDocumentation();
    this.ref.detectChanges();
    this.ref.markForCheck();
  }

  scrollToSection(sectionId: string) {
    const element = this.content.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  _setWidth(): void {
    if (this.mySelect) {
      this.mySelect.cdkConnectedOverlay.width = 200;
      this.mySelect.updateCdkConnectedOverlayStatus();
    }
  }

}
