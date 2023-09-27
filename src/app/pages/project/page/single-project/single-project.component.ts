import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UntypedFormBuilder} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";
import {finalize} from "rxjs";
import {ProjectOverview} from "../../../../interface/project/project-overview";

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
  projectOverview!: ProjectOverview;


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.projectId = params.get('projectId');
    });
    this.initProject();
  }

  initProject() {
    this.projectService.getSingleProject(this.projectId + "")
      .pipe(finalize(() => {
        this.loadingProject = false;
        this.ref.markForCheck();
        this.ref.detectChanges();
      }))
      .subscribe((resp) => {
        this.projectOverview = resp;
      })
  }

  changeTabs(tab: string) {
    this.selectingTab = tab;
  }

}
