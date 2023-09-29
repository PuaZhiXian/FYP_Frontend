import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiCollectionDetail} from "../../interface/api-collection/i-api-collection-detail";
import {IApiCategory} from "../../interface/api-collection/i-api-category";
import {ISelectingApiCollection} from "../../interface/api-collection/i-selecting-api-collection";
import {AuthorizationService} from "../../service/authorization/authorization.service";
import {ISelect} from "../../interface/common/i-select";
import {environment} from "../../../environments/environment";
import { IHttpStatusCodeSummary } from 'src/app/interface/api-collection/i-http-status-code-summary';

@Injectable({
  providedIn: 'root'
})
export class ApiCollectionRestService {

  private ProjectUrl: string = environment.apiUrl + '/api';

  constructor(private httpClient: HttpClient,
              private authorizationService: AuthorizationService) {
  }

  getAllApiCollection(): Observable<IApiCollectionDetail[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<IApiCollectionDetail[]>(this.ProjectUrl + '/access-controls', {withCredentials: true}));
  }

  getApiDocumentation(programmingLanguage: string): Observable<IApiCategory[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<IApiCategory[]>(this.ProjectUrl + '/custom/api-collections/'+programmingLanguage, {withCredentials: true}));
  }

  getSubscribedApiCollection(): Observable<ISelectingApiCollection[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<ISelectingApiCollection[]>(this.ProjectUrl + '/custom/subscribed-api-collection', {withCredentials: true}));
  }

  getLanguageOption(): Observable<ISelect[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<ISelect[]>(this.ProjectUrl + '/code-lang-options', {withCredentials: true}));
  }

  getHttpStatusCode(): Observable<IHttpStatusCodeSummary[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<IHttpStatusCodeSummary[]>(this.ProjectUrl + '/http-status-codes', {withCredentials: true}));
  }
}
