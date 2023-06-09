import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProjectOverview} from "../../interface/project/project-overview";

@Injectable({
  providedIn: 'root'
})
export class ProjectRestService {

  private baseUrl = 'http://localhost:4200';
  private ProjectUrl: string = this.baseUrl + '/api';

  constructor(private httpClient: HttpClient) {
  }

  addProject(projectOverview: ProjectOverview): Observable<any> {
    //TODO : integrate add Project API
    // return this.httpClient.post(this.ProjectUrl + '/add', projectOverview);
    return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  }

  deleteProject() {

  }

  getAllProject(): Observable<any> {
    //TODO : integrate add Project API
    //integrate get all project API
    //return this.httpClient.get<ProjectOverview[]>(this.ProjectUrl + "/project");
    return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  }
}
