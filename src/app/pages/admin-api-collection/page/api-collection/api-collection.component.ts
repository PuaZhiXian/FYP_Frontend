import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
import {ISelect} from "../../../../interface/common/i-select";
import hljs from "highlight.js";

@Component({
  selector: 'app-api-collection',
  templateUrl: './api-collection.component.html',
  styleUrls: ['./api-collection.component.scss']
})
export class ApiCollectionComponent implements OnInit {

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
  previewModalVisibility: boolean = true;
  pageNumber: number = 2;

  apiCollectionObject = {
    "id": 4,
    "object": "{\n  \"id\": \"cus_9s6XKzkNRiz8i3\",\n  \"object\": \"customer\",\n  \"address\": null,\n  \"balance\": 0,\n  \"created\": 1483565364,\n  \"currency\": \"usd\",\n  \"default_source\": \"card_1NZex82eZvKYlo2CZR21ocY1\",\n  \"delinquent\": false,\n  \"description\": \"test\",\n  \"discount\": null,\n  \"email\": \"test@gmail.com\",\n  \"invoice_prefix\": \"28278FC\",\n  \"invoice_settings\": {\n    \"custom_fields\": null,\n    \"default_payment_method\": \"pm_1O4iJ12eZvKYlo2CZXSZb9Z2\",\n    \"footer\": null,\n    \"rendering_options\": null\n  },\n  \"livemode\": false,\n  \"metadata\": {\n    \"order_id\": \"6735\"\n  },\n  \"name\": \"test\",\n  \"next_invoice_sequence\": 394,\n  \"phone\": null,\n  \"preferred_locales\": [\n    \"de-DE\"\n  ],\n  \"shipping\": null,\n  \"tax_exempt\": \"none\",\n  \"test_clock\": null\n}",
    "attr_ids": [
      {
        "id": 30,
        "attr_name": "id",
        "attr_type": "string",
        "attr_description": "Unique identifier for the object."
      },
      {
        "id": 31,
        "attr_name": "address",
        "attr_type": "hash",
        "attr_description": "The customer’s address.",
        "child_attr_ids": [
          {
            "id": 32,
            "attr_name": "address.city",
            "attr_type": "string",
            "attr_description": "City, district, suburb, town, or village."
          },
          {
            "id": 33,
            "attr_name": "address.country",
            "attr_type": "string",
            "attr_description": "Two-letter country code (ISO 3166-1 alpha-2)."
          },
          {
            "id": 34,
            "attr_name": "address.line1",
            "attr_type": "string",
            "attr_description": "Address line 1 (e.g., street, PO Box, or company name)."
          },
          {
            "id": 35,
            "attr_name": "address.line2",
            "attr_type": "string",
            "attr_description": "Address line 2 (e.g., apartment, suite, unit, or building)."
          },
          {
            "id": 36,
            "attr_name": "address.postal_code",
            "attr_type": "string",
            "attr_description": "ZIP or postal code."
          },
          {
            "id": 37,
            "attr_name": "address.state",
            "attr_type": "string",
            "attr_description": "State, county, province, or region."
          }
        ]
      },
      {
        "id": 38,
        "attr_name": "description",
        "attr_type": "string",
        "attr_description": "An arbitrary string attached to the object. Often useful for displaying to users."
      },
      {
        "id": 39,
        "attr_name": "email",
        "attr_type": "string",
        "attr_description": "The customer’s email address."
      },
      {
        "id": 40,
        "attr_name": "metadata",
        "attr_type": "hash",
        "attr_description": "Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format."
      },
      {
        "id": 41,
        "attr_name": "name",
        "attr_type": "string",
        "attr_description": "The customer’s full name or business name."
      },
      {
        "id": 42,
        "attr_name": "phone",
        "attr_type": "string",
        "attr_description": "The customer’s phone number."
      },
      {
        "id": 43,
        "attr_name": "shipping",
        "attr_type": "hash",
        "attr_description": "Mailing and shipping address for the customer. Appears on invoices emailed to this customer.",
        "child_attr_ids": [
          {
            "id": 44,
            "attr_name": "shipping.address",
            "attr_type": "hash",
            "attr_description": "Customer shipping address.",
            "child_attr_ids": [
              {
                "id": 45,
                "attr_name": "shipping.address.city",
                "attr_type": "string",
                "attr_description": "City, district, suburb, town, or village."
              },
              {
                "id": 46,
                "attr_name": "shipping.address.country",
                "attr_type": "country",
                "attr_description": "Two-letter country code (ISO 3166-1 alpha-2)."
              },
              {
                "id": 47,
                "attr_name": "shipping.address.line1",
                "attr_type": "string",
                "attr_description": "Address line 1 (e.g., street, PO Box, or company name)."
              }
            ]
          },
          {
            "id": 48,
            "attr_name": "shipping.name",
            "attr_type": "string",
            "attr_description": "Customer name."
          },
          {
            "id": 49,
            "attr_name": "shipping.phone",
            "attr_type": "string",
            "attr_description": "Customer phone (including extension).\n\n"
          }
        ]
      }
    ]
  }
  api_ids = [
    {
      "id": 6,
      "api_name": "Create a customer",
      "api_description": "Creates a customer",
      "api_return": "Returns the Customer object after successful customer creation. Throws an error if create parameters are invalid (for example, specifying an invalid coupon or an invalid source).",
      "api_method": "POST",
      "api_endpoint": "/v1/customers",
      "api_response_json": "{\n  \"id\": \"cus_9s6XKzkNRiz8i3\",\n  \"object\": \"customer\",\n  \"address\": null,\n  \"balance\": 0,\n  \"created\": 1483565364,\n  \"currency\": \"usd\",\n  \"default_source\": \"card_1NZex82eZvKYlo2CZR21ocY1\",\n  \"delinquent\": false,\n  \"description\": \"My First Test Customer (created for API docs at https://www.stripe.com/docs/api)\",\n  \"discount\": null,\n  \"email\": \"test@gmail.com\",\n  \"invoice_prefix\": \"28278FC\",\n  \"invoice_settings\": {\n    \"custom_fields\": null,\n    \"default_payment_method\": \"pm_1O4iJ12eZvKYlo2CZXSZb9Z2\",\n    \"footer\": null,\n    \"rendering_options\": null\n  },\n  \"livemode\": false,\n  \"metadata\": {\n    \"order_id\": \"6735\"\n  },\n  \"name\": \"test\",\n  \"next_invoice_sequence\": 394,\n  \"phone\": null,\n  \"preferred_locales\": [\n    \"de-DE\"\n  ],\n  \"shipping\": null,\n  \"tax_exempt\": \"none\",\n  \"test_clock\": null\n}",
      "api_req_code_ids": [
        {
          "id": 12,
          "lang_name": "java",
          "api_req_code": "Stripe.apiKey = \"sk_test_4eC39HqLyjWDarjtT1zdp7dc\";\n\nMap<String, Object> params = new HashMap<>();\nparams.put(\n  \"description\",\n  \"My First Test Customer (created for API docs at https://www.stripe.com/docs/api)\"\n);\n\nCustomer customer = Customer.create(params);"
        }
      ],
      "api_param_ids": [
        {
          "id": 11,
          "attr_name": "address",
          "attr_type": "optional Map",
          "attr_description": "The customer’s address."
        },
        {
          "id": 18,
          "attr_name": "description",
          "attr_type": "optional",
          "attr_description": "An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard."
        },
        {
          "id": 19,
          "attr_name": "email",
          "attr_type": "optional",
          "attr_description": "Customer’s email address. It’s displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to 512 characters."
        },
        {
          "id": 20,
          "attr_name": "metadata",
          "attr_type": "optional Map",
          "attr_description": "Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata."
        },
        {
          "id": 21,
          "attr_name": "name",
          "attr_type": "optional",
          "attr_description": "The customer’s full name or business name."
        },
        {
          "id": 22,
          "attr_name": "payment_method",
          "attr_type": "optional",
          "attr_description": "The ID of the PaymentMethod to attach to the customer."
        },
        {
          "id": 23,
          "attr_name": "phone",
          "attr_type": "optional",
          "attr_description": "The customer’s phone number."
        },
        {
          "id": 24,
          "attr_name": "shipping",
          "attr_type": "optional Map",
          "attr_description": "The customer’s shipping information. Appears on invoices emailed to this customer."
        }
      ],
      "lang_name": "java",
      "api_req_code": "Stripe.apiKey = \"sk_test_4eC39HqLyjWDarjtT1zdp7dc\";\n\nMap<String, Object> params = new HashMap<>();\nparams.put(\n  \"description\",\n  \"My First Test Customer (created for API docs at https://www.stripe.com/docs/api)\"\n);\n\nCustomer customer = Customer.create(params);"
    },
    {
      "id": 7,
      "api_name": "Retrieve a customer",
      "api_description": "Retrieves a Customer object.",
      "api_return": "Returns the Customer object for a valid identifier. If it’s for a deleted Customer, a subset of the customer’s information is returned, including a deleted property that’s set to true.",
      "api_method": "GET",
      "api_endpoint": "/v1/customers/:id",
      "api_response_json": "{\n  \"id\": \"cus_9s6XKzkNRiz8i3\",\n  \"object\": \"customer\",\n  \"address\": null,\n  \"balance\": 0,\n  \"created\": 1483565364,\n  \"currency\": \"usd\",\n  \"default_source\": \"card_1NZex82eZvKYlo2CZR21ocY1\",\n  \"delinquent\": false,\n  \"description\": \"test\",\n  \"discount\": null,\n  \"email\": \"test@gmail.com\",\n  \"invoice_prefix\": \"28278FC\",\n  \"invoice_settings\": {\n    \"custom_fields\": null,\n    \"default_payment_method\": \"pm_1O4iJ12eZvKYlo2CZXSZb9Z2\",\n    \"footer\": null,\n    \"rendering_options\": null\n  },\n  \"livemode\": false,\n  \"metadata\": {\n    \"order_id\": \"6735\"\n  },\n  \"name\": \"test\",\n  \"next_invoice_sequence\": 394,\n  \"phone\": null,\n  \"preferred_locales\": [\n    \"de-DE\"\n  ],\n  \"shipping\": null,\n  \"tax_exempt\": \"none\",\n  \"test_clock\": null\n}",
      "api_req_code_ids": [
        {
          "id": 15,
          "lang_name": "java",
          "api_req_code": "Stripe.apiKey = \"sk_test_4eC39HqLyjWDarjtT1zdp7dc\";\n\nCustomer customer =\n  Customer.retrieve(\"cus_9s6XKzkNRiz8i3\");"
        }
      ],
      "api_param_ids": [],
      "lang_name": "java",
      "api_req_code": "Stripe.apiKey = \"sk_test_4eC39HqLyjWDarjtT1zdp7dc\";\n\nCustomer customer =\n  Customer.retrieve(\"cus_9s6XKzkNRiz8i3\");"
    },
    {
      "id": 8,
      "api_name": "Update a customer",
      "api_description": "Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the source parameter, that becomes the customer’s active source (e.g., a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the source parameter: for each of the customer’s current subscriptions, if the subscription bills automatically and is in the past_due state, then the latest open invoice for the subscription with automatic collection enabled will be retried. This retry will not count as an automatic retry, and will not affect the next regularly scheduled payment for the invoice. Changing the default_source for a customer will not trigger this behavior.\nThis request accepts mostly the same arguments as the customer creation call.",
      "api_return": "Returns the customer object if the update succeeded. Throws an error if update parameters are invalid (e.g. specifying an invalid coupon or an invalid source).",
      "api_method": "POST",
      "api_endpoint": "/v1/customers/:id",
      "api_response_json": "{\n  \"id\": \"cus_9s6XKzkNRiz8i3\",\n  \"object\": \"customer\",\n  \"address\": null,\n  \"balance\": 0,\n  \"created\": 1483565364,\n  \"currency\": \"usd\",\n  \"default_source\": \"card_1NZex82eZvKYlo2CZR21ocY1\",\n  \"delinquent\": false,\n  \"description\": \"test\",\n  \"discount\": null,\n  \"email\": \"test@gmail.com\",\n  \"invoice_prefix\": \"28278FC\",\n  \"invoice_settings\": {\n    \"custom_fields\": null,\n    \"default_payment_method\": \"pm_1O4iJ12eZvKYlo2CZXSZb9Z2\",\n    \"footer\": null,\n    \"rendering_options\": null\n  },\n  \"livemode\": false,\n  \"metadata\": {\n    \"order_id\": \"6735\"\n  },\n  \"name\": \"test\",\n  \"next_invoice_sequence\": 394,\n  \"phone\": null,\n  \"preferred_locales\": [\n    \"de-DE\"\n  ],\n  \"shipping\": null,\n  \"tax_exempt\": \"none\",\n  \"test_clock\": null\n}",
      "api_req_code_ids": [
        {
          "id": 16,
          "lang_name": "java",
          "api_req_code": "Stripe.apiKey = \"sk_test_4eC39HqLyjWDarjtT1zdp7dc\";\n\nCustomer customer =\n  Customer.retrieve(\"cus_9s6XKzkNRiz8i3\");\n\nMap<String, Object> metadata = new HashMap<>();\nmetadata.put(\"order_id\", \"6735\");\nMap<String, Object> params = new HashMap<>();\nparams.put(\"metadata\", metadata);\n\nCustomer updatedCustomer =\n  customer.update(params);"
        }
      ],
      "api_param_ids": [
        {
          "id": 34,
          "attr_name": "address",
          "attr_type": "optional Map",
          "attr_description": "The customer’s address."
        },
        {
          "id": 35,
          "attr_name": "description",
          "attr_type": "optional",
          "attr_description": "An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard."
        },
        {
          "id": 36,
          "attr_name": "email",
          "attr_type": "optional",
          "attr_description": "Customer’s email address. It’s displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to 512 characters."
        },
        {
          "id": 37,
          "attr_name": "metadata",
          "attr_type": "optional Map",
          "attr_description": "Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata."
        },
        {
          "id": 38,
          "attr_name": "name",
          "attr_type": "optional",
          "attr_description": "The customer’s full name or business name."
        },
        {
          "id": 39,
          "attr_name": "phone",
          "attr_type": "optional",
          "attr_description": "The customer’s phone number."
        },
        {
          "id": 40,
          "attr_name": "shipping",
          "attr_type": "optional Map",
          "attr_description": "The customer’s shipping information. Appears on invoices emailed to this customer."
        }
      ],
      "lang_name": "java",
      "api_req_code": "Stripe.apiKey = \"sk_test_4eC39HqLyjWDarjtT1zdp7dc\";\n\nCustomer customer =\n  Customer.retrieve(\"cus_9s6XKzkNRiz8i3\");\n\nMap<String, Object> metadata = new HashMap<>();\nmetadata.put(\"order_id\", \"6735\");\nMap<String, Object> params = new HashMap<>();\nparams.put(\"metadata\", metadata);\n\nCustomer updatedCustomer =\n  customer.update(params);"
    },
    {
      "id": 10,
      "api_name": "List all customers",
      "api_description": "Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.",
      "api_return": "A Map with a data property that contains an array of up to limit customers, starting after customer starting_after. Passing an optional email will result in filtering to customers with only that exact email address. Each entry in the array is a separate customer object. If no more customers are available, the resulting array will be empty.",
      "api_method": "GET",
      "api_endpoint": "/v1/customers",
      "api_response_json": "{\n  \"object\": \"list\",\n  \"url\": \"/v1/customers\",\n  \"has_more\": false,\n  \"data\": [\n    {\n      \"id\": \"cus_9s6XKzkNRiz8i3\",\n      \"object\": \"customer\",\n      \"address\": null,\n      \"balance\": 0,\n      \"created\": 1483565364,\n      \"currency\": \"usd\",\n      \"default_source\": \"card_1NZex82eZvKYlo2CZR21ocY1\",\n      \"delinquent\": false,\n      \"description\": \"test\",\n      \"discount\": null,\n      \"email\": \"test@gmail.com\",\n      \"invoice_prefix\": \"28278FC\",\n      \"invoice_settings\": {\n        \"custom_fields\": null,\n        \"default_payment_method\": \"pm_1O4iJ12eZvKYlo2CZXSZb9Z2\",\n        \"footer\": null,\n        \"rendering_options\": null\n      },\n      \"livemode\": false,\n      \"metadata\": {\n        \"order_id\": \"6735\"\n      },\n      \"name\": \"test\",\n      \"next_invoice_sequence\": 394,\n      \"phone\": null,\n      \"preferred_locales\": [\n        \"de-DE\"\n      ],\n      \"shipping\": null,\n      \"tax_exempt\": \"none\",\n      \"test_clock\": null\n    },\n    {...},\n    {...}\n  ]\n}",
      "api_req_code_ids": [
        {
          "id": 20,
          "lang_name": "java",
          "api_req_code": "Stripe.apiKey = \"sk_test_4eC39HqLyjWDarjtT1zdp7dc\";\n\nMap<String, Object> params = new HashMap<>();\nparams.put(\"limit\", 3);\n\nCustomerCollection customers =\n  Customer.list(params);"
        }
      ],
      "api_param_ids": [
        {
          "id": 41,
          "attr_name": "email",
          "attr_type": "optional",
          "attr_description": "A case-sensitive filter on the list based on the customer’s email field. The value must be a string."
        }
      ],
      "lang_name": "java",
      "api_req_code": "Stripe.apiKey = \"sk_test_4eC39HqLyjWDarjtT1zdp7dc\";\n\nMap<String, Object> params = new HashMap<>();\nparams.put(\"limit\", 3);\n\nCustomerCollection customers =\n  Customer.list(params);"
    },
    {
      "id": 9,
      "api_name": "Delete a customer",
      "api_description": "Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.",
      "api_return": "Returns an object with a deleted parameter on success. If the customer ID does not exist, this call raises an error.\nUnlike other objects, deleted customers can still be retrieved through the API in order to be able to track their history. Deleting customers removes all credit card details and prevents any further operations to be performed (such as adding a new subscription).",
      "api_method": "DELETE",
      "api_endpoint": "/v1/customers/:id",
      "api_response_json": "{\n  \"id\": \"cus_9s6XKzkNRiz8i3\",\n  \"object\": \"customer\",\n  \"deleted\": true\n}",
      "api_req_code_ids": [
        {
          "id": 19,
          "lang_name": "java",
          "api_req_code": "Stripe.apiKey = \"sk_test_4eC39HqLyjWDarjtT1zdp7dc\";\n\nCustomer customer =\n  Customer.retrieve(\"cus_9s6XKzkNRiz8i3\");\n\nCustomer deletedCustomer = customer.delete()"
        }
      ],
      "api_param_ids": [],
      "lang_name": "java",
      "api_req_code": "Stripe.apiKey = \"sk_test_4eC39HqLyjWDarjtT1zdp7dc\";\n\nCustomer customer =\n  Customer.retrieve(\"cus_9s6XKzkNRiz8i3\");\n\nCustomer deletedCustomer = customer.delete()"
    },
    {
      "id": 11,
      "api_name": "Search customers",
      "api_description": "Search for customers you’ve previously created using Stripe’s Search Query Language. Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up to an hour behind during outages. Search functionality is not available to merchants in India.",
      "api_return": "A dictionary with a data property that contains an array of up to limit customers. If no objects match the query, the resulting array will be empty. See the related guide on expanding properties in lists.",
      "api_method": "GET",
      "api_endpoint": "/v1/customers/search",
      "api_response_json": "{\n  \"object\": \"search_result\",\n  \"url\": \"/v1/customers/search\",\n  \"has_more\": false,\n  \"data\": [\n    {\n      \"id\": \"cus_9s6XKzkNRiz8i3\",\n      \"object\": \"customer\",\n      \"address\": null,\n      \"balance\": 0,\n      \"created\": 1483565364,\n      \"currency\": \"usd\",\n      \"default_source\": \"card_1NZex82eZvKYlo2CZR21ocY1\",\n      \"delinquent\": false,\n      \"description\": \"test\",\n      \"discount\": null,\n      \"email\": \"test@gmail.com\",\n      \"invoice_prefix\": \"28278FC\",\n      \"invoice_settings\": {\n        \"custom_fields\": null,\n        \"default_payment_method\": \"pm_1O4iJ12eZvKYlo2CZXSZb9Z2\",\n        \"footer\": null,\n        \"rendering_options\": null\n      },\n      \"livemode\": false,\n      \"metadata\": {\n        \"foo\": \"bar\"\n      },\n      \"name\": \"fakename\",\n      \"next_invoice_sequence\": 394,\n      \"phone\": null,\n      \"preferred_locales\": [\n        \"de-DE\"\n      ],\n      \"shipping\": null,\n      \"tax_exempt\": \"none\",\n      \"test_clock\": null\n    },\n    {...},\n    {...}\n  ]\n}",
      "api_req_code_ids": [
        {
          "id": 23,
          "lang_name": "java",
          "api_req_code": "Stripe.apiKey = \"sk_test_4eC39HqLyjWDarjtT1zdp7dc\";\n\nCustomerSearchParams params =\n  CustomerSearchParams\n    .builder()\n    .setQuery(\"name:'fakename' AND metadata['foo']:'bar'\")\n    .build();\n\nCustomerSearchResult result = Customer.search(params);"
        }
      ],
      "api_param_ids": [
        {
          "id": 42,
          "attr_name": "query",
          "attr_type": "REQUIRED",
          "attr_description": "The search query string. See search query language and the list of supported query fields for customers."
        },
        {
          "id": 43,
          "attr_name": "limit",
          "attr_type": "optional",
          "attr_description": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10."
        },
        {
          "id": 44,
          "attr_name": "page",
          "attr_type": "optional",
          "attr_description": "A cursor for pagination across multiple pages of results. Don’t include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results."
        }
      ],
      "lang_name": "java",
      "api_req_code": "Stripe.apiKey = \"sk_test_4eC39HqLyjWDarjtT1zdp7dc\";\n\nCustomerSearchParams params =\n  CustomerSearchParams\n    .builder()\n    .setQuery(\"name:'fakename' AND metadata['foo']:'bar'\")\n    .build();\n\nCustomerSearchResult result = Customer.search(params);"
    }
  ]

  programmingLanguageOptions: ISelect[] = [{label: 'Java', value: 'java'}];
  programmingLanguage: string = 'java';
  switchingLang = false;

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private ref: ChangeDetectorRef,
              private vendorService: VendorService,
              private message: NzMessageService,
              private modal: NzModalService,
              private apiCollectionService: ApiCollectionService) {
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

    return true; // Allow the file to be uploaded
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
    if (this.createNewCollectionForm.valid) {
      this.apiCollectionService.createNewApiCollection(this.createNewCollectionForm.value)
        .subscribe((resp) => {
          if (resp.message) {
            this.message.success(resp.message);
            this.closeCreateNewCollectionModal();
            //TODO
            //get preview collection obj
            this.initApiCategoryList();
          } else {
            this.message.error(resp.error || '');
          }
        })
    } else {
      Object.values(this.createNewCollectionForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
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

  closePreviewModal() {
    this.previewModalVisibility = false;
  }

  openPreviewModal() {
    this.previewModalVisibility = true;
  }

  confirmCreateCollection() {
    //TODO -- api to confirm collection create -- unpublish to publish
  }

  switchLanguage(programmingLanguage: string) {
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
    this.loading = true;
    hljs.highlightAll();
    this.loading = false;
  }

}
