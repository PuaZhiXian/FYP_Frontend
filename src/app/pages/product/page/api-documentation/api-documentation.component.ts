import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
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

@Component({
  selector: 'app-api-documentation',
  templateUrl: './api-documentation.component.html',
  styleUrls: ['./api-documentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiDocumentationComponent implements OnInit, AfterViewInit {
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

  ngOnInit(): void {
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
    this.errorObject = [

      {
        attr_name: "type",
        attr_type: "string",
        attr_description: "The type of error returned. One of api_error, card_error, idempotency_error, or invalid_request_error"
      },
      {
        attr_name: "code",
        attr_type: "string",
        attr_description: "For some errors that could be handled programmatically, a short string indicating the error code reported."
      },
      {
        attr_name: "decline_code",
        attr_type: "string",
        attr_description: "For card errors resulting from a card issuer decline, a short string indicating the card issuer’s reason for the decline if they provide one."
      },
      {
        attr_name: "payment_intent",
        attr_type: "hash",
        attr_description: "The PaymentIntent object for errors returned on a request involving a PaymentIntent.",
        child_attr_ids: [
          {
            attr_name: "payment_intent.id",
            attr_type: "string",
            attr_description: "Unique identifier for the object."
          },
          {
            attr_name: "payment_intent.amount",
            attr_type: "integer",
            attr_description: 'Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the smallest currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or equivalent in charge currency. The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).'
          },
          {
            attr_name: "payment_intent.capture_method",
            attr_type: "enum",
            attr_description: "Controls when the funds will be captured from the customer’s account.",
            enum: [
              {
                name: "automatic (Default)",
                description: "Stripe automatically captures funds when the customer authorizes the payment."
              },
              {
                name: "automatic_async",
                description: "Stripe asynchronously captures funds when the customer authorizes the payment. Recommended over capture_method=automatic due to improved latency, but may require additional integration changes."
              },
              {
                name: "manual",
                description: "Place a hold on the funds when the customer authorizes the payment, but don’t capture the funds until later. (Not all payment methods support this.)"
              }
            ]
          },
          {
            attr_name: "payment_intent.user_detail",
            attr_type: "integer",
            attr_description: 'Testing User detail',
            child_attr_ids: [
              {
                attr_name: "payment_intent.user_detail.name",
                attr_type: "string",
                attr_description: 'User name',
              },
              {
                attr_name: "payment_intent.user_detail.age",
                attr_type: "integer",
                attr_description: 'User age',
              },
              {
                attr_name: "payment_intent.user_detail.gender",
                attr_type: "string",
                attr_description: 'User gender',
              }
            ]

          }
        ]
      }
    ]
    this.httpStatusCodeSummaries = [
      {
        code: "200 - OK",
        description: "Everything worked as expected."
      },
      {
        code: "400 - Bad Request",
        description: "The request was unacceptable, often due to missing a required parameter."
      },
      {
        code: "401 - Unauthorized",
        description: "No valid API key provided."
      },
      {
        code: "402 - Request Failed",
        description: "The parameters were valid but the request failed."
      },
      {
        code: "403 - Forbidden",
        description: "The API key doesn't have permissions to perform the request."
      },
      {
        code: "404 - Not Found",
        description: "The requested resource doesn't exist."
      },
      {
        code: "409 - Conflict",
        description: "The request conflicts with another request (perhaps due to using the same idempotent key)."
      },
      {
        code: "429 - Too Many Requests",
        description: "Too many requests hit the API too quickly. We recommend an exponential backoff of your requests."
      },
      {
        code: "500, 502, 503, 504 - Server Errors",
        description: "Something went wrong on Stripe's end. (These are rare.)"
      }
    ]
    this.errorTypes = [
      {
        code: "api_error",
        description: "API errors cover any other type of problem (e.g., a temporary problem with Stripe's servers), and are extremely uncommon."
      },
      {
        code: "card_error",
        description: "Card errors are the most common type of error you should expect to handle. They result when the user enters a card that can't be charged for some reason."
      },
      {
        code: "idempotency_error",
        description: "Idempotency errors occur when an Idempotency-Key is re-used on a request that does not match the first request's API endpoint and parameters."
      },
      {
        code: "invalid_request_error",
        description: "Invalid request errors arise when your request has invalid parameters."
      }
    ]
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
