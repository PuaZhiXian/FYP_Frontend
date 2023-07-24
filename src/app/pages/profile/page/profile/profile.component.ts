import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UntypedFormBuilder} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              public activatedRoute: ActivatedRoute,
              private projectService: ProjectService,
              private ref: ChangeDetectorRef) {
  }

  selectingTab: string = 'personal-information';

  ngOnInit(): void {
  }

  changeTabs(tab: string) {
    this.selectingTab = tab;
  }
}
