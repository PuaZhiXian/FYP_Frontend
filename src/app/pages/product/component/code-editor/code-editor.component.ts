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
import {ISelect} from "../../../../interface/common/i-select";
import {CommonService} from "../../../../service/common/common.service";

@Component({
  selector: 'code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeEditorComponent implements OnInit, AfterViewInit {


  @Input() code: string = '';
  @Input() programmingLanguageOptions: ISelect[] = [];
  @Input() programmingLanguage: string = '';
  @Output() programmingLanguageChange = new EventEmitter<string>();
  @Input() title: string = '';
  loading: boolean = true;

  @ViewChild('mySelect', {read: NzSelectComponent}) mySelect!: NzSelectComponent;

  constructor(private nzConfigService: NzConfigService,
              private ref: ChangeDetectorRef,
              private commonService: CommonService) {
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
    this.commonService.copyToClipboard(this.code);
  }

  _setWidth(): void {
    this.mySelect.cdkConnectedOverlay.width = 100;
    this.mySelect.updateCdkConnectedOverlayStatus();
  }

}
