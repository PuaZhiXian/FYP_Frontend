import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiCollectionDetail} from "../../interface/api-collection/i-api-collection-detail";
import {IApiCategory} from "../../interface/api-collection/i-api-category";
import {ISelectingApiCollection} from "../../interface/api-collection/i-selecting-api-collection";
import {AuthorizationService} from "../../service/authorization/authorization.service";
import {ISelect} from "../../interface/common/i-select";
import {environment} from "../../../environments/environment";
import {IHttpStatusCodeSummary} from 'src/app/interface/api-collection/i-http-status-code-summary';
import {IApiDocumentationObject} from 'src/app/interface/api-collection/i-api-documentation-object';
import {IAdminApiCategory} from "../../interface/api-collection/i-admin-api-category";
import {IAdminSetAccessControl} from "../../interface/api-collection/i-admin-set-access-control";
import {IMessage} from "../../interface/authorization/i-message";
import {IAdminApiCollection} from "../../interface/api-collection/i-admin-api-collection";

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
    return this.authorizationService.handleApiError(this.httpClient.get<IApiCategory[]>(this.ProjectUrl + '/custom/api-collections/' + programmingLanguage, {withCredentials: true}));
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

  getErrorObject(): Observable<IApiDocumentationObject[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<IApiDocumentationObject[]>(this.ProjectUrl + '/error-objs', {withCredentials: true}))
  }

  getErrorType(): Observable<IHttpStatusCodeSummary[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<IHttpStatusCodeSummary[]>(this.ProjectUrl + '/error-types', {withCredentials: true}));
  }

  //ADMIN
  getAPICategoryList(character: string): Observable<IAdminApiCategory[]> {
    return this.httpClient.get<IAdminApiCategory[]>(this.ProjectUrl + '/custom/get-all-api-category/' + character, {withCredentials: true});
  }

  getAccessControl(vendorId: string, character: string): Observable<IAdminApiCategory[]> {
    return this.httpClient.post<IAdminApiCategory[]>(this.ProjectUrl + '/custom/get-one-user-access-control/' + character, {id: vendorId}, {withCredentials: true});
  }

  createNewApiCategory(apiCategoryDetail: IAdminApiCategory): Observable<IMessage> {
    return this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/create-api-category', apiCategoryDetail, {withCredentials: true});
  }

  createNewApiCollection(apiCollectionDetail: IAdminApiCollection): Observable<IMessage> {
    return this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/create-api-collection', apiCollectionDetail, {withCredentials: true});
  }

  setAccessControl(setAccessControl: IAdminSetAccessControl): Observable<IMessage> {
    return this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/set-one-user-access-control', setAccessControl, {withCredentials: true});
  }

  deleteCollection(apiCollectionId: number): Observable<IMessage> {
    return this.httpClient.delete<IMessage>(this.ProjectUrl + '/custom/delete-api-collection/' + apiCollectionId, {withCredentials: true});
  }

  deleteCategory(categoryId: number): Observable<IMessage> {
    return this.httpClient.delete<IMessage>(this.ProjectUrl + '/custom/delete-api-category/' + categoryId, {withCredentials: true});
  }

  uploadAPICollection(file: string): Observable<IMessage> {
    return this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/upload-file-content', {file}, {withCredentials: true});
  }

  getSingleAPICollection(apiCollectionId: string): Observable<IApiCategory> {
    return this.httpClient.get<IApiCategory>(this.ProjectUrl + '/api-collections/' + apiCollectionId, {withCredentials: true});
  }

  publishAPICollection(apiCollectionId: string): Observable<IMessage> {
    return this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/publish-api-collection', {apiCollectionId}, {withCredentials: true});
  }

}
