import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IApiDocumentationV2} from "../../../../interface/api-collection/i-api-documentation-v2";
import {NzConfigService} from "ng-zorro-antd/core/config";
import {IApiDocumentationObject} from "../../../../interface/api-collection/i-api-documentation-object";
import {IHttpStatusCodeSummary} from "../../../../interface/api-collection/i-http-status-code-summary";

@Component({
  selector: 'app-api-documentation',
  templateUrl: './api-documentation.component.html',
  styleUrls: ['./api-documentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiDocumentationComponent implements OnInit {


  general: string[] = ["Introduction", "Authentication", "Errors"]
  documentation: IApiDocumentationV2[] = [];
  activatedHeading: string = '';
  code = 'require \'stripe\'\n' +
    'Stripe.api_key = \'sk_test_4eC39HqLyjWDarjtT1zdp7dc\'';
  authorizationCode = 'require \'stripe\'\n' +
    'Stripe.api_key = \'sk_test_4eC39HqLyjWDarjtT1zdp7dc\'';

  programmingLanguage: string = 'ruby';
  loadingCodeEditor: boolean = true;
  programmingLanguageOptions: string[] = ['ruby', 'python', 'php', 'java', 'javascript', 'go', 'net'];
  errorObject: IApiDocumentationObject[] = [];
  httpStatusCodeSummaries: IHttpStatusCodeSummary[] = [];
  errorTypes: IHttpStatusCodeSummary[] = [];

  constructor(private nzConfigService: NzConfigService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.initDocumentation();
    this.initErrorSection();
  }

  initDocumentation() {
    this.documentation = [
      {
        name: "CORE RESOURCE",
        items: [
          {
            name: "Balance",
            anchor: [
              {name: "The balance object"},
              {name: "Retrieve balance"}
            ]
          },
          {
            name: "Balance Transaction",
            anchor: [
              {name: "The balance object"},
              {name: "Retrieve balance"}
            ]
          },
          {
            name: "Charges",
            anchor: [
              {name: "The balance object"},
              {name: "Retrieve balance"}
            ]
          },
          {
            name: "Customers",
            anchor: [
              {name: "The balance object"},
              {name: "Retrieve balance"}
            ]
          },
          {
            name: "Disputes",
            anchor: [
              {name: "The balance object"},
              {name: "Retrieve balance"}
            ]
          },
          {
            name: "Events",
            anchor: [
              {name: "The balance object"},
              {name: "Retrieve balance"}
            ]
          },
          {
            name: "Files",
            anchor: [
              {name: "The balance object"},
              {name: "Retrieve balance"}
            ]
          },
          {
            name: "File Links",
            anchor: [
              {name: "The balance object"},
              {name: "Retrieve balance"}
            ]
          },
          {
            name: "Mandates",
            anchor: [
              {name: "The balance object"},
              {name: "Retrieve balance"}
            ]
          },
          {
            name: "PaymentIntents",
            anchor: [
              {name: "The balance object"},
              {name: "Retrieve balance"}
            ]
          },
          {
            name: "SetupIntents",
            anchor: [
              {name: "The balance object"},
              {name: "Retrieve balance"}
            ]
          },
          {
            name: "SetupAttempts",
            anchor: [
              {name: "The balance object"},
              {name: "Retrieve balance"}
            ]
          },
          {
            name: "Payouts",
            anchor: [
              {name: "The balance object"},
              {name: "Retrieve balance"}
            ]
          },
          {
            name: "Refunds",
            anchor: [
              {name: "The balance object"},
              {name: "Retrieve balance"}
            ]
          },
          {
            name: "Tokens",
            anchor: [
              {name: "The balance object"},
              {name: "Retrieve balance"}
            ]
          }
        ]
      }
    ]
  }

  initErrorSection() {
    this.errorObject = [

      {
        name: "type",
        type: "string",
        description: "The type of error returned. One of api_error, card_error, idempotency_error, or invalid_request_error"
      },
      {
        name: "code",
        type: "string",
        description: "For some errors that could be handled programmatically, a short string indicating the error code reported."
      },
      {
        name: "decline_code",
        type: "string",
        description: "For card errors resulting from a card issuer decline, a short string indicating the card issuer’s reason for the decline if they provide one."
      },
      {
        name: "payment_intent",
        type: "hash",
        description: "The PaymentIntent object for errors returned on a request involving a PaymentIntent.",
        child: [
          {
            name: "payment_intent.id",
            type: "string",
            description: "Unique identifier for the object."
          },
          {
            name: "payment_intent.amount",
            type: "integer",
            description: 'Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the smallest currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or equivalent in charge currency. The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).'
          },
          {
            name: "payment_intent.capture_method",
            type: "enum",
            description: "Controls when the funds will be captured from the customer’s account.",
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
            name: "payment_intent.user_detail",
            type: "integer",
            description: 'Testing User detail',
            child: [
              {
                name: "payment_intent.user_detail.name",
                type: "string",
                description: 'User name',
              },
              {
                name: "payment_intent.user_detail.age",
                type: "integer",
                description: 'User age',
              },
              {
                name: "payment_intent.user_detail.gender",
                type: "string",
                description: 'User gender',
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
    this.programmingLanguage = programmingLanguage;
    this.ref.detectChanges();
    this.ref.markForCheck();
  }

  codeEditor() {
    const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: 'vs-dark',
        readOnly: true,
        padding: {
          bottom: 10,
          top: 10
        },
        scrollbar: {
          vertical: "hidden",
          handleMouseWheel: false,
        },
        overviewRulerLanes: 0,
        overviewRulerBorder: false,
        minimap: {enabled: false},
      }
    });
  }
}
