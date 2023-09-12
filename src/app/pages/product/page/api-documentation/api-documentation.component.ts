import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IApiCategory} from "../../../../interface/api-collection/i-api-category";
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
  documentation: IApiCategory[] = [];
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
            description: "This is an object representing your Stripe balance. You can retrieve it to see the balance currently on your Stripe account. You can also retrieve the balance history, which contains a list of transactions that contributed to the balance (charges, payouts, and so forth). The available and pending amounts for each currency are broken down further by payment source types.",
            object: {
              json: '{\n' +
                '  "object": "balance",\n' +
                '  "available": [\n' +
                '    {\n' +
                '      "amount": 2217713,\n' +
                '      "currency": "cad",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 2217713\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 2685,\n' +
                '      "currency": "nok",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 2685\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 7254790,\n' +
                '      "currency": "gbp",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 7254790\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 218420,\n' +
                '      "currency": "nzd",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 218420\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 779902,\n' +
                '      "currency": "czk",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 779902\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": -1854,\n' +
                '      "currency": "aud",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": -1854\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 665198462295,\n' +
                '      "currency": "usd",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 369172412,\n' +
                '        "card": 664827737757\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": -76455,\n' +
                '      "currency": "eur",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": -76455\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": -40320,\n' +
                '      "currency": "jpy",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": -40320\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 12000,\n' +
                '      "currency": "brl",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 12000\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": -412,\n' +
                '      "currency": "sek",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": -412\n' +
                '      }\n' +
                '    }\n' +
                '  ],\n' +
                '  "connect_reserved": [\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "cad"\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "nok"\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "gbp"\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "nzd"\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "czk"\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "aud"\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 83080,\n' +
                '      "currency": "usd"\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 54584,\n' +
                '      "currency": "eur"\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "jpy"\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "brl"\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "sek"\n' +
                '    }\n' +
                '  ],\n' +
                '  "livemode": false,\n' +
                '  "pending": [\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "cad",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 0\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "nok",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 0\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "gbp",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 0\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "nzd",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 0\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "czk",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 0\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "aud",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 0\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 414755126,\n' +
                '      "currency": "usd",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 414755126\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "eur",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 0\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "jpy",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 0\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "brl",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 0\n' +
                '      }\n' +
                '    },\n' +
                '    {\n' +
                '      "amount": 0,\n' +
                '      "currency": "sek",\n' +
                '      "source_types": {\n' +
                '        "bank_account": 0,\n' +
                '        "card": 0\n' +
                '      }\n' +
                '    }\n' +
                '  ]\n' +
                '}',
              attributes: [
                {
                  name: "available",
                  type: "array of hashes",
                  description: "Available funds that you can transfer or pay out automatically by Stripe or explicitly through the Transfers API or Payouts API. You can find the available balance for each currency and payment type in the source_types property.",
                  child: [
                    {
                      name: "available.amount",
                      type: "integer",
                      description: "Balance amount."
                    },
                    {
                      name: "available.currency",
                      type: "currency",
                      description: 'Three-letter ISO currency code, in lowercase. Must be a supported currency.'
                    },
                    {
                      name: "available.source_types",
                      type: "hash",
                      description: "Breakdown of balance by source types.",
                      child: [
                        {
                          name: "available.source_types.bank_account",
                          type: "integer",
                          description: "Amount for bank account."
                        },
                        {
                          name: "available.source_types.card",
                          type: "integer",
                          description: 'Amount for card.'
                        },
                        {
                          name: "available.source_types.fpx",
                          type: "integer",
                          description: 'Amount for FPX.',

                        }
                      ]
                    }
                  ]
                },
                {
                  name: "pending",
                  type: "array of hashes",
                  description: "Funds that aren’t available in the balance yet. You can find the pending balance for each currency and each payment type in the source_types property.",
                  child: [
                    {
                      name: "pending.amount",
                      type: "integer",
                      description: "Balance amount."
                    },
                    {
                      name: "pending.currency",
                      type: "currency",
                      description: 'Three-letter ISO currency code, in lowercase. Must be a supported currency.'
                    },
                    {
                      name: "pending.source_types",
                      type: "hash",
                      description: "Breakdown of balance by source types.",
                      child: [
                        {
                          name: "pending.source_types.bank_account",
                          type: "integer",
                          description: "Amount for bank account."
                        },
                        {
                          name: "pending.source_types.card",
                          type: "integer",
                          description: 'Amount for card.'
                        },
                        {
                          name: "pending.source_types.fpx",
                          type: "integer",
                          description: 'Amount for FPX.',
                        }
                      ]
                    }
                  ]
                },
              ]
            },
            apis: [
              {
                name: "Retrieve balance",
                description: 'Retrieves the current account balance, based on the authentication that was used to make the request. For a sample request, see Accounting for negative balances.',
                return: 'Returns a balance object for the account that was authenticated in the request.',
                method: 'GET',
                endpoint: '/v1/balance',
                requestCode: 'import stripe\n' +
                  'stripe.api_key = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"\n' +
                  '\n' +
                  'stripe.Balance.retrieve()',
                responseJson: '{\n' +
                  '  "object": "balance",\n' +
                  '  "available": [\n' +
                  '    {\n' +
                  '      "amount": 2217713,\n' +
                  '      "currency": "cad",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 2217713\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 2685,\n' +
                  '      "currency": "nok",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 2685\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 7254790,\n' +
                  '      "currency": "gbp",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 7254790\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 218420,\n' +
                  '      "currency": "nzd",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 218420\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 779902,\n' +
                  '      "currency": "czk",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 779902\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": -1854,\n' +
                  '      "currency": "aud",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": -1854\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 665198462295,\n' +
                  '      "currency": "usd",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 369172412,\n' +
                  '        "card": 664827737757\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": -76455,\n' +
                  '      "currency": "eur",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": -76455\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": -40320,\n' +
                  '      "currency": "jpy",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": -40320\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 12000,\n' +
                  '      "currency": "brl",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 12000\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": -412,\n' +
                  '      "currency": "sek",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": -412\n' +
                  '      }\n' +
                  '    }\n' +
                  '  ],\n' +
                  '  "connect_reserved": [\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "cad"\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "nok"\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "gbp"\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "nzd"\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "czk"\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "aud"\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 83080,\n' +
                  '      "currency": "usd"\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 54584,\n' +
                  '      "currency": "eur"\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "jpy"\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "brl"\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "sek"\n' +
                  '    }\n' +
                  '  ],\n' +
                  '  "livemode": false,\n' +
                  '  "pending": [\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "cad",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 0\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "nok",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 0\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "gbp",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 0\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "nzd",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 0\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "czk",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 0\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "aud",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 0\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 414755126,\n' +
                  '      "currency": "usd",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 414755126\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "eur",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 0\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "jpy",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 0\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "brl",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 0\n' +
                  '      }\n' +
                  '    },\n' +
                  '    {\n' +
                  '      "amount": 0,\n' +
                  '      "currency": "sek",\n' +
                  '      "source_types": {\n' +
                  '        "bank_account": 0,\n' +
                  '        "card": 0\n' +
                  '      }\n' +
                  '    }\n' +
                  '  ]\n' +
                  '}'
              }
            ]
          },
          {
            name: "Balance Transactions",
            description: "Balance transactions represent funds moving through your Stripe account. They're created for every type of transaction that comes into or flows out of your Stripe account balance.",
            object: {
              json: '{\n' +
                '  "id": "txn_1032Rp2eZvKYlo2CpErRBj09",\n' +
                '  "object": "balance_transaction",\n' +
                '  "amount": 400,\n' +
                '  "available_on": 1386374400,\n' +
                '  "created": 1385853205,\n' +
                '  "currency": "usd",\n' +
                '  "description": "Charge for test@example.com",\n' +
                '  "exchange_rate": null,\n' +
                '  "fee": 42,\n' +
                '  "fee_details": [\n' +
                '    {\n' +
                '      "amount": 42,\n' +
                '      "application": null,\n' +
                '      "currency": "usd",\n' +
                '      "description": "Stripe processing fees",\n' +
                '      "type": "stripe_fee"\n' +
                '    }\n' +
                '  ],\n' +
                '  "net": 358,\n' +
                '  "reporting_category": "charge",\n' +
                '  "source": "ch_1032Rp2eZvKYlo2Cv6jPGmkF",\n' +
                '  "status": "available",\n' +
                '  "type": "charge"\n' +
                '}',
              attributes: [
                {
                  name: "id",
                  type: "string",
                  description: "Unique identifier for the object."
                },
                {
                  name: "amount",
                  type: "integer",
                  description: "Gross amount of the transaction, in cents."
                },
                {
                  name: "currency",
                  type: "currency",
                  description: "Three-letter ISO currency code, in lowercase. Must be a supported currency."
                },
                {
                  name: "description",
                  type: "string",
                  description: "An arbitrary string attached to the object. Often useful for displaying to users."
                },
                {
                  name: "fee",
                  type: "integer",
                  description: "Fees (in cents) paid for this transaction."
                },
                {
                  name: "fee_details",
                  type: "array of hashes",
                  description: "Detailed breakdown of fees (in cents) paid for this transaction.",
                  child: [
                    {
                      name: "fee_details.amount",
                      type: "integer",
                      description: "Amount of the fee, in cents."
                    },
                    {
                      name: "fee_details.application",
                      type: "string",
                      description: 'ID of the Connect application that earned the fee.'
                    },
                    {
                      name: "fee_details.currency",
                      type: "currency",
                      description: "Three-letter ISO currency code, in lowercase. Must be a supported currency."
                    },
                    {
                      name: "fee_details.description",
                      type: "string",
                      description: 'An arbitrary string attached to the object. Often useful for displaying to users.'
                    },
                    {
                      name: "fee_details.type",
                      type: "string",
                      description: "Type of the fee, one of: application_fee, stripe_fee or tax."
                    }
                  ]
                },
                {
                  name: "net",
                  type: "integer",
                  description: "Net amount of the transaction, in cents."
                },
                {
                  name: "source",
                  type: "string",
                  description: "The Stripe object to which this transaction is related."
                },
                {
                  name: "status",
                  type: "string",
                  description: "If the transaction’s net funds are available in the Stripe balance yet. Either available or pending"
                }
              ]
            },
            apis: [
              {
                name: "Retrieve a balance transaction",
                description: 'Retrieves the balance transaction with the given ID. Note that this endpoint previously used the path /v1/balance/history/:id.',
                return: 'Returns a balance transaction if a valid balance transaction ID was provided. Raises an error otherwise.',
                requestCode: 'import stripe\n' +
                  'stripe.api_key = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"\n' +
                  '\n' +
                  'stripe.BalanceTransaction.retrieve(\n' +
                  '  "txn_1032Rp2eZvKYlo2CpErRBj09",\n' +
                  ')',
                responseJson: '{\n' +
                  '  "id": "txn_1032Rp2eZvKYlo2CpErRBj09",\n' +
                  '  "object": "balance_transaction",\n' +
                  '  "amount": 400,\n' +
                  '  "available_on": 1386374400,\n' +
                  '  "created": 1385853205,\n' +
                  '  "currency": "usd",\n' +
                  '  "description": "Charge for test@example.com",\n' +
                  '  "exchange_rate": null,\n' +
                  '  "fee": 42,\n' +
                  '  "fee_details": [\n' +
                  '    {\n' +
                  '      "amount": 42,\n' +
                  '      "application": null,\n' +
                  '      "currency": "usd",\n' +
                  '      "description": "Stripe processing fees",\n' +
                  '      "type": "stripe_fee"\n' +
                  '    }\n' +
                  '  ],\n' +
                  '  "net": 358,\n' +
                  '  "reporting_category": "charge",\n' +
                  '  "source": "ch_1032Rp2eZvKYlo2Cv6jPGmkF",\n' +
                  '  "status": "available",\n' +
                  '  "type": "charge"\n' +
                  '}',
                method: 'GET',
                endpoint: '/v1/balance_transactions/:id'
              },
              {
                name: "List all balance transaction",
                description: 'Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first. Note that this endpoint was previously called “Balance history” and used the path /v1/balance/history.',
                parameter: [
                  {
                    name: "payout",
                    type: "optional",
                    description: "For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID.",
                  },
                  {
                    name: "type",
                    type: "optional",
                    description: "Only returns transactions of the given type. One of: adjustment, advance, advance_funding, anticipation_repayment, application_fee, application_fee_refund, charge, connect_collection_transfer, contribution, issuing_authorization_hold, issuing_authorization_release, issuing_dispute, issuing_transaction, obligation_inbound, obligation_outbound, obligation_reversal_inbound, obligation_reversal_outbound, obligation_payout, obligation_payout_failure, payment, payment_failure_refund, payment_refund, payment_reversal, payout, payout_cancel, payout_failure, refund, refund_failure, reserve_transaction, reserved_funds, stripe_fee, stripe_fx_fee, tax_fee, topup, topup_reversal, transfer, transfer_cancel, transfer_failure, or transfer_refund.",
                  },
                ],
                return: 'A dictionary with a data property that contains an array of up to limit transactions, starting after transaction starting_after. Each entry in the array is a separate transaction history object. If no more transactions are available, the resulting array will be empty.',
                requestCode: 'import stripe\n' +
                  'stripe.api_key = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"\n' +
                  '\n' +
                  'stripe.BalanceTransaction.list(limit=3)',
                responseJson: '{\n' +
                  '  "object": "list",\n' +
                  '  "url": "/v1/balance_transactions",\n' +
                  '  "has_more": false,\n' +
                  '  "data": [\n' +
                  '    {\n' +
                  '      "id": "txn_1032Rp2eZvKYlo2CpErRBj09",\n' +
                  '      "object": "balance_transaction",\n' +
                  '      "amount": 400,\n' +
                  '      "available_on": 1386374400,\n' +
                  '      "created": 1385853205,\n' +
                  '      "currency": "usd",\n' +
                  '      "description": "Charge for test@example.com",\n' +
                  '      "exchange_rate": null,\n' +
                  '      "fee": 42,\n' +
                  '      "fee_details": [\n' +
                  '        {\n' +
                  '          "amount": 42,\n' +
                  '          "application": null,\n' +
                  '          "currency": "usd",\n' +
                  '          "description": "Stripe processing fees",\n' +
                  '          "type": "stripe_fee"\n' +
                  '        }\n' +
                  '      ],\n' +
                  '      "net": 358,\n' +
                  '      "reporting_category": "charge",\n' +
                  '      "source": "ch_1032Rp2eZvKYlo2Cv6jPGmkF",\n' +
                  '      "status": "available",\n' +
                  '      "type": "charge"\n' +
                  '    },\n' +
                  '    {...},\n' +
                  '    {...}\n' +
                  '  ]\n' +
                  '}',
                method: 'GET',
                endpoint: '/v1/balance_transactions'
              }
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
