import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {ISingleApiCollection} from "../../../../interface/api-collection/i-api-category";
import {ISelect} from "../../../../interface/common/i-select";
import hljs from "highlight.js";

@Component({
  selector: 'single-api-collection',
  templateUrl: './single-api-collection.component.html',
  styleUrls: ['./single-api-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleApiCollectionComponent implements OnInit {

  @Input() singleAPICollection!: ISingleApiCollection;
  @Input() programmingLanguageOptions: ISelect[] = [];
  @Input() programmingLanguage: string = '';
  @Input() switchingLang!: boolean;
  @Output() switchLanguageEvent = new EventEmitter<string>();

  loading: boolean = true;

  @ViewChild('content') content!: ElementRef;

  constructor(private ref: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.loading = false;
  }

  scrollToSection(sectionId: string) {
    const element = this.content.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  init() {
    this.loading = true;
    hljs.highlightAll();
    this.loading = false;
  }
}
