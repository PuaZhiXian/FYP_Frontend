import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GuideQna} from "../../../../interface/guide/guide-qna";
import {GuideService} from "../../../../service/guide/guide.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  guideQNAList: GuideQna[] = [];

  loadingGuideQNA: boolean = true;

  constructor(private guideService: GuideService,
              private ref: ChangeDetectorRef) {
  }


  ngOnInit(): void {
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


}
