import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {NzConfigService} from "ng-zorro-antd/core/config";
import hljs from "highlight.js";
import {NzSelectComponent} from 'ng-zorro-antd/select';

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
  @Output() programmingLanguageChange = new EventEmitter<string>();
  @Input() title: string = '';
  loading: boolean = true;

  @ViewChild('mySelect', {read: NzSelectComponent}) mySelect!: NzSelectComponent;

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
    this._setWidth();
  }


  switchLanguage(programmingLanguage: string) {
    this.programmingLanguage = programmingLanguage;
    this.programmingLanguageChange.emit(programmingLanguage);
    this.ref.detectChanges();
    this.ref.markForCheck();
  }

  codeEditor() {
    this.loading = false;
  }

  copyToClipBoard() {
    navigator.clipboard.writeText(this.code);
  }

  _setWidth(): void {
    this.mySelect.cdkConnectedOverlay.width = 100;
    this.mySelect.updateCdkConnectedOverlayStatus();
  }

}
