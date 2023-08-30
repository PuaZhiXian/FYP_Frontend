import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HeaderComponent} from "../../../header/page/header/header.component";

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit{

  constructor(private router: Router) {
  }

  goHomePage() {
    this.router.navigate(['dashboard']);
  }

  ngOnInit(): void {
    HeaderComponent.logined = false;
  }
}
