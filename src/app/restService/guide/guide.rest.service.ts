import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GuideQna} from "../../interface/guide/guide-qna";

@Injectable({
  providedIn: 'root'
})
export class GuideRestService {

  private baseUrl = 'http://localhost:1337';
  private ProjectUrl: string = this.baseUrl + '/api';

  constructor(private httpClient: HttpClient) {
  }

  getGuides(): Observable<GuideQna[]> {
    return this.httpClient.get<GuideQna[]>(this.ProjectUrl + '/guides', {withCredentials: true});
  }
}
