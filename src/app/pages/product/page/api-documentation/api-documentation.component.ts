import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IApiCategory} from "../../../../interface/api-collection/i-api-category";
import {NzConfigService} from "ng-zorro-antd/core/config";
import {IApiDocumentationObject} from "../../../../interface/api-collection/i-api-documentation-object";
import {IHttpStatusCodeSummary} from "../../../../interface/api-collection/i-http-status-code-summary";
import {ISelect} from "../../../../interface/common/i-select";
import {ClientConstant} from "../../../../constant/temp/temp-constant";
import {ApiCollectionService} from "../../../../service/apiCollection/api-collection.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-api-documentation',
  templateUrl: './api-documentation.component.html',
  styleUrls: ['./api-documentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiDocumentationComponent implements OnInit {


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

  @ViewChild('content') content!: ElementRef;

  constructor(private nzConfigService: NzConfigService,
              private ref: ChangeDetectorRef,
              private apiCollectionService: ApiCollectionService) {
  }

  ngOnInit(): void {
    this.initProgrammingLanguageOptions();
    this.initDocumentation();
    this.initErrorSection();
    this.initGeneralDocumentation();
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
    this.programmingLanguageOptions = [
      {
        label: 'Ruby',
        value: 'ruby',
        options: "https://e7.pngegg.com/pngimages/980/847/png-clipart-ruby-on-rails-logo-programming-language-rubygems-ruby-angle-design-thumbnail.png"
      },
      {
        label: 'Python',
        value: 'python',
        options: "https://thumbnail.imgbin.com/1/17/21/imgbin-python-javascript-logo-soloist-My4ZUgqAGSkQQ5qtiN1TUYzV5_t.jpg"
      },
      {
        label: 'PHP',
        value: 'php',
        options: 'https://w7.pngwing.com/pngs/751/3/png-transparent-logo-php-html-others-text-trademark-logo-thumbnail.png'
      },
      {
        label: 'Java',
        value: 'java',
        options: 'https://e7.pngegg.com/pngimages/356/251/png-clipart-java-development-kit-java-architecture-for-xml-binding-java-runtime-environment-javafx-others-miscellaneous-text.png'
      },
      {
        label: 'Node.js',
        value: 'javascript',
        options: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmQvw0Jc4eiSQcQD_8qjjpiN1Lm1YugzX6A&usqp=CAU'
      },
      {
        label: 'Go',
        value: 'go',
        options: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png'
      },
      {
        label: 'HTTP',
        value: 'http',
        options: 'data:image/png;base64,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'
      }
    ]
    this.programmingLanguage = this.programmingLanguageOptions[0].value;
  }

  initDocumentation() {
    this.apiCollectionService.getApiDocumentation()
      .pipe(finalize(() => {
        this.loadingDocumentation = false;
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
    this.updatingCodeEditor = true;
    this.ref.detectChanges();
    this.ref.markForCheck();
    this.programmingLanguage = programmingLanguage;
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

}
