import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UntypedFormBuilder} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleProjectComponent implements OnInit {

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              public activatedRoute: ActivatedRoute,
              private projectService: ProjectService,
              private ref: ChangeDetectorRef) {
  }

  projectId!: string | null;
  loadingProject: boolean = true;
  selectingTab: string = 'statistics';


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.projectId = params.get('projectId');
    });
    this.initProject();
    console.log(this.projectId);
  }

  initProject() {
    if (this.projectId != null) {
      this.projectService.getSingleProject()
        .pipe(finalize(() => {
          this.loadingProject = false;
        }))
        .subscribe((resp) => {

        })
    }
  }

  changeTabs(tab: string) {
    this.selectingTab = tab;
  }

}
