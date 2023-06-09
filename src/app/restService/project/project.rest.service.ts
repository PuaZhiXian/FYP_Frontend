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

  addProject(projectOverview: ProjectOverview) {
    return this.httpClient.post(this.ProjectUrl + '/add', projectOverview);
  }

  deleteProject() {

  }

  getAllProject(): Observable<ProjectOverview[]> {
    return this.httpClient.get<ProjectOverview[]>(this.ProjectUrl + "/project");
  }
}
