import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  title = 'testFileStructure';
  languages: string[] = ['en'];

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.use(this.languages[0])
  }
}
