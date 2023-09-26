import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GuideQna} from "../../interface/guide/guide-qna";
import {AuthorizationService} from "../../service/authorization/authorization.service";

@Injectable({
  providedIn: 'root'
})
export class GuideRestService {

  private baseUrl = 'http://localhost:1337';
  private ProjectUrl: string = this.baseUrl + '/api';

  constructor(private httpClient: HttpClient,
              private authorizationService: AuthorizationService) {
  }

  getGuides(): Observable<GuideQna[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<GuideQna[]>(this.ProjectUrl + '/guides', {withCredentials: true}));
  }
}
