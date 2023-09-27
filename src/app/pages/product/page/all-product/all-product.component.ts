import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {IApiCollection} from "../../../../interface/api-collection/i-api-collection";

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  apiCollection!: IApiCollection[];
  selectedApiCollection: IApiCollection[] = [];

  constructor(private fb: UntypedFormBuilder,
              private router: Router,
              public activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.initForm();
    this.initAPICollection();
  }

  initForm() {
    this.validateForm = this.fb.group({
      select: [null, []]
    });
  }

  initAPICollection() {
    this.apiCollection = [
      {
        category: "Product A",
        apis: [
          {
            id: 'AC01',
            api_collection_name: 'API Collection 1',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          },
          {
            id: 'AC02',
            api_collection_name: 'API Collection 2',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          },
          {
            id: 'AC03',
            api_collection_name: 'API Collection 3',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          }
        ]
      },
      {
        category: "Product B",
        apis: [
          {
            id: 'AC04',
            api_collection_name: 'API Collection 1',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          },
          {
            id: 'AC05',
            api_collection_name: 'API Collection 2',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          },
          {
            id: 'AC06',
            api_collection_name: 'API Collection 3',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          }
        ]
      },
      {
        category: "Product C",
        apis: [
          {
            id: 'AC07',
            api_collection_name: 'API Collection 1',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          },
          {
            id: 'AC08',
            api_collection_name: 'API Collection 2',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          },
          {
            id: 'AC09',
            api_collection_name: 'API Collection 3',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          }
        ]
      }
    ]

    this.selectedApiCollection = this.apiCollection;
  }

  log(str: string[]) {
    if (str.length == 0) {
      this.selectedApiCollection = this.apiCollection;
    } else {
      this.selectedApiCollection = this.apiCollection.filter((items) => {
        return str.includes(items.category);
      })
    }
  }

  viewDocs(apiCollectionId: string) {
    this.router.navigate(['/', 'product', 'single-api', apiCollectionId]);
  }

}
