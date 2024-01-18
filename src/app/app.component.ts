import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import hljs from 'highlight.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isCollapsed = false;
  title = 'testFileStructure';
  languages: string[] = ['en'];

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.use(this.languages[0])
    console.log('%cMake With Love By Zi Hao & Pua', 'color: red; font-size: 24px;');
    console.log('https://www.linkedin.com/in/tan-zi-hao-b75b40224/')
    console.log('https://www.linkedin.com/in/zhi-xian-pua-92147b220/')
  }
}
