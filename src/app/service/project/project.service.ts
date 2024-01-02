import {Injectable} from '@angular/core';
import {ProjectRestService} from "../../restService/project/project.rest.service";
import {Observable} from "rxjs";
import {ProjectOverview} from "../../interface/project/project-overview";
import {IApi} from "../../interface/api-collection/i-api";
import {IMessage} from "../../interface/authorization/i-message";
import {IProjectTokenLog} from "../../interface/project/i-project-token-log";
import {IAdminProjectDetail} from "../../interface/project/i-admin-project-detail";

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

  deleteProject(projectId: string): Observable<IMessage> {
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

  getProjectToken(project_id: string): Observable<IMessage> {
    return this.projectRestService.getProjectToken(project_id);
  }

  getTokenHistory(projectId: string): Observable<IProjectTokenLog[]> {
    return this.projectRestService.getTokenHistory(projectId);
  }

  saveProjectChange(projectOverview: ProjectOverview, projectId: string): Observable<IMessage> {
    return this.projectRestService.saveProjectChange(projectOverview, projectId);
  }

  //ADMIN
  getProjectList(vendorId: string): Observable<IAdminProjectDetail[]> {
    return this.projectRestService.getProjectList(vendorId);
  }

  blockProject(projectId: number): Observable<IMessage> {
    return this.projectRestService.blockProject(projectId);
  }

  unblockProject(projectId: number): Observable<IMessage> {
    return this.projectRestService.unblockProject(projectId);
  }
}
