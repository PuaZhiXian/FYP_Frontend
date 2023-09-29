import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ApiCollectionRestService} from "../../restService/apiCollection/api-collection-rest.service";
import {IApiCollectionDetail} from "../../interface/api-collection/i-api-collection-detail";
import {IApiCategory} from "../../interface/api-collection/i-api-category";
import {ISelectingApiCollection} from "../../interface/api-collection/i-selecting-api-collection";
import {ISelect} from "../../interface/common/i-select";
import { IHttpStatusCodeSummary } from 'src/app/interface/api-collection/i-http-status-code-summary';

@Injectable({
  providedIn: 'root'
})
export class ApiCollectionService {

  constructor(private apiCollectionRestService: ApiCollectionRestService,) {
  }

  getAllApiCollection(): Observable<IApiCollectionDetail[]> {
    return this.apiCollectionRestService.getAllApiCollection();
  }

  getApiDocumentation(programmingLanguage: string): Observable<IApiCategory[]> {
    return this.apiCollectionRestService.getApiDocumentation(programmingLanguage);
  }

  getSubscribedApiCollection(): Observable<ISelectingApiCollection[]> {
    return this.apiCollectionRestService.getSubscribedApiCollection();
  }

  getLanguageOption(): Observable<ISelect[]> {
    return this.apiCollectionRestService.getLanguageOption();
  }

  getHttpStatusCode(): Observable<IHttpStatusCodeSummary[]> {
    return this.apiCollectionRestService.getHttpStatusCode();
  }
}
