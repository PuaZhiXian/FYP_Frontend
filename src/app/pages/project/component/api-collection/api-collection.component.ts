import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UntypedFormBuilder} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {finalize} from "rxjs";
import {IApi} from "../../../../interface/api-collection/i-api";

@Component({
  selector: 'api-collection',
  templateUrl: './api-collection.component.html',
  styleUrls: ['./api-collection.component.scss']
})
export class ApiCollectionComponent implements OnInit {

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private projectService: ProjectService,
              private message: NzMessageService,
              private ref: ChangeDetectorRef) {
  }

  @Input() projectId!: string | null;

  loadingCollection: boolean = true;
  apiCollection: IApi[] = [];

  ngOnInit(): void {
    this.initApiCollection();
  }

  initApiCollection() {
    this.projectService.getProjectAPICollection(this.projectId + "")
      .pipe(finalize(() => {
        this.loadingCollection = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.apiCollection = [
          {
            id:"AC01",
            title: "API Collection 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
            id:"AC02",
            title: "API Collection 2",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          },
          {
            id:"AC03",
            title: "API Collection 3",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."
          },
          {
            id:"AC04",
            title: "API Collection 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
            id:"AC05",
            title: "API Collection 5",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          },
          {
            id:"AC06",
            title: "API Collection 6",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."
          },
          {
            id:"AC07",
            title: "API Collection 7",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
            id:"AC08",
            title: "API Collection 8",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          },
          {
            id:"AC09",
            title: "API Collection 9",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."
          },
          {
            id:"AC010",
            title: "API Collection 10",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        ]
      })
  }

  viewDocs(apiCollectionId: string) {
    this.router.navigate(['/', 'product', 'single-api', apiCollectionId]);
  }

}
