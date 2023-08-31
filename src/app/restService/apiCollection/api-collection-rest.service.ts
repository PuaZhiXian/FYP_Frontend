import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GuideQna} from "../../interface/guide/guide-qna";
import {IApiCollectionDetail} from "../../interface/api-collection/i-api-collection-detail";

@Injectable({
  providedIn: 'root'
})
export class ApiCollectionRestService {

  private baseUrl = 'http://localhost:1337';
  private ProjectUrl: string = this.baseUrl + '/api';

  constructor(private httpClient: HttpClient) {
  }

  getAllApiCollection(): Observable<IApiCollectionDetail[]> {
    return this.httpClient.get<IApiCollectionDetail[]>(this.ProjectUrl + '/access-controls', {withCredentials: true});
  }

  getApprovedApiCollection(){
    return this.httpClient.get<IApiCollectionDetail[]>(this.ProjectUrl + '/api-collections', {withCredentials: true});
  }

}
