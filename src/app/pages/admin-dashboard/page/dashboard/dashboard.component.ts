import {Component, OnInit} from '@angular/core';
import {AdminHeaderComponent} from "../../../admin-header/page/header/admin-header.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    AdminHeaderComponent.headerIndicator = 'dashboard';
  }


}
