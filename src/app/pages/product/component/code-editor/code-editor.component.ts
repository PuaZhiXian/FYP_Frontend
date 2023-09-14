import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {NzConfigService} from "ng-zorro-antd/core/config";
import hljs from "highlight.js";

@Component({
  selector: 'code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeEditorComponent implements OnInit, AfterViewInit {


  @Input() code: string = '';
  @Input() programmingLanguageOptions: string[] = [];
  @Input() programmingLanguage: string = 'javascript';
  @Input() title: string = '';
  loading: boolean = true;
  editorConfig: any;


  constructor(private nzConfigService: NzConfigService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.codeEditor();
  }

  ngAfterViewInit(): void {
    hljs.configure({
      ignoreUnescapedHTML: true
    });
    hljs.highlightAll();
  }


  switchLanguage(programmingLanguage: string) {
    this.programmingLanguage = programmingLanguage;
    this.ref.detectChanges();
    this.ref.markForCheck();
  }

  codeEditor() {
    // const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    // this.nzConfigService.set('codeEditor', {
    //   defaultEditorOption: {
    //     ...defaultEditorOption,
    //     theme: 'vs-dark',
    //     readOnly: true,
    //     padding: {
    //       bottom: 10,
    //       top: 10
    //     },
    //     scrollbar: {
    //       vertical: "hidden",
    //       handleMouseWheel: false,
    //     },
    //     overviewRulerLanes: 0,
    //     overviewRulerBorder: false,
    //     minimap: {enabled: false},
    //   }
    // });

    this.editorConfig = {
      language: this.programmingLanguage,
      // theme: 'vs-dark',
      readOnly: true,
      padding: {
        bottom: 10,
        top: 10
      },
      scrollbar: {
        handleMouseWheel: true,
      },
      overviewRulerLanes: 0,
      overviewRulerBorder: false,
      minimap: {enabled: false},
    }
    this.loading = false;
  }

  copyToClipBoard() {
    navigator.clipboard.writeText(this.code);
  }
}
