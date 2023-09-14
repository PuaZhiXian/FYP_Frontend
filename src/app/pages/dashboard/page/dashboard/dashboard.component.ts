import {Component, OnInit} from '@angular/core';
import {NzConfigService} from "ng-zorro-antd/core/config";
import {Router} from "@angular/router";
import {HeaderComponent} from "../../../header/page/header/header.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchKey: string = '';

  constructor(private nzConfigService: NzConfigService,
              private router: Router) {
  }

  ngOnInit(): void {
    HeaderComponent.logined = true;
  }
}
