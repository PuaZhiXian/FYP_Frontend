export class Temp {
  public static readonly singleCategory = {
    id: 0,
    category_name: 'Hello World',
    api_collections: [
      {
        id: 1,
        api_collection_name: 'Hello Collection',
        short_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in\n' +
          '        some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going\n' +
          '        to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of\n' +
          '        text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this\n' +
          '        the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful\n' +
          '        of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is\n' +
          '        therefore always free from repetition, injected humour, or non-characteristic words etc.',
        object_id: {
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
        },
        api_ids: [
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
        ],
      }
    ]
  };
  public static readonly singleCategoryNotPreview = {
    id: 0,
    category_name: 'Hello World Not Preview',
    api_collections: [
      {
        id: 1,
        api_collection_name: 'Hello Collection',
        short_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in\n' +
          '        some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going\n' +
          '        to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of\n' +
          '        text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this\n' +
          '        the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful\n' +
          '        of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is\n' +
          '        therefore always free from repetition, injected humour, or non-characteristic words etc.',
        object_id: {
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
        },
        api_ids: [
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
        ],
      }
    ]
  };
}
