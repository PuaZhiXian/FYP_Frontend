import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProjectOverview} from "../../interface/project/project-overview";
import {IMessage} from 'src/app/interface/authorization/i-message';

@Injectable({
  providedIn: 'root'
})
export class ProjectRestService {

  private baseUrl = 'http://localhost:1337';
  private ProjectUrl: string = this.baseUrl + '/api';

  constructor(private httpClient: HttpClient) {
  }

  addProject(projectOverview: ProjectOverview): Observable<IMessage> {
    return this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/create-project', projectOverview, {withCredentials: true});
  }

  deleteProject(projectId: string): Observable<any> {
    //TODO: integrate delete project api
    return this.httpClient.get<any>("https://api.github.com/users/hadley/orgs");
  }

  getAllProject(): Observable<ProjectOverview[]> {
    return this.httpClient.get<ProjectOverview[]>(this.ProjectUrl + '/projects', {withCredentials: true});
  }

  getSingleProject(): Observable<any> {
    //TODO: integrate get single project api
    return this.httpClient.get<any>("https://api.github.com/users/hadley/orgs");
  }

  getProjectStatistics(projectId: string): Observable<any> {
    //TODO: integrate get project's statistics api
    return this.httpClient.get<any>("https://api.github.com/users/hadley/orgs");
  }

  getProjectAPICollection(projectId: string): Observable<any> {
    //TODO: integrate get project's api collections
    return this.httpClient.get<any>("https://api.github.com/users/hadley/orgs");
  }

  getProjectToken(): Observable<any> {
    //TODO: integrate get new project token
    return this.httpClient.get<any>("https://api.github.com/users/hadley/orgs");
  }

  getTokenHistory(): Observable<any> {
    //TODO: integrate get all project token history
    return this.httpClient.get<any>("https://api.github.com/users/hadley/orgs");
  }


}
