import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProjectOverview} from "../../interface/project/project-overview";
import {IMessage} from 'src/app/interface/authorization/i-message';
import {AuthorizationService} from "../../service/authorization/authorization.service";
import {IApi} from "../../interface/api-collection/i-api";

@Injectable({
  providedIn: 'root'
})
export class ProjectRestService {

  private baseUrl = 'http://localhost:1337';
  private ProjectUrl: string = this.baseUrl + '/api';

  constructor(private httpClient: HttpClient,
              private authorizationService: AuthorizationService) {
  }

  addProject(projectOverview: ProjectOverview): Observable<IMessage> {
    return this.authorizationService.handleApiError(this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/create-project', projectOverview, {withCredentials: true}));
  }

  deleteProject(projectId: string): Observable<any> {
    return this.authorizationService.handleApiError(this.httpClient.delete<IMessage>(this.ProjectUrl + '/custom/delete-project/' + projectId, {withCredentials: true}));
  }

  getAllProject(): Observable<ProjectOverview[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<ProjectOverview[]>(this.ProjectUrl + '/projects', {withCredentials: true}));
  }

  getSingleProject(projectId: string): Observable<ProjectOverview> {
    return this.authorizationService.handleApiError(this.httpClient.get<ProjectOverview[]>(this.ProjectUrl + '/custom/get-project-details/' + projectId, {withCredentials: true}));
  }

  getProjectStatistics(projectId: string): Observable<any> {
    //TODO: integrate get project's statistics api
    return this.authorizationService.handleApiError(this.httpClient.get<any>("https://api.github.com/users/hadley/orgs"));
  }

  getProjectAPICollection(projectId: string): Observable<IApi[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<IApi[]>(this.ProjectUrl + '/custom/get-project-api-collection/' + projectId, {withCredentials: true}));
  }

  getProjectToken(): Observable<any> {
    //TODO: integrate get new project token
    return this.authorizationService.handleApiError(this.httpClient.get<any>("https://api.github.com/users/hadley/orgs"));
  }

  getTokenHistory(): Observable<any> {
    //TODO: integrate get all project token history
    return this.authorizationService.handleApiError(this.httpClient.get<any>("https://api.github.com/users/hadley/orgs"));
  }


}
