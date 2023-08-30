import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UntypedFormBuilder} from "@angular/forms";
import {ProjectService} from "../../../../service/project/project.service";
import {AuthorizationService} from "../../../../service/authorization/authorization.service";
import {NzMessageService} from "ng-zorro-antd/message";

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
              private authorizationService: AuthorizationService,
              private message: NzMessageService,
              private ref: ChangeDetectorRef) {
  }

  selectingTab: string = 'personal-information';

  ngOnInit(): void {
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
