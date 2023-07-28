import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {IApiDocumentation} from "../../../../interface/api-collection/i-api-documentation";
import {IProjectStatistics} from "../../../../interface/project/i-project-statistics";

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
            method: 'GET',
            name: "List Product",
            requestPayload:[],
            responseParameter:[]
          },
          {
            method: 'POST',
            name: "Update Product",
            requestPayload:[],
            responseParameter:[]
          },
          {
            method: 'PUT',
            name: "Buy Product",
            requestPayload:[],
            responseParameter:[]
          }
        ]
      },
      {
        category: "Payment",
        apis: [
          {
            method: 'GET',
            name: "List Product",
            requestPayload:[],
            responseParameter:[]
          },
          {
            method: 'POST',
            name: "Update Product",
            requestPayload:[],
            responseParameter:[]
          },
          {
            method: 'PUT',
            name: "Buy Product",
            requestPayload:[],
            responseParameter:[]
          }
        ]
      }
    ]
  }

  changeAnchorText(anchorText: string) {
    this.selectingAnchor = anchorText;
  }

}
