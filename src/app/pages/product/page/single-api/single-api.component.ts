import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {docs, IApiDocumentation} from "../../../../interface/api-collection/i-api-documentation";

@Component({
  selector: 'app-single-api',
  templateUrl: './single-api.component.html',
  styleUrls: ['./single-api.component.scss']
})
export class SingleApiComponent implements OnInit {

  constructor(private fb: UntypedFormBuilder,
              private router: Router,
              public activatedRoute: ActivatedRoute) {
  }

  apiCollectionId !: string | null;

  apiCollectionAccess: boolean = true;
  apiDocumentation: IApiDocumentation[] = []

  selectingAnchor: string = 'Overview';
  selectingAPIDocumentation!: docs;
  anchorText: string[] = [
    "Overview",
    "Request Payload",
    "Response Parameter",
    "Try it",
    "Request Samples",
    "Response Samples"
  ]

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.apiCollectionId = params.get('apiCollectionId');
    });
    this.initAPIDocumentation();
  }

  initAPIDocumentation() {
    this.apiDocumentation = [
      {
        category: "Product",
        apis: [
          {
            method: "GET",
            name: "List Products",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            requestPayload: [
              {
                parameter: "Token",
                dataType: "String",
                require: "Required",
                description: "A generated alphanumeric string prepared by PopBox separately",
                remark: "Without this parameter, the service will not be able to be accessed"
              }
            ],
            responseParameter: [
              {
                parameter: "UserId",
                dataType: "String",
                require: "Required",
                description: "User id corresponding to this token",
                remark: "Will return null if this user does not exist"
              }
            ]
          },
          {
            method: "GET",
            name: "Get Product Details",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            requestPayload: [
              {
                parameter: "Token",
                dataType: "String",
                require: "Required",
                description: "A unique token to access the product details",
                remark: "Access will be denied without this parameter"
              }
            ],
            responseParameter: [
              {
                parameter: "ProductId",
                dataType: "String",
                require: "Required",
                description: "Unique identifier for the product",
                remark: "Will return null if the product is not found"
              }
            ]
          },
          {
            method: "GET",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            name: "Search Products",
            requestPayload: [
              {
                parameter: "Token",
                dataType: "String",
                require: "Required",
                description: "Authorization token for accessing the search feature",
                remark: "Search functionality will not work without this parameter"
              }
            ],
            responseParameter: [
              {
                parameter: "Results",
                dataType: "Array",
                require: "Required",
                description: "An array containing the search results",
                remark: "The array may be empty if no results are found"
              }
            ]
          },
          {
            method: "POST",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            name: "Add Product to Cart",
            requestPayload: [
              {
                parameter: "Token",
                dataType: "String",
                require: "Required",
                description: "Authentication token for adding products to the cart",
                remark: "Cart operations will not work without this parameter"
              }
            ],
            responseParameter: [
              {
                parameter: "Success",
                dataType: "Boolean",
                require: "Required",
                description: "Indicates whether the product was successfully added to the cart",
                remark: "True for success, false otherwise"
              }
            ]
          },
          {
            method: "POST",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            name: "Remove Product from Cart",
            requestPayload: [
              {
                parameter: "Token",
                dataType: "String",
                require: "Required",
                description: "Authentication token for removing products from the cart",
                remark: "Cart operations will not work without this parameter"
              }
            ],
            responseParameter: [
              {
                parameter: "CartItemCount",
                dataType: "Number",
                require: "Required",
                description: "The number of items remaining in the cart after removal",
                remark: "Will return 0 if the cart is empty after removal"
              }
            ]
          }
        ]
      },
      {
        category: "User",
        apis: [
          {
            method: "GET",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            name: "Get User Profile",
            requestPayload: [
              {
                parameter: "Token",
                dataType: "String",
                require: "Required",
                description: "Authentication token for accessing user profile information",
                remark: "User profile will not be accessible without this parameter"
              }
            ],
            responseParameter: [
              {
                parameter: "Username",
                dataType: "String",
                require: "Required",
                description: "Username of the user",
                remark: "Will return null if the user profile is not found"
              }
            ]
          },
          {
            method: "PUT",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            name: "Update User Settings",
            requestPayload: [
              {
                parameter: "Token",
                dataType: "String",
                require: "Required",
                description: "Authentication token for updating user settings",
                remark: "User settings will not be updated without this parameter"
              }
            ],
            responseParameter: [
              {
                parameter: "UpdatedFields",
                dataType: "Array",
                require: "Required",
                description: "An array containing the fields that were successfully updated",
                remark: "The array may be empty if no fields were updated"
              }
            ]
          },
          {
            method: "POST",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            name: "Change Password",
            requestPayload: [
              {
                parameter: "Token",
                dataType: "String",
                require: "Required",
                description: "Authentication token for changing the user's password",
                remark: "Password change will not be allowed without this parameter"
              }
            ],
            responseParameter: [
              {
                parameter: "Success",
                dataType: "Boolean",
                require: "Required",
                description: "Indicates whether the password was successfully changed",
                remark: "True for success, false otherwise"
              }
            ]
          },
          {
            method: "DELETE",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            name: "Delete Product",
            requestPayload: [
              {
                parameter: "Token",
                dataType: "String",
                require: "Required",
                description: "Authentication token for deleting a product",
                remark: "Product deletion will not be allowed without this parameter"
              },
              {
                parameter: "ProductId",
                dataType: "String",
                require: "Required",
                description: "Unique identifier of the product to be deleted",
                remark: "The product with this ID will be permanently removed from the system"
              }
            ],
            responseParameter: [
              {
                parameter: "Success",
                dataType: "Boolean",
                require: "Required",
                description: "Indicates whether the product was successfully deleted",
                remark: "True for success, false otherwise"
              }
            ]
          },
          {
            method: "POST",
            name: "Verify Email",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            requestPayload: [
              {
                parameter: "Token",
                dataType: "String",
                require: "Required",
                description: "Authentication token for verifying the user's email address",
                remark: "Email verification will not be allowed without this parameter"
              }
            ],
            responseParameter: [
              {
                parameter: "EmailVerified",
                dataType: "Boolean",
                require: "Required",
                description: "Indicates whether the email address was successfully verified",
                remark: "True for success, false otherwise"
              }
            ]
          }
        ]
      }
    ]
    this.selectingAPIDocumentation = this.apiDocumentation[0]?.apis[0];
  }

  changeAnchorText(anchorText: string) {
    this.selectingAnchor = anchorText;
  }

  selectAPIDocumentation(selectingAPIDocumentation: docs) {
    this.selectingAPIDocumentation = selectingAPIDocumentation;
  }
}
