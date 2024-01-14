import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {IHeaderList} from "../../../../interface/header/i-header-list";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  static logined: boolean = true;
  headerList!: IHeaderList[];
  static headerIndicator: string = '';
  static UserAbbre: string = '';

  constructor(private router: Router,
              private cookieService: CookieService) {
  }

  get getUserAbbre() {
    return this.cookieService.get('abbreName');
  }

  get staticLogined() {
    return HeaderComponent.logined;
  }

  get headerIndicator() {
    return HeaderComponent.headerIndicator;
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

  redirect(url: string) {
    this.router.navigate(['/', url]);
  }

}
