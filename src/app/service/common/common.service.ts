import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CommonRestService} from "../../restService/common/common-rest.service";
import {IAnnouncement} from "../../interface/common/i-announcement";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private commonRestService: CommonRestService,) {
  }

  getAnnouncement(): Observable<IAnnouncement> {
    return this.commonRestService.getAnnouncement();
  }

}
