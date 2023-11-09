import {Component, OnDestroy, OnInit} from '@angular/core';
import {NzConfigService} from "ng-zorro-antd/core/config";
import {Router} from "@angular/router";
import {HeaderComponent} from "../../../header/page/header/header.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  searchKey: string = '';

  constructor(private nzConfigService: NzConfigService,
              private router: Router) {
  }

  ngOnDestroy(): void {
    HeaderComponent.headerIndicator = '';
  }

  ngOnInit(): void {
    HeaderComponent.headerIndicator = 'dashboard';
    HeaderComponent.logined = true;
  }
}
