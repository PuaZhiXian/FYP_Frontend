import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProjectOverview} from "../../interface/project/project-overview";
import {IMessage} from 'src/app/interface/authorization/i-message';
import {AuthorizationService} from "../../service/authorization/authorization.service";
import {IApi} from "../../interface/api-collection/i-api";
import {IProjectTokenLog} from "../../interface/project/i-project-token-log";
import {environment} from "../../../environments/environment";
import {IAdminProjectDetail} from "../../interface/project/i-admin-project-detail";

@Injectable({
  providedIn: 'root'
})
export class ProjectRestService {

  private ProjectUrl: string = environment.apiUrl + '/api';

  constructor(private httpClient: HttpClient,
              private authorizationService: AuthorizationService) {
  }

  addProject(projectOverview: ProjectOverview): Observable<IMessage> {
    return this.authorizationService.handleApiError(this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/create-project', projectOverview, {withCredentials: true}));
  }

  deleteProject(projectId: string): Observable<IMessage> {
    return this.authorizationService.handleApiError(this.httpClient.delete<IMessage>(this.ProjectUrl + '/custom/delete-project/' + projectId, {withCredentials: true}));
  }

  getAllProject(): Observable<ProjectOverview[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<ProjectOverview[]>(this.ProjectUrl + '/projects', {withCredentials: true}));
  }

  getSingleProject(projectId: string): Observable<ProjectOverview> {
    return this.authorizationService.handleApiError(this.httpClient.get<ProjectOverview[]>(this.ProjectUrl + '/custom/get-project-details/' + projectId, {withCredentials: true}));
  }

  getProjectStatistics(projectId: string): Observable<any> {
    //TODO: wait jia hong
    return this.authorizationService.handleApiError(this.httpClient.get<any>("https://api.github.com/users/hadley/orgs"));
  }

  getProjectAPICollection(projectId: string): Observable<IApi[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<IApi[]>(this.ProjectUrl + '/custom/get-project-api-collection/' + projectId, {withCredentials: true}));
  }

  getProjectToken(project_id: string): Observable<IMessage> {
    return this.authorizationService.handleApiError(this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/request-project-token', {project_id}, {withCredentials: true}));
  }

  getTokenHistory(projectId: string): Observable<IProjectTokenLog[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<IProjectTokenLog[]>(this.ProjectUrl + '/custom/get-all-project-tokens/' + projectId, {withCredentials: true}));
  }

  saveProjectChange(projectOverview: ProjectOverview, projectId: string): Observable<IMessage> {
    return this.authorizationService.handleApiError(this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/update-project/' + projectId, projectOverview, {withCredentials: true}));
  }

  //ADMIN
  getProjectList(vendorId: string): Observable<IAdminProjectDetail[]> {
    return this.httpClient.get<IAdminProjectDetail[]>(this.ProjectUrl + '/custom/get-user-project-table/' + vendorId, {withCredentials: true});
  }

  blockProject(projectId: number): Observable<IMessage> {
    return this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/block-user-project', {project_id: projectId}, {withCredentials: true});
  }

  unblockProject(projectId: number): Observable<IMessage> {
    return this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/unblock-user-project', {project_id: projectId}, {withCredentials: true});
  }

}
