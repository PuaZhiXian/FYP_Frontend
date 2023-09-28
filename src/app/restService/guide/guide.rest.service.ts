import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GuideQna} from "../../interface/guide/guide-qna";
import {AuthorizationService} from "../../service/authorization/authorization.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GuideRestService {

  private ProjectUrl: string = environment.apiUrl + '/api';

  constructor(private httpClient: HttpClient,
              private authorizationService: AuthorizationService) {
  }

  getGuides(): Observable<GuideQna[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<GuideQna[]>(this.ProjectUrl + '/guides', {withCredentials: true}));
  }
}
