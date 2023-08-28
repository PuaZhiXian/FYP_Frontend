import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {GuideQna} from "../../interface/guide/guide-qna";
import {GuideRestService} from "../../restService/guide/guide.rest.service";

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  constructor(
    private guideRestService: GuideRestService,) {
  }

  getGuides(): Observable<GuideQna[]> {
    return this.guideRestService.getGuides();
  }

}
