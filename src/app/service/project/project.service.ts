import {Injectable} from '@angular/core';
import {ProjectRestService} from "../../restService/project/project.rest.service";
import {Observable} from "rxjs";
import {ProjectOverview} from "../../interface/project/project-overview";
import {IApi} from "../../interface/api-collection/i-api";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private projectRestService: ProjectRestService,) {
  }

  addProject(projectOverview: ProjectOverview) {
    return this.projectRestService.addProject(projectOverview);
  }

  deleteProject(projectId: string): Observable<any> {
    return this.projectRestService.deleteProject(projectId);
  }

  getAllProject(): Observable<ProjectOverview[]> {
    return this.projectRestService.getAllProject();
  }

  getSingleProject(projectId: string): Observable<ProjectOverview> {
    return this.projectRestService.getSingleProject(projectId);
  }

  getProjectStatistics(projectId: string): Observable<any> {
    return this.projectRestService.getProjectStatistics(projectId);
  }

  getProjectAPICollection(projectId: string): Observable<IApi[]> {
    return this.projectRestService.getProjectAPICollection(projectId);
  }

  getProjectToken(): Observable<any> {
    return this.projectRestService.getProjectToken();
  }

  getTokenHistory(): Observable<any> {
    return this.projectRestService.getTokenHistory();
  }

}
