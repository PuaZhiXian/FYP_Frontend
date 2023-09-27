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
        this.apiCollection = resp;
      })
  }

  viewDocs(apiCollectionId: string) {
    this.router.navigate(['/', 'product']);
  }

}
