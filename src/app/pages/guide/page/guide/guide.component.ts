import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GuideQna} from "../../../../interface/guide/guide-qna";
import {GuideService} from "../../../../service/guide/guide.service";
import {finalize} from "rxjs";
import {HeaderComponent} from "../../../header/page/header/header.component";

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit, OnDestroy {

  guideQNAList: GuideQna[] = [];

  loadingGuideQNA: boolean = true;
  @ViewChild('content') content!: ElementRef;

  constructor(private guideService: GuideService,
              private ref: ChangeDetectorRef) {
  }

  ngOnDestroy(): void {
    HeaderComponent.headerIndicator = '';
  }

  ngOnInit(): void {
    HeaderComponent.headerIndicator = 'guide';
    this.initQNA();
  }

  initQNA() {
    this.guideService.getGuides()
      .pipe(finalize(() => {
        this.loadingGuideQNA = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.guideQNAList = resp;
      })
  }

  scrollToSection(sectionId: string) {
    const element = this.content.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
}
