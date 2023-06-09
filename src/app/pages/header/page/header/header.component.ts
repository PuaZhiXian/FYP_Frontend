import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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

  constructor(private router: Router,) {
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

  redirect(url:string){
    this.router.navigate(['/', url]);
  }

}
