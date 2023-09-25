import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonService} from "../../../../service/common/common.service";
import {finalize} from "rxjs";
import {Converter} from 'showdown';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AnnouncementComponent implements OnInit {


  constructor(private commonService: CommonService,
              private sanitizer: DomSanitizer) {
  }

  loadingAnnouncement: boolean = true;
  html!: SafeHtml | null;

  ngOnInit(): void {
    this.getAnnouncement();
  }

  getAnnouncement() {
    this.commonService.getAnnouncement()
      .pipe((finalize(() => {
        this.loadingAnnouncement = false;
      })))
      .subscribe((resp) => {
        if (resp.announcement_text) {
          this.html = this.sanitizer.bypassSecurityTrustHtml(new Converter().makeHtml(resp.announcement_text));
        } else {
          this.html = null;
        }
      })

  }

}
