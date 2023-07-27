import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {IApiDocumentation} from "../../../../interface/api-collection/i-api-documentation";

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
          },
          {
            method: 'POST',
            name: "Update Product",
          },
          {
            method: 'PUT',
            name: "Buy Product",
          }
        ]
      },
      {
        category: "Payment",
        apis: [
          {
            method: 'GET',
            name: "List Product",
          },
          {
            method: 'POST',
            name: "Update Product",
          },
          {
            method: 'PUT',
            name: "Buy Product",
          }
        ]
      }
    ]
  }

}
