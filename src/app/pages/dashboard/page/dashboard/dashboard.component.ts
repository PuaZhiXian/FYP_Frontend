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

  dark = true
  programming_language = 'python'

  options = {
    'python': '',
    'java': ''
  }
  code = ''

  ngOnInit(): void {
    HeaderComponent.logined = true;
  }

  codeEditor() {
    const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: this.dark ? 'vs-dark' : 'vs',
        readOnly: true,
        minimap: {enabled: false},
      }
    });
    this.code = 'sd'
  }

  //Code Editor
  toggleDarkMode() {
    this.dark = !this.dark
    const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: this.dark ? 'vs-dark' : 'vs',
        readOnly: true,
        minimap: {enabled: false},
      }
    });
  }



}
