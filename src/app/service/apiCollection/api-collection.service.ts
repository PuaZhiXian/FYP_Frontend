import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ApiCollectionRestService} from "../../restService/apiCollection/api-collection-rest.service";
import {IApiCollectionDetail} from "../../interface/api-collection/i-api-collection-detail";
import {IApiCategory} from "../../interface/api-collection/i-api-category";
import {ISelectingApiCollection} from "../../interface/api-collection/i-selecting-api-collection";

@Injectable({
  providedIn: 'root'
})
export class ApiCollectionService {

  constructor(private apiCollectionRestService: ApiCollectionRestService,) {
  }

  getAllApiCollection(): Observable<IApiCollectionDetail[]> {
    return this.apiCollectionRestService.getAllApiCollection();
  }

  getApiDocumentation(): Observable<IApiCategory[]> {
    return this.apiCollectionRestService.getApiDocumentation();
  }

  getSubscribedApiCollection(): Observable<ISelectingApiCollection[]> {
    return this.apiCollectionRestService.getSubscribedApiCollection();
  }

}
