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
  }
}
