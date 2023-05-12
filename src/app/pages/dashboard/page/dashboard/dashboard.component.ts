import {Component, OnInit} from '@angular/core';
import {NzConfigService} from "ng-zorro-antd/core/config";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private nzConfigService: NzConfigService) {
  }

  dark = true
  programming_language = 'python'
  loading = true

  options = {
    'python': '',
    'java': ''
  }
  code =''

  ngOnInit(): void {
    const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: this.dark? 'vs-dark':'vs',
        readOnly: true,
        minimap: {enabled: false},
      }
    });
    this.loading = false
    this.code = 'sd'
    console.log(this.options)
  }

  toggleDarkMode(){
    this.dark = !this.dark
    const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: this.dark? 'vs-dark':'vs',
        readOnly: true,
        minimap: {enabled: false},
      }
    });
  }


}
