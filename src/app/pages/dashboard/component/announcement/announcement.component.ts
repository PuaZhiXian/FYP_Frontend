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
  html: SafeHtml[] = [];

  ngOnInit(): void {
    this.getAnnouncement();
  }

  getAnnouncement() {
    /*this.commonService.getAnnouncement()
      .pipe((finalize(() => {
        this.loadingAnnouncement = false;
      })))
      .subscribe((resp) => {
        resp.forEach(value => {
          this.html.push(this.sanitizer.bypassSecurityTrustHtml(new Converter().makeHtml(value.announcement_text)))
        })
      })*/
    this.loadingAnnouncement = false;
    for (let i = 0; i < 3; i++) {
      let temp = "<h1>hello World " + i + "</h1>"
      this.html.push(this.sanitizer.bypassSecurityTrustHtml(new Converter().makeHtml(temp)))
    }
  }

}
