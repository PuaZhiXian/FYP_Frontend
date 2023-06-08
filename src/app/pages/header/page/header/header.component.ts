import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IHeaderList} from "../../../../interface/header/i-header-list";
import {AppComponent} from "../../../../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  static logined: boolean = false;
  headerList!: IHeaderList[];

  constructor(private route: ActivatedRoute,) {
  }

  get staticLogined() {
    return HeaderComponent.logined;
  }

  ngOnInit() {
    this.initHeaderList();
  }

  initHeaderList() {
    this.headerList = [
      {
        link: '/dashboard',
        nameKey: 'dashboard',
        selected: true
      },
      {
        link: '/dev',
        nameKey: 'dev.style.guide',
        selected: false
      },
    ]
  }

}
