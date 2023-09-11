import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IApiDocumentationV2} from "../../../../interface/api-collection/i-api-documentation-v2";
import {NzConfigService} from "ng-zorro-antd/core/config";

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

  constructor(private nzConfigService: NzConfigService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.initDocumentation();
    // this.codeEditor();
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
