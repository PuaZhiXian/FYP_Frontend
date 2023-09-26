import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiCollectionDetail} from "../../interface/api-collection/i-api-collection-detail";
import {IApiCategory} from "../../interface/api-collection/i-api-category";
import {ISelectingApiCollection} from "../../interface/api-collection/i-selecting-api-collection";
import {AuthorizationService} from "../../service/authorization/authorization.service";

@Injectable({
  providedIn: 'root'
})
export class ApiCollectionRestService {

  private baseUrl = 'http://localhost:1337';
  private ProjectUrl: string = this.baseUrl + '/api';

  constructor(private httpClient: HttpClient,
              private authorizationService: AuthorizationService) {
  }

  getAllApiCollection(): Observable<IApiCollectionDetail[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<IApiCollectionDetail[]>(this.ProjectUrl + '/access-controls', {withCredentials: true}));
  }

  getApprovedApiCollection() {
    return this.authorizationService.handleApiError(this.httpClient.get<IApiCollectionDetail[]>(this.ProjectUrl + '/api-collections', {withCredentials: true}));
  }

  getApiDocumentation(): Observable<IApiCategory[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<IApiCategory[]>(this.ProjectUrl + '/custom/api-collections', {withCredentials: true}));
  }

  getSubscribedApiCollection(): Observable<ISelectingApiCollection[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<ISelectingApiCollection[]>(this.ProjectUrl + '/custom/subscribed-api-collection', {withCredentials: true}));
  }
}
