import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ApiCollectionRestService} from "../../restService/apiCollection/api-collection-rest.service";
import {IApiCollectionDetail} from "../../interface/api-collection/i-api-collection-detail";
import {IApiCategory} from "../../interface/api-collection/i-api-category";
import {ISelectingApiCollection} from "../../interface/api-collection/i-selecting-api-collection";
import {ISelect} from "../../interface/common/i-select";
import {IHttpStatusCodeSummary} from 'src/app/interface/api-collection/i-http-status-code-summary';
import {IApiDocumentationObject} from 'src/app/interface/api-collection/i-api-documentation-object';
import {IAdminApiCollection} from "../../interface/api-collection/i-admin-api-collection";
import {IAdminSetAccessControl} from "../../interface/api-collection/i-admin-set-access-control";
import {IMessage} from "../../interface/authorization/i-message";
import {IAdminApiCategory} from "../../interface/api-collection/i-admin-api-category";

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

  getErrorObject(): Observable<IApiDocumentationObject[]> {
    return this.apiCollectionRestService.getErrorObject();
  }

  getErrorType(): Observable<IHttpStatusCodeSummary[]> {
    return this.apiCollectionRestService.getErrorType();
  }

  //ADMIN
  getAPICategoryList(character: string): Observable<IAdminApiCategory[]> {
    return this.apiCollectionRestService.getAPICategoryList(character);
  }

  getAccessControl(vendorId: string, character: string): Observable<IAdminApiCategory[]> {
    return this.apiCollectionRestService.getAccessControl(vendorId, character);
  }

  createNewApiCategory(apiCategoryDetail: IAdminApiCategory): Observable<IMessage> {
    return this.apiCollectionRestService.createNewApiCategory(apiCategoryDetail);
  }

  createNewApiCollection(apiCollectionDetail: IAdminApiCollection): Observable<IMessage> {
    return this.apiCollectionRestService.createNewApiCollection(apiCollectionDetail);
  }

  setAccessControl(setAccessControl: IAdminSetAccessControl): Observable<IMessage> {
    return this.apiCollectionRestService.setAccessControl(setAccessControl);
  }

  deleteCollection(apiCollectionId: number): Observable<IMessage> {
    return this.apiCollectionRestService.deleteCollection(apiCollectionId);
  }

  deleteCategory(categoryId: number): Observable<IMessage> {
    return this.apiCollectionRestService.deleteCategory(categoryId);
  }

  uploadAPICollection(file: string, categoryId: string): Observable<IMessage> {
    return this.apiCollectionRestService.uploadAPICollection(file, categoryId);
  }

  getSingleAPICollection(apiCollectionId: string, programmingLanguage: string): Observable<IApiCategory> {
    return this.apiCollectionRestService.getSingleAPICollection(apiCollectionId, programmingLanguage);
  }

  publishAPICollection(apiCollectionId: string): Observable<IMessage> {
    return this.apiCollectionRestService.publishAPICollection(apiCollectionId);
  }

}
