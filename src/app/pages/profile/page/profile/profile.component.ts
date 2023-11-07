import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UntypedFormBuilder} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";
import {AuthorizationService} from "../../../../service/authorization/authorization.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {HeaderComponent} from "../../../header/page/header/header.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              public activatedRoute: ActivatedRoute,
              private projectService: ProjectService,
              private authorizationService: AuthorizationService,
              private message: NzMessageService,
              private ref: ChangeDetectorRef) {
  }

  selectingTab: string = 'personal-information';

  ngOnDestroy(): void {
    HeaderComponent.headerIndicator = '';
  }

  ngOnInit(): void {
    HeaderComponent.headerIndicator = 'profile';
  }

  changeTabs(tab: string) {
    this.selectingTab = tab;
  }

  logout() {
    this.authorizationService.logout()
      .subscribe((resp) => {
        if (resp.message) {
          this.message.success(resp.message + "");
          this.router.navigate(['sign', 'sign-in']);
        } else if (resp.error) {
          this.message.error(resp.error);
        }
      })
  }
}
