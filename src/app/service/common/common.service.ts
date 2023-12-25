import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CommonRestService} from "../../restService/common/common-rest.service";
import {IAnnouncement} from "../../interface/common/i-announcement";
import {NzMessageService} from "ng-zorro-antd/message";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private commonRestService: CommonRestService,
              private message: NzMessageService,) {
  }

  getAnnouncement(): Observable<IAnnouncement[]> {
    return this.commonRestService.getAnnouncement();
  }

  copyToClipboard(textToCopy: string) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy);
    } else {
      // Use the 'out of viewport hidden text area' trick
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;

      // Move textarea out of the viewport so it's not visible
      textArea.style.position = "absolute";
      textArea.style.left = "-999999px";

      document.body.prepend(textArea);
      textArea.select();

      try {
        document.execCommand('copy');
      } catch (error) {
        console.error(error);
      } finally {
        textArea.remove();
      }
    }
    this.message.success('Copied to Clipboard')
  }


}
