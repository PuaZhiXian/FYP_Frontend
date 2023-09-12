import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ISingleApiCollection} from "../../../../interface/api-collection/i-api-category";

@Component({
  selector: 'single-api-collection',
  templateUrl: './single-api-collection.component.html',
  styleUrls: ['./single-api-collection.component.scss']
})
export class SingleApiCollectionComponent implements OnInit {

  @Input() singleAPICollection!: ISingleApiCollection;
  @Input() programmingLanguageOptions: string[] = [];
  @Input() programmingLanguage: string = 'javascript';

  loading: boolean = true;
  editorConfig: any;

  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.codeEditor();
  }

  codeEditor() {
    this.editorConfig = {
      language: 'json',
      theme: 'vs',
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
}
